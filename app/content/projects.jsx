import SyncUI from "../resources/images/project/syncui.webp";
import IdeaTracker from "../resources/images/project/ideatracker.webp";
import ErrExplain from "../resources/images/project/errexplain.webp";
import Sendra from "../resources/images/project/sendra.webp";
import Drawer from "../resources/images/project/drawer.webp";
import Nothify from "../resources/images/project/nothify.webp";
import Billow from "../resources/images/project/billow.webp";
import NodeFlow from "../resources/images/project/nodeflow.webp";

const projects = [
  {
    image: NodeFlow,
    title: "NodeFlow",
    shortDescription: "Visual workflow builder for the browser.",
    description:
      "Visual node-based workflow builder. Design conditional flows with drag-and-drop nodes, share via URL and export JSON. All in the browser, zero backend.",
    url: "https://nodeflow.abhivarde.in",
  },
  {
    image: Nothify,
    title: "Nothify",
    shortDescription: "AI agent that auto-generates 404 pages via PRs.",
    description:
      "Analyzes any Next.js repo, generates a stack-aware 404 page, and opens a GitHub PR automatically. Works with public, private, and forked repos.",
    url: "https://nothify.abhivarde.in",
  },
  {
    image: SyncUI,
    title: "Sync UI",
    shortDescription: "React component library for Design Engineers.",
    description:
      "125+ components, 10+ blocks, and 3 premium templates. Built with MUI and Motion for Design Engineers who care about detail.",
    url: "https://syncui.design",
    githubLink: "https://github.com/AbhiVarde/syncui",
  },
  {
    image: Drawer,
    title: "Svelte Drawer",
    shortDescription: "Accessible drawer component for Svelte 5.",
    description:
      "A modern NPM package for Svelte 5. Accessible, animated, and inspired by Vaul. Supports multiple directions, nested drawers, and snap points.",
    url: "https://drawer.abhivarde.in",
    githubLink: "https://github.com/AbhiVarde/svelte-drawer",
  },
  {
    image: Billow,
    title: "Billow",
    shortDescription: "GST invoicing for Indian businesses, without the bloat.",
    description:
      "Generate GST-compliant sales invoices quickly and accurately. No complex accounting software, no unnecessary overhead.",
    url: "https://billow.abhivarde.in",
  },
  {
    image: Sendra,
    title: "Sendra",
    shortDescription: "Monitor Appwrite apps with instant alerts.",
    description:
      "Tracks Appwrite Sites and Functions, sends instant failure alerts, and suggests AI-powered fixes. Built for developers who ship fast.",
    url: "https://sendra.vercel.app",
    githubLink: "https://github.com/AbhiVarde/sendra",
  },
  {
    image: ErrExplain,
    title: "ErrExplain",
    shortDescription: "Turn cryptic errors into plain English.",
    description:
      "Converts runtime and build errors into clear, human-readable explanations. Less time debugging, more time shipping.",
    url: "https://errexplain.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/ErrExplain",
  },
  {
    image: IdeaTracker,
    title: "Idea Tracker",
    shortDescription: "Capture and manage side project ideas.",
    description:
      "A focused SaaS for developers to capture, organize, and prioritize side project ideas without the noise.",
    url: "https://idea-tracker-v2.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/Idea-tracker",
  },
];

export default projects;
