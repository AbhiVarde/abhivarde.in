import React from "react";
import { LuBook } from "react-icons/lu";
import GiscusComponent from "../components/sections/guestbook/GiscusComponent";
import { PageHeader } from "../components/layout/PageHeader";

export const metadata = {
  title: "Guestbook",
  description:
    "Leave a message for Abhi Varde. See what developers and creators from around the world have to say.",
  alternates: { canonical: "https://abhivarde.in/guestbook" },
};

const GuestBook = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-16 sm:pt-20">
      <div className="mb-8">
        <PageHeader icon={LuBook} title="Guestbook" />

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
