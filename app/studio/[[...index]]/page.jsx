"use client";
import { NextStudio } from "next-sanity/studio";
import defineConfig from "../../../sanity.config";

const Studio = () => {
  return <NextStudio config={defineConfig} />;
};

export default Studio;
