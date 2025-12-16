import TailwindCSS from "../resources/svgs/tailwindCSS.svg";
import Github from "../resources/svgs/github.svg";
import NextJS from "../../public/next.svg";
import Vercel from "../../public/vercel.svg";
import Framer from "../resources/svgs/framer.svg";
import Mui from "../resources/svgs/mui.svg";
import Node from "../resources/svgs/node.svg";
import GitLab from "../resources/svgs/gitlab.svg";
import Shopify from "../resources/svgs/shopify.svg";
import TypeScript from "../resources/svgs/typeScript.svg";
import React from "../resources/svgs/react.svg";
import Redux from "../resources/svgs/redux.svg";
import JavaScript from "../resources/svgs/javaScript.svg";
import Python from "../resources/svgs/python.svg";
import GoogleCloud from "../resources/svgs/cloud.svg";
import HTML from "../resources/svgs/html.svg";
import CSS from "../resources/svgs/css.svg";
import Figma from "../resources/svgs/figma.svg";
import AWS from "../resources/svgs/aws.svg";

// External icons
const Appwrite = "https://appwrite.io/images/logos/logo.svg";
const Resend = "https://resend.com/static/favicons/favicon.ico";
const Lingo = "https://lingo.dev/favicon.ico";
const Motion =
  "https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png";
const SvelteKit = "https://svelte.dev/favicon.png";
const AISDK = "https://ai-sdk.dev/apple-icon.png";

const skills = [
  // Core JavaScript & Frameworks
  { image: JavaScript, title: "JavaScript" },
  { image: TypeScript, title: "TypeScript" },
  { image: React, title: "React" },
  { image: NextJS, title: "Next.js" },
  { image: SvelteKit, title: "SvelteKit" },
  { image: Redux, title: "Redux" },

  // Styling & Animation
  { image: HTML, title: "HTML" },
  { image: CSS, title: "CSS" },
  { image: TailwindCSS, title: "Tailwind CSS" },
  { image: Mui, title: "Material UI" },
  { image: Motion, title: "Motion" },

  // Backend
  { image: Node, title: "Node.js" },
  { image: Python, title: "Python" },

  // Developer Tools & Services
  { image: Vercel, title: "Vercel" },
  { image: Appwrite, title: "Appwrite" },
  { image: Resend, title: "Resend" },
  { image: Lingo, title: "Lingo.dev" },
  { image: AISDK, title: "AI SDK" },

  // Cloud & Infrastructure
  { image: AWS, title: "AWS" },
  { image: GoogleCloud, title: "Google Cloud" },

  // Tools & Platforms
  { image: Github, title: "Github" },
  { image: GitLab, title: "Gitlab" },
  { image: Figma, title: "Figma" },
  { image: Shopify, title: "Shopify" },
];

export default skills;
