import React from "react";
import { LuBook } from "react-icons/lu";
import GiscusComponent from "../components/common/GiscusComponent";

export const metadata = {
  title: "Guestbook",
  description:
    "Leave a message for Abhi Varde. See what developers and creators from around the world have to say.",
  alternates: { canonical: "https://abhivarde.in/guestbook" },
};

const GuestBook = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuBook size={20} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl font-medium tracking-wide">
            Guestbook
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Leave a message for future visitors. Thoughts, feedback, or just a
          hello.
        </p>
      </div>
      <GiscusComponent />
    </div>
  );
};

export default GuestBook;
