import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://dummyjson.com/c/0dbe-89b5-4919-a9e9'
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Fetch all posts
    getPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    // Fetch a single post by ID
    getPostById: builder.query({
      query: (id) => {
        console.log(id);
        return { url: `posts/${id}`, method: "GET" };
      },
    }),

    // Create a new post
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create post", newPost);
        return {
          url: "posts",
          method: "POST",
          body: newPost,
        };
      },
    }),

    // Update a post by ID
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);

        const { id, ...update } = updatePostData;
        console.log("Actual Update Post: ", update);

        return {
          url: `posts/${id}`,
          method: "PUT",
          body: update,
        };
      },
    }),

    // Delete a post by ID
    deletePost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
