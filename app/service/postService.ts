import { Post } from "../models/Post";
import { Comment } from "../models/Comment";

/**
 * This function fetches all posts from the API
 *
 * @returns Promise<Post[]> the list of posts
 */
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

/**
 * This function fetches a post by its id
 *
 * @param id the id of the post to fetch
 * @returns Promise<Post> the post with the given id
 */
const fetchPostById = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${id}`);
  }
  return response.json();
};

/**
 * This function fetches all comments for a given post
 *
 * @param postId the id of the post to fetch comments for
 * @returns Promise<Comment[]> the list of comments for the given post
 */
const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch comments for post ${postId}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export { fetchPosts, fetchPostById, fetchCommentsByPostId };