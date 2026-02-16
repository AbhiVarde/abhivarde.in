import React from "react";
import { LuBook } from "react-icons/lu";
import GiscusComponent from "../components/common/GiscusComponent";

export const metadata = {
  title: "Guestbook",
  description:
    "Leave a message for Abhi Varde and read what others have to say in the guestbook.",
};

const GuestBook = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuBook size={20} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl font-medium leading-4 md:leading-6 lg:leading-8 tracking-wide">
            GuestBook
          </h2>
        </div>
        <p className="text-sm sm:text-lg text-white leading-relaxed">
          Feel free to leave a message for future visitors - your thoughts and
          feedback are greatly appreciated :)
        </p>
      </div>
      <GiscusComponent />
    </div>
  );
};

export default GuestBook;
