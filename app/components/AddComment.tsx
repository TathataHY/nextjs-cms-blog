"use client";

import { useForm } from "react-hook-form";

interface Props {
  post_id: string;
}

export const AddComment = ({ post_id }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, comment } = data;

    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, comment, post_id }),
    });

    if (response.ok) {
      reset();
    }
  };

  return (
    <div className="mt-14">
      <p>
        Leave a comment{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 border rounded shadow-sm px-8 py-6 mb-10 dark:border-purple-950"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", {
            required: true,
          })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.name && (
          <p className="text-red-600 text-xs">Name is required.</p>
        )}
        <label htmlFor="email">
          Email <span className="text-xs">(Your email will not be shared)</span>
        </label>
        <input
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.email && (
          <p className="text-red-600 text-xs">Enter a valid email.</p>
        )}
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          rows={5}
          {...register("comment", {
            required: true,
            minLength: 2,
          })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.comment && (
          <p className="text-red-600 text-xs">Minimum of 2 characters.</p>
        )}
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
          className={`${isSubmitting ? "opacity-50" : ""} cursor-pointer bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-600`}
        />
      </form>
    </div>
  );
};
