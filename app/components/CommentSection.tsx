"use client";
import { useState, useEffect } from "react";
import { fetchCommentsByPostId } from "../service/postService";
import { Comment } from "../models/Comment";

interface CommentsSectionProps {
  postId: number;
}

/**
 * This component displays the comments for a given post
 * 
 * @param postId the id of the post to display comments for *
 */
const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch comments for the given post id
  useEffect(() => {
    setLoading(true);
    fetchCommentsByPostId(postId)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load comments:", error);
        setLoading(false);
      });
  }, [postId]);

  // Display a loading message while comments are being fetched
  if (loading) return <p>Chargement des commentaires...</p>;

  return (
    <div className="mt-6">
      <h3 className="text-lg text-black font-semibold">Commentaires:</h3>
      {comments.length === 0 ? (
        <p>Aucun commentaire trouvé.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="mt-3 bg-gray-100 rounded-lg p-4 shadow"
            >
              <p className="font-semibold text-black">
                {comment.name}{" "}
                <span className="text-sm text-gray-400">({comment.email})</span>
              </p>
              <p className="text-gray-800">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsSection;