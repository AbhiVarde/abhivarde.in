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
    <div className="max-w-5xl mx-auto px-4">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-6 flex space-x-3 items-center">
          <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
            <LuBook size={22} />
          </div>
          <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
            GuestBook
          </h2>
        </div>
        <p class="text-lg text-zinc-600 leading-relaxed">
          Feel free to leave a message for future visitors - your thoughts and
          feedback are greatly appreciated :)
        </p>
      </div>
      <GiscusComponent />
    </div>
  );
};

export default GuestBook;
