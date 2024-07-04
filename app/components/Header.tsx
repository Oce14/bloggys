import Link from "next/link";
import Profile from "./Profile";
import Image from "next/image";

/**
 * Header component that displays the Bloggy logo, a Posts link and a Profile icon
 */
const Header = () => {

  return (
    <header className="bg-red-200 text-white p-4 h-20 flex justify-between items-center">
      {/* Bloggy logo */}
      <Link href="/" className="text-lg font-bold">
        <Image
          className=" duration-300 ease-in-out hover:scale-110 "
          src="/Bloggy.png"
          alt="Logo Bloggy"
          width={96}
          height={96}
        />
      </Link>

      {/* Profile icon and Posts link */}
      <div className="flex items-center justify-center">
        <Link
          href="/posts"
          className="bg-red-700  duration-300 ease-in-out hover:scale-110  hover:bg-red-800 text-center h-full py-2 px-4 rounded text-white "
        >
          Posts
        </Link>
        <Profile />
      </div>
    </header>
  );
};

export default Header;