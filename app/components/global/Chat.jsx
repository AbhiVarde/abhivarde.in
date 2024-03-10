"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formState, setFormState] = useState({
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });

  const dropIn = {
    hidden: {
      y: "4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "stiff",
        damping: 25,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const onChangeHandler = (field, value) => {
    let state = {
      [field]: {
        value,
        error: null,
      },
    };
    setFormState({ ...formState, ...state });
  };

  const handleSubmit = () => {
    let { email, message } = formState;
    console.log("email", email, "message", message);
    let updatedState = { ...formState };
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value) {
      updatedState.email.error = `Oops! Email cannot be empty.`;
      setFormState({ ...updatedState });
      return;
    }

    if (!email.value.toLowerCase().match(regex)) {
      updatedState.email.error = `Please enter a valid email address`;
      setFormState({ ...updatedState });
      return;
    }
    if (!message.value) {
      updatedState.message.error = `Oops! Message cannot be empty.`;
      setFormState({ ...updatedState });
      return;
    }

    const subject = "New message from your portfolio website!";
    const mailtoLink = `mailto:abhivarde99@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    setSuccess("Message sent successfully!");
    setFormState({
      email: {
        value: "",
        error: "",
      },
      message: {
        value: "",
        error: "",
      },
    });
    setError(false);
  };

  const handleButtonClick = () => {
    setOpen(!open);
    setFormState({
      email: {
        value: "",
        error: "",
      },
      message: {
        value: "",
        error: "",
      },
    });
    setError("");
    setSuccess("");
  };

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <div className="fixed bottom-6 right-4 md:right-10 md:bottom-10 flex flex-col items-end z-20">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 rounded-xl shadow-2xl dark:text-white text-zinc-700 flex flex-col overflow-hidden mx-4 md:mx-0"
          >
            <div className="p-4 dark:bg-zinc-900 bg-white">
              <h2 className="font-bold text-lg sm:text-xl">
                Something on your mind? Let's talk! 👇
              </h2>
              <small className="text-sm  mb-10">
                Get your answer in a flash!⚡️
              </small>
            </div>
            <div className="content p-6 flex flex-col dark:bg-[#222225]  bg-zinc-100">
              <label className="text-sm font-normal  mb-2 ">
                Email Address
              </label>
              <input
                type="email"
                value={formState.email.value}
                onChange={(e) => onChangeHandler("email", e.target.value)}
                className=" rounded-md border p-2 focus:outline-none dark:bg-zinc-800 placeholder:text-sm mb-3"
                placeholder="john@xyz.com"
              />
              {formState.email.error && (
                <small className="h-4 min-h-4 text-red-500 font-semibold mb-2">
                  {formState.email.error && formState.email.error}
                </small>
              )}

              <label className="text-sm font-normal  mb-2 ">Message</label>
              <textarea
                rows="3"
                value={formState.message.value}
                onChange={(e) => onChangeHandler("message", e.target.value)}
                className="rounded-md border p-2 focus:outline-none dark:bg-zinc-800 placeholder:text-sm mb-4"
                placeholder="I'd appreciate a kind word from you."
              />
              {formState.message.error && (
                <small className="h-4 min-h-4 text-red-500 font-semibold mb-4">
                  {formState.message.error && formState.message.error}
                </small>
              )}

              <button
                onClick={handleSubmit}
                className="w-full p-2 sm:p-4 border-2 rounded-md font-semibold text-lg mb-2 sm:mb-4 transition duration-200 hover:shadow-none dark:hover:shadow-none"
              >
                Submit
              </button>

              <small className="h-4 min-h-4 mb-2 sm:mb-4">
                {success && (
                  <p className="text-green-500 font-semibold text-sm">
                    {success}
                  </p>
                )}
                {error && (
                  <p className="text-red-500 font-semibold text-sm">{error}</p>
                )}
              </small>
            </div>
          </motion.div>
        )}
        <button
          onClick={handleButtonClick}
          className="dark:bg-zinc-900 bg-zinc-100 border dark:border-zinc-800 border-zinc-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 dark:text-[#00FFC2]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      </div>
    </AnimatePresence>
  );
}
