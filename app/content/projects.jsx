import SyncUI from "../resources/images/project/syncui.webp";
import IdeaTracker from "../resources/images/project/ideatracker.webp";
import ErrExplain from "../resources/images/project/errexplain.webp";
import Sendra from "../resources/images/project/sendra.webp";
import Drawer from "../resources/images/project/drawer.webp";
import Nothify from "../resources/images/project/nothify.webp";
import Billow from "../resources/images/project/billow.webp";

const projects = [
  {
    image: Billow,
    title: "Billow",
    description:
      "Billow is a lightweight SaaS that helps Indian businesses generate GST-compliant sales invoices quickly and accurately, without relying on complex accounting software.",
    url: "https://billow.abhivarde.in",
  },
  {
    image: Nothify,
    title: "Nothify",
    description:
      "Nothify is an AI-powered automation agent that analyzes Next.js repositories, generates stack-aware 404 pages, and automatically opens GitHub pull requests with zero setup.",
    url: "https://nothify.abhivarde.in",
  },
  {
    image: Drawer,
    title: "Svelte Drawer",
    description:
      "Svelte Drawer is a modern NPM package for Svelte 5 that provides an accessible, animated drawer component inspired by Vaul and built for smooth interactions.",
    githubLink: "https://github.com/AbhiVarde/svelte-drawer",
    url: "https://drawer.abhivarde.in",
  },
  {
    image: Sendra,
    title: "Sendra",
    description:
      "Sendra is a developer-focused monitoring tool that tracks Appwrite Sites and Functions, sends instant failure alerts, and suggests AI-powered fixes.",
    url: "https://sendra.vercel.app",
    githubLink: "https://github.com/AbhiVarde/sendra",
  },
  {
    image: ErrExplain,
    title: "ErrExplain",
    description:
      "ErrExplain is a developer tool that converts cryptic runtime and build errors into clear, human-readable explanations for faster debugging.",
    url: "https://errexplain.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/ErrExplain",
  },
  {
    image: IdeaTracker,
    title: "Idea Tracker",
    description:
      "Idea Tracker is a productivity-focused SaaS that helps developers capture, organize, and manage side project ideas efficiently.",
    url: "https://idea-tracker-v2.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/Idea-tracker",
  },
];

export default projects;
