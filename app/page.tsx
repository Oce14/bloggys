import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { GoogleSignInButton } from "../components/authButtons";



export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/posts");
  

  return (
    <div className="w-screen flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>

        <GoogleSignInButton />
        
        <span className="text-2xl font-semibold text-white text-center mt-8">
        </span>
      </div>
    </div>
  );
}
