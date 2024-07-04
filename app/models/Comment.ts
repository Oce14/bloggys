/**
 * Comment model interface to represent a comment on a post
 */
export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }