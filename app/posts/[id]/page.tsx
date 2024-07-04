"use client";
import CommentsSection from "@/app/components/CommentSection";
import MainLayout from "@/app/components/MainLayout";
import { Post } from "@/app/models/Post";
import { fetchPostById } from "@/app/service/postService";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  params: { id: number };
}

/**
 * This component displays the details of a post
 */
function PostDetail({ params }: Params) {
  var query = useSearchParams();
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);

  const { data: session, status } = useSession();

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) {
      window.location.href = "/login";
    }
  }, [session, status]);

  // Fetch post by id and set the post state
  useEffect(() => {
    if (id) {
      const imageUrl = query.get("imageUrl");
      if (imageUrl) {
        fetchPostById(id)
          .then((data) => setPost({ ...data, imageUrl: imageUrl }))
          .catch((error) => console.error(`Failed to load post ${id}`, error));
      }
    }
  }, [id, query]);

  // Display a loading message while the post is being fetched
  if (!post) return <div className="h-screen">Chargement...</div>;

  return (
    <MainLayout>
      <div className="px-8 pt-4 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <Link href="/posts">
            <div className="text-red-500 hover:text-red-700 font-semibold  duration-300 ease-in-out hover:scale-110 ">
              ← Retour aux Posts
            </div>
          </Link>
        </div>
        <div className="flex flex-row">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post Cover"
              className="my-4 w-1/8 h-auto"
            />
          )}
          <div className="flex flex-col pl-4">
            <h1 className="text-3xl font-bold my-4 text-black">{post.title}</h1>
            <p className="text-gray-700 ">{post.body}</p>
          </div>
        </div>
        <CommentsSection postId={post.id} />
      </div>
    </MainLayout>
  );
}

export default PostDetail;