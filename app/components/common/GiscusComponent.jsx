"use client";

import React from "react";
import Giscus from "@giscus/react";

const GiscusComponent = () => {
  return (
    <div className="mt-8">
      <Giscus
        repo="AbhiVarde/Portfolio"
        repoId="R_kgDOLw1udA"
        category="General"
        categoryId="DIC_kwDOLw1udM4CfTVD"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="en"
        crossorigin="anonymous"
        async
      />
    </div>
  );
};

export default GiscusComponent;
