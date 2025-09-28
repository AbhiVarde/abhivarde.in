import Tracker from "../resources/images/project/tracker.png";
import SyncUI from "../resources/images/project/syncui.png";
import IdeaTracker from "../resources/images/project/ideatracker.png";
import ErrExplain from "../resources/images/project/errexplain.png";
import Sendra from "../resources/images/project/sendra.png";

const projects = [
  {
    image: Sendra,
    title: "Sendra",
    description:
      "Sendra monitors your Appwrite Sites deployments and sends instant email alerts when issues arise, built with Appwrite, Resend, and Vercel.",
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
  {
    image: SyncUI,
    title: "Sync UI",
    description:
      "A UI library with animated MUI components and premium templates. Built with Next.js, React, MUI, Framer Motion.",
    githubLink: "https://github.com/AbhiVarde/syncui",
    url: "https://syncui.design",
  },
  {
    image: Tracker,
    title: "SpaceX Launch Tracker",
    description:
      "A full-stack web application for tracking SpaceX launches, offering real-time updates on launch information and status.",
    githubLink: "https://github.com/AbhiVarde/SpaceX-Launch-Tracker",
  },
];

export default projects;
