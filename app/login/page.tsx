"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const { data: session } = useSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <Image
        src="/Bloggy.png"
        alt="Bloggy Logo"
        width={176}
        height={176}
        className="mb-8"
      />

      <h1 className="text-4xl text-red-600 font-bold mb-8">
        Bienvenue sur Bloggy !
      </h1>
      <h2 className="text-2xl text-red-600 font-bold mb-8">
        Connectez-vous avant de pouvoir continuer !
      </h2>
      <div className="flex space-x-5">
        <button
          onClick={() => signIn("google")}
          className="flex items-center space-x-3 border border-gray-300 rounded-lg px-6 py-3 shadow-md hover:bg-red-100 transition ease-in-out duration-300"
        >
          <Image
            src="/icons/google.svg"
            alt="Google Icon"
            width={20}
            height={20}
          />
          <span>Se connecter avec Google</span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="flex items-center space-x-3 border border-gray-300 rounded-lg bg-gray-800 text-white px-6 py-3 shadow-md hover:bg-gray-700 transition ease-in-out duration-300"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub Icon"
            width={20}
            height={20}
          />
          <span>Se connecter avec GitHub</span>
        </button>
      </div>
    </div>
  );
}