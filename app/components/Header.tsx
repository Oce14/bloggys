import Link from "next/link";



/**
 * Header component that displays the Bloggy logo, a Posts link and a Profile icon
 */
const Header = () => {

  return (
    <header className="bg-red-200 text-white p-4 h-20 flex justify-between items-center">
      {/* Bloggy logo */}
      <Link href="/" className="text-lg font-bold">
        <img src="/Bloggy.png" alt="Logo Bloggy" className="h-24" />
      </Link>

      {/* Profile icon and Posts link */}
      <div className="flex items-center">
        <Link
          href="/posts"
          className="bg-red-700 hover:bg-red-800 text-center h-full py-2 px-4 rounded text-white "
        >
          Posts
        </Link>
      </div>
    </header>
  );
};

export default Header;