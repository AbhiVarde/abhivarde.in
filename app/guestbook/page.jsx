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
    <main className="max-w-5xl mx-auto px-4 pt-24">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuBook size={20} color="#FFFFFF" />
          </div>

          <h1 className="text-lg md:text-xl font-medium tracking-wide">
            Guestbook
          </h1>
        </div>

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Leave a message for future visitors. Thoughts, feedback, or just a
          hello.
        </p>
      </div>

      <GiscusComponent />
    </main>
  );
};

export default GuestBook;
