import Link from "next/link";
import MainLayout from "./components/MainLayout";
import { getServerSession } from "next-auth";
import { authConfig } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }
  return (
    <MainLayout>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-center text-black text-2xl font-bold">
          Bienvenue sur le blog d&apos;Oceane !
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/posts">
            <div className="block w-64 h-32 bg-red-300 text-white rounded-lg shadow-lg transform transition hover:bg-red-400 duration-300 ease-in-out hover:scale-110 flex justify-center items-center font-bold text-lg">
              Voir les Posts
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
