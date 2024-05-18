"use client";

import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail === "" || validateEmail(newEmail)) {
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const handleSendEmail = () => {
    if (validateEmail(email)) {
      window.location.href = `mailto:abhivarde.contact@gmail.com?subject=Hi%20from%20abhivarde.in`;
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const handleDownloadClick = () => {
    const cvUrl = "./Resume.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "AbhiVarde_CV.pdf";
    downloadLink.click();
  };

  return (
    <div className="mt-4 border-t border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2 border-r border-gray-100 px-4 sm:px-8 md:px-10 lg:px-12 py-10">
          <p class="text-lg md:text-xl text-[#040202] leading-normal sm:!leading-9 font-medium ">
            Ready to hire a freelancer?
            <span class="text-[#666666] mx-1">
              Drop in your email ID and I will get back to you.
            </span>
          </p>
          <div className="flex flex-wrap gap-2 items-center mt-4 max-w-md w-full">
            <input
              type="email"
              placeholder="abhi@icloud.com"
              className="bg-transparent border border-gray-200 p-2 rounded-lg text-gray-700 leading-tight focus:outline-none min-w-32 "
              value={email}
              onChange={handleEmailChange}
            />

            <button
              className="bg-black/80 hover:bg-black text-white text-sm font-medium px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleSendEmail}
              disabled={!validateEmail(email)}
            >
              Send
            </button>
          </div>
          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </div>
        <div class="px-4 sm:px-8 md:px-10 lg:px-12 py-10">
          <p className="text-[#040202]">
            Get My Resume to See My in Detail and Discover How I Can Help You.
          </p>
          <button
            className="mt-4 bg-white border px-3 py-1.5 rounded-full"
            onClick={handleDownloadClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
