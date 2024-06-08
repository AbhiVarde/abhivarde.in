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
    <div className="mt-4 border-t border-[#333]">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2 border-b sm:border-r border-[#333] bg-[#111111] px-4 sm:px-8 md:px-10 lg:px-12 py-10">
          <p class="text-lg md:text-xl text-[#FF3B00] leading-normal sm:!leading-9 font-medium ">
            Ready to hire a freelancer?
            <span class="text-white mx-1">
              Please drop your email ID, and I will get back to you.
            </span>
          </p>
          <div className="flex flex-wrap gap-2 items-center mt-4 max-w-xl w-full">
            <input
              type="email"
              placeholder="abhi@icloud.com"
              className="bg-transparent border w-72 border-[#333] placeholder:text-white/50 px-3 py-2 rounded-lg text-white leading-tight focus:outline-none"
              value={email}
              onChange={handleEmailChange}
            />

            <button
              className="bg-[#111111] border border-[#333] px-3 py-1.5 rounded-lg"
              onClick={handleSendEmail}
              disabled={!validateEmail(email)}
            >
              Send
            </button>
          </div>
          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </div>
        <div class="px-4 sm:px-8 md:px-10 lg:px-12 py-10 bg-[#111111]">
          <p className="text-white">
            Get my resume to see me in detail and discover how I can help you.
          </p>
          <button
            className="mt-4 bg-[#111111] border border-[#333] px-3 py-1.5 rounded-full"
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
