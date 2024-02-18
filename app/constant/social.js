import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn, FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/AbhiVarde",
    icon: LuGithub,
    status: "social",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/abhi-varde-6634551b1/",
    icon: FaLinkedinIn,
    status: "social",
  },
  {
    id: 3,
    name: "Leetcode",
    url: "https://leetcode.com/AbhiVarde/",
    icon: SiLeetcode,
    status: "social",
  },
  {
    id: 4,
    name: "Twitter (X)",
    url: "https://twitter.com/varde_abhi",
    icon: FaXTwitter,
    status: "social",
  },
  {
    id: 5,
    name: "Instagram",
    url: "https://instagram.com/iamabhi_189",
    icon: LuInstagram,
    status: "social",
  },
  {
    id: 6,
    name: "Hashnode",
    url: "https://abhivarde.hashnode.dev",
    icon: FaHashnode,
    status: "publication",
  },
];
