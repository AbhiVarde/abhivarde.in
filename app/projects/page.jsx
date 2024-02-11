"use client";
import { useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { motion } from "framer-motion";
import Image from "next/image";
import Snowflake from "../../public/snowFlake.svg";

const projects = [
  {
    title: "SpaceX Launch Tracker",
    description:
      "Keep yourself updated on the latest SpaceX launches, countdowns, and missions aimed at cosmic exploration.",
    tags: [
      "Full-stack",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "SpaceX-API",
    ],
    link: "https://github.com/AbhiVarde/SpaceX-Launch-Tracker",
  },
  {
    title: "Trello Clone",
    description:
      "Developed a Trello-inspired clone with drag-and-drop features, streamlining project management.",
    tags: ["Front-end", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://trello-bice.vercel.app/",
  },
  {
    title: "Git Wars",
    description:
      "Created a Git command game web app to improve users' Git skills through interactive challenges.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Git Commands"],
    link: "https://gitwars.vercel.app/",
  },
  {
    title: "Linktree Clone",
    description:
      "Developed a LinkTree-inspired platform for efficient social media link sharing, enhancing user accessibility and engagement.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://github.com/AbhiVarde/Linktree-Clone",
  },
  {
    title: "SQL AI",
    description:
      "Built a web SQL query generator using OpenAI API, simplifying complex SQL query creation for efficient database operations.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "https://sqlai.vercel.app/",
  },
  {
    title: "GladPay",
    description:
      "Developed a streamlined payment web app leveraging Razorpay API, ensuring secure and seamless transactions.",
    tags: [
      "Front-end",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
    ],
    link: "https://gladpay.vercel.app/",
  },
  {
    title: "MentorsDiary",
    description:
      "Developed and implemented a web platform linking mentors and mentees for personalized professional development.",
    tags: [
      "Front-end",
      "React",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Rest APIs",
    ],
    link: "https://mentorsdiary.netlify.app/",
  },
  {
    title: "JukeBox",
    description:
      "Crafted a music web app with Spotify API integration with real-time streaming.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Spotify API"],
    link: "https://jukebox-xi.vercel.app/",
  },
  {
    title: "CourseExpert",
    description:
      "Developed a user-friendly course selling web app for seamless browsing, purchasing, and access to educational content.",
    tags: ["React", "Vite", "Redux", "TypeScript", "Tailwind CSS"],
    link: "https://courseexpert.vercel.app/",
  },
  {
    title: "Prompt Resume",
    description:
      "Developed a web app using OpenAI API to automate resume generation, streamlining professional document creation.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "https://prompt-resume.vercel.app/",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-2"
            >
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Selected Projects
              </h2>
              <Image
                src={Snowflake}
                alt="snow-flake"
                height={16}
                width={16}
                className="animate-spin"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-zinc-400"
            >
              Some of the projects are from work and some are on my own time. 🙂{" "}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-px bg-zinc-800"
          />

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Article project={project} />
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            {projects.slice(4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Article project={project} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
}
