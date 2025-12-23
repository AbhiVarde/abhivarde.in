import SyncUI from "../resources/images/project/syncui.webp";
import IdeaTracker from "../resources/images/project/ideatracker.webp";
import ErrExplain from "../resources/images/project/errexplain.webp";
import Sendra from "../resources/images/project/sendra.webp";
import Drawer from "../resources/images/project/drawer.webp";

const projects = [
  {
    image: Drawer,
    title: "Svelte Drawer",
    description: "A drawer component for Svelte 5, inspired by Vaul.",
    githubLink: "https://github.com/AbhiVarde/svelte-drawer",
    url: "https://drawer.abhivarde.in",
  },
  {
    image: SyncUI,
    title: "Sync UI",
    description:
      "A sleek UI library for Design Engineers, offering beautifully designed components and templates built with MUI and Motion (motion/react).",
    githubLink: "https://github.com/AbhiVarde/syncui",
    url: "https://syncui.design",
  },
  {
    image: Sendra,
    title: "Sendra",
    description:
      "Monitors Appwrite Sites & Functions, sends instant failure alerts, and suggests AI-powered fixes - built with Appwrite, Resend, Vercel & Vercel AI SDK.",
    url: "https://sendra.vercel.app",
    githubLink: "https://github.com/AbhiVarde/sendra",
  },
  {
    image: ErrExplain,
    title: "ErrExplain",
    description:
      "Translate cryptic errors into plain English, built with Next.js, Vercel AI SDK, and Appwrite.",
    url: "https://errexplain.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/ErrExplain",
  },
  {
    image: IdeaTracker,
    title: "Idea Tracker",
    description:
      "Manage and track side project ideas with React, built using the full Appwrite stack and Lingo.dev for multilingual support.",
    url: "https://idea-tracker-v2.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/Idea-tracker",
  },
];

export default projects;
