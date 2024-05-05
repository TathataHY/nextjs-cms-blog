import Link from "next/link";
import { Comment } from "../utils/interface";

interface Props {
  comments: Comment[];
  slug: string;
  order: string;
}

export const Comments = ({ comments, slug, order }: Props) => {
  return (
    <div>
      <h3>All Comments</h3>
      {comments?.length === 0 && <p>No comments yet.</p>}
      {comments?.length > 0 && (
        <div className="mb-2">
          <Link
            scroll={false}
            href={`/posts/${slug}?order=asc`}
            className={`mr-4 text-sm ${
              order === "asc" ? "text-purple-500" : ""
            }`}
          >
            Oldest
          </Link>
          <Link
            scroll={false}
            href={`/posts/${slug}?order=desc`}
            className={`mr-4 text-sm ${
              order === "desc" ? "text-purple-500" : ""
            }`}
          >
            Newest
          </Link>
        </div>
      )}
      {comments?.map((comment) => (
        <div key={comment?._id} className="border-b border-gray-200/50 py-2">
          <p>
            <strong>{comment?.name}</strong>{" "}
            <span className="text-gray-500 text-sm">
              {new Date(comment?._createdAt).toLocaleString()}
            </span>
          </p>
          <p>{comment?.comment}</p>
        </div>
      ))}
    </div>
  );
};
