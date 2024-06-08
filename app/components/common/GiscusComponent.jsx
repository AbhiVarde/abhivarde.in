"use client";

import React from "react";
import Giscus from "@giscus/react";

const GiscusComponent = () => {
  return (
    <div className="mt-8">
      <Giscus
        repo="AbhiVarde/abhivarde.in"
        repoId="R_kgDOL9N2Lg"
        category="General"
        categoryId="DIC_kwDOL9N2Ls4Cfckr"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="noborder_dark"
        lang="en"
        crossorigin="anonymous"
        async
      />
    </div>
  );
};

export default GiscusComponent;
