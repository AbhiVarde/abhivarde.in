import { LuBook, LuUser, LuTarget, LuCode } from "react-icons/lu";
import { TbLayout } from "react-icons/tb";

const headerNavLinks = [
  { title: "About", url: "/", icon: <LuUser color="#FFFFFF" /> },
  {
    title: "Projects",
    url: "/projects",
    icon: <LuTarget color="#FFFFFF" />,
  },
  {
    title: "Oss",
    url: "/oss",
    icon: <LuCode color="#FFFFFF" />,
  },
  { title: "Blog", url: "/blog", icon: <LuBook color="#FFFFFF" /> },
  {
    title: "GuestBook",
    url: "/guestbook",
    icon: <TbLayout color="#FFFFFF" />,
  },
];

export default headerNavLinks;
