import type { Comment } from "../types";

interface RecentCommentProps {
  comments: Comment[];
}

function RecentCommentList({ comments }: RecentCommentProps) {
  if (comments.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        You don't any comments posted.
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Recent Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border-b p-3 text-sm text-gray-600">
          {comment.text}
        </div>
      ))}
    </div>
  );
}

export default RecentCommentList;
