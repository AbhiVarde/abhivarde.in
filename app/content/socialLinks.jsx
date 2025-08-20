import { LuGithub } from "react-icons/lu";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaHashnode,
  FaSpotify,
} from "react-icons/fa6";
import { SiLeetcode, SiPeerlist } from "react-icons/si";

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
    url: "https://www.linkedin.com/in/abhi-varde-6634551b1/",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/varde_abhi",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  {
    id: "peerlist",
    name: "Peerlist",
    url: "https://peerlist.io/abhivarde",
    icon: <SiPeerlist size={20} color="#FFFFFF" />,
  },
  {
    id: "leetcode",
    name: "Leetcode",
    url: "https://leetcode.com/AbhiVarde/",
    icon: <SiLeetcode size={20} color="#FFFFFF" />,
  },
  {
    id: "hashnode",
    name: "Hashnode",
    url: "https://abhivarde.hashnode.dev/",
    icon: <FaHashnode size={20} color="#FFFFFF" />,
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/user/31eubskrhf2mhf2lz7wzbcllwqai?si=a517cf8739404b25",
    icon: <FaSpotify size={20} color="#FFFFFF" />,
  },
];

export default socialLinks;
