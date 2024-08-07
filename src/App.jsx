import React, { useEffect, useState } from "react";
import {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./services/Post";
import CreateFormModal from "./components/CreateFormModal/CreateFormModal";
import UpdateFormModal from "./components/UpdateFormModal/UpdateFormModal";

const App = () => {
  const { data: postsData, error, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  // console.log("All data are : ", posts);

  const [posts, setPosts] = useState([]);
  const [postToUpdate, setPostToUpdate] = useState(null);

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
  }, [postsData]);

  const handleCreatePost = async (formData) => {
    const result = await createPost(formData).unwrap();
    setPosts([...posts, result]);
  };

  const handleUpdatePost = async (id, updatedData) => {
    const updatedPost = { ...updatedData, id };

    const result = await updatePost(updatedPost).unwrap();
    setPosts(posts.map((post) => (post.id === id ? result : post)));
    console.log("Post updated successfully");
  };

  const handleDeletePost = async (id) => {
    console.log(id);
    try {
      await deletePost(id).unwrap();
      setPosts(posts.filter((post) => post.id != id));
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <h2 className="mb-10 text-4xl font-bold text-center">
          welcome to my react redux app
        </h2>

        <div>
          <div className="flex justify-evenly">
            <h1>Posts {posts?.length}</h1>
            {/* <CreateFormModal></CreateFormModal> */}
            <button
              className="btn btn-md btn-outline"
              onClick={() =>
                document.getElementById("createFormModal").showModal()
              }
            >
              Create Post
            </button>
          </div>
          <div className=" flex justify-evenly my-10"></div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {posts &&
                posts.map((post, inx) => (
                  <div
                    key={inx}
                    className="border-4 p-4 border-dotted mb-4 text-start"
                  >
                    <h2 className="text-2xl">Post Id: {post.id}</h2>
                    <p className="text-sm ">UserId: {post.userId}</p>
                    <p className="text-sm ">Title: {post.title}</p>
                    <p className="text-sm ">Descroption: {post.body}</p>
                    <div className="flex gap-x-4">
                      <button
                        className="btn btn-sm my-2 btn-info"
                        onClick={() => {
                          setPostToUpdate(post);
                          document
                            .getElementById("updateFormModal")
                            .showModal();
                        }}
                      >
                        Update Post
                      </button>
                      <button
                        className="btn btn-sm my-2 btn-error"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Delete Post
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CreateFormModal onSubmit={handleCreatePost} />
      <UpdateFormModal
        post={postToUpdate}
        onSubmit={(updatedData) =>
          handleUpdatePost(postToUpdate.id, updatedData)
        }
      />
    </div>
  );
};

export default App;
