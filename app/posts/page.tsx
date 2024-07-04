"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { fetchRandomImage } from "../service/imageService";
import { fetchPosts } from "../service/postService";
import { Post } from "../models/Post";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

/**
 * This component displays a list of posts with random images
 */
const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data: session, status } = useSession();

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) {
     redirect("/login");
    }
  }, [session, status]);

  // Fetch posts and random images for each post
  useEffect(() => {
    fetchPosts()
      .then(async (posts) => {
        const postsWithImages = await Promise.all(
          posts.map(async (post) => {
            const imageUrl = await fetchRandomImage(300, 200, post.id); // Use post id as seed
            return {
              ...post,
              imageUrl: imageUrl,
            };
          })
        );
        setPosts(postsWithImages);
      })
      .catch((error) => console.error("Failed to load posts", error));
  }, []);

  return (
    <MainLayout>
      <div className="py-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}?imageUrl=${encodeURIComponent(
              post.imageUrl
            )}`}
            legacyBehavior
          >
            <div className="mx-auto bg-white rounded-xl shadow-md hover:cursor-pointer md:max-w-2xl mb-4  duration-300 ease-in-out hover:scale-110 hover:bg-red-50">
              <div className="md:flex">
                <img
                  src={post.imageUrl}
                  alt="Random Image"
                  className="w-full md:w-48 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                />
                <div className="p-8">
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    {post.title}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {post.body.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default Posts;