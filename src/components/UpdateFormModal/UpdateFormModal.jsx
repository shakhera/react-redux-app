import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateFormModal = ({ post, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();

  console.log(post);

  useEffect(() => {
    if (post) {
      setValue("userId", post.userId);
      setValue("title", post.title);
      setValue("body", post.body);
    }
  }, [post, setValue]);

  const handleFormSubmit = (data) => {
    console.log(data);
    onSubmit(data);

    document.getElementById("updateFormModal").close();
  };

  return (
    <div>
      <dialog id="updateFormModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h3 className="font-bold text-lg mb-4">Update Post</h3>
          <div className="space-y-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">User Id</span>
              </div>
              <input
                type="number"
                name="userId"
                placeholder="User id"
                className="input input-bordered w-full"
                {...register("userId")}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                {...register("title")}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="body"
                className="textarea textarea-bordered w-full h-24"
                placeholder="Description"
                {...register("body")}
              ></textarea>
            </label>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("updateFormModal").close()
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};
export default UpdateFormModal;
