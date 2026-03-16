import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiPeerlist, SiDevdotto, SiDiscord } from "react-icons/si";

const socialLinks = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/AbhiVarde/",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhi-varde/",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/varde_abhi",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  {
    id: "devto",
    name: "Dev.to",
    url: "https://dev.to/abhivarde",
    icon: <SiDevdotto size={20} color="#FFFFFF" />,
  },
  {
    id: "peerlist",
    name: "Peerlist",
    url: "https://peerlist.io/abhivarde",
    icon: <SiPeerlist size={20} color="#FFFFFF" />,
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.com/users/1163337031099883550",
    icon: <SiDiscord size={20} color="#FFFFFF" />,
  },
];

export default socialLinks;
