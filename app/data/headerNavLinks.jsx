import { LuBook, LuUser, LuTarget, LuLayout } from "react-icons/lu";

const headerNavLinks = [
  { title: "About", url: "/", icon: <LuUser color="#FFFFFF" /> },
  { title: "Blog", url: "/blog", icon: <LuBook color="#FFFFFF" /> },
  {
    title: "Projects",
    url: "/projects",
    icon: <LuTarget color="#FFFFFF" />,
  },
  {
    title: "GuestBook",
    url: "/guestbook",
    icon: <LuLayout color="#FFFFFF" />,
  },
];

export default headerNavLinks;
