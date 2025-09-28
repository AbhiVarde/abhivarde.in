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
import MySQL from "../resources/svgs/sql.svg";
import Figma from "../resources/svgs/figma.svg";
import AWS from "../resources/svgs/aws.svg";

// New external icons
const Appwrite = "https://appwrite.io/images/logos/logo.svg";
const Resend = "https://resend.com/static/favicons/favicon.ico";
const Lingo = "https://lingo.dev/favicon.ico";

const skills = [
  // Priority stack
  { image: Vercel, title: "Vercel" },
  { image: Appwrite, title: "Appwrite" },
  { image: Resend, title: "Resend" },
  { image: Lingo, title: "Lingo.dev" },

  // Front-end
  { image: JavaScript, title: "JavaScript" },
  { image: React, title: "React" },
  { image: NextJS, title: "Next.js" },
  { image: TypeScript, title: "TypeScript" },
  { image: TailwindCSS, title: "Tailwind CSS" },
  { image: Mui, title: "Material UI" },
  { image: HTML, title: "HTML" },
  { image: CSS, title: "CSS" },
  { image: Redux, title: "Redux" },
  { image: Figma, title: "Figma" },
  { image: Framer, title: "Framer Motion" },

  // Back-end
  { image: Node, title: "Node.js" },
  { image: MySQL, title: "MySQL" },
  { image: Python, title: "Python" },

  // Tools & Platforms
  { image: Github, title: "Github" },
  { image: GitLab, title: "Gitlab" },
  { image: Shopify, title: "Shopify" },
  { image: GoogleCloud, title: "Google Cloud" },
  { image: AWS, title: "AWS" },
];

export default skills;
