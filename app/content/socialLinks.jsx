import { LuGithub } from "react-icons/lu";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa6";
import { SiPeerlist, SiDevdotto } from "react-icons/si";

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
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/varde_abhi",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/abhivarde.in/",
    icon: <FaInstagram size={20} color="#FFFFFF" />,
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/user/31eubskrhf2mhf2lz7wzbcllwqai?si=a517cf8739404b25",
    icon: <FaSpotify size={20} color="#FFFFFF" />,
  },
];

export default socialLinks;
