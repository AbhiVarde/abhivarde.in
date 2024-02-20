"use client";
import React from "react";
import Giscus from "@giscus/react";

const GuestBookPage = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-36 md:mt-32 mt-28 ">
      <h1 className="text-3xl font-bold">GuestBook</h1>
      <p className="mt-4">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
        repo="AbhiVarde/abhivarde.in"
        repoId="R_kgDOLQ2JWw"
        category="General"
        categoryId="DIC_kwDOLQ2JW84CdXFb"
        mapping="specific"
        term="GuestBook"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        />
      </div>
    </div>
  );
};

export default GuestBookPage;
