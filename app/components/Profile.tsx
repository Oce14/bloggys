"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";



export default function Profile() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={togglePopup} className="pl-4 mr-4 focus:outline-none">
        <img
          src={session?.user?.image || "/icons/user.svg"}
          alt="Profile icon"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-semibold text-gray-700">
                {session?.user?.name}
              </div>
              <div className="text-sm text-gray-600">
                {session?.user?.email}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              signOut();
              closePopup();
            }}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition ease-in-out duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}