import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn, FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/varde_abhi",
    icon: <FaXTwitter size={20} />,
  },
  {
    id: "leetcode",
    name: "Leetcode",
    url: "https://leetcode.com/AbhiVarde/",
    icon: <SiLeetcode size={20} />,
  },
  {
    id: "github",
    name: "Github",
    url: "https://github.com/AbhiVarde/",
    icon: <LuGithub size={20} />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhi-varde-6634551b1/",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/iamabhi_189/",
    icon: <LuInstagram size={20} />,
  },
  {
    id: "hashnode",
    name: "Hashnode",
    url: "https://abhivarde.hashnode.dev/",
    icon: <FaHashnode size={20} />,
  },
];

export default socialLinks;
