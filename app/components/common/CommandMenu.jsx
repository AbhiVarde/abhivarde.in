"use client";

import React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { LuSearch, LuBook, LuUser, LuTarget } from "react-icons/lu";
import { TbLayout } from "react-icons/tb";
import socialLinks from "@/app/content/socialLinks";

const CommandMenu = ({ open, onOpenChange }) => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  const pages = [
    {
      id: "blog",
      name: "Blog",
      icon: <TbLayout size={20} />,
      action: () => router.push("/blog"),
      shortcut: "B",
    },
    {
      id: "projects",
      name: "Projects",
      icon: <LuTarget size={19} />,
      action: () => router.push("/projects"),
      shortcut: "P",
    },
    {
      id: "guestbook",
      name: "Guestbook",
      icon: <LuBook size={20} />,
      action: () => router.push("/guestbook"),
      shortcut: "G",
    },
    {
      id: "about",
      name: "About",
      icon: <LuUser size={20} />,
      action: () => router.push("/"),
      shortcut: "A",
    },
  ];

  const handleSelect = (callback) => {
    callback();
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-30 backdrop-blur-md flex items-start justify-center pt-[15vh]"
      onClick={() => onOpenChange(false)}
    >
      <Command
        className="w-[32rem] max-w-[90vw] bg-[#111111] border border-[#333] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        shouldFilter={true}
      >
        <div className="flex items-center gap-2 p-4 border-b border-[#333]">
          <LuSearch className="w-5 h-5 text-white flex-shrink-0" />
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/50"
          />
          <kbd className="bg-[#333] border border-[#333] bg-opacity-30 px-2 py-0.5 text-sm rounded-md text-white font-mono">
            esc
          </kbd>
        </div>

        <Command.List className="p-2">
          <Command.Empty className="py-8 text-center text-white/50 text-sm">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Pages"
            className="mb-4 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:text-white/60"
          >
            {pages.map((page) => (
              <Command.Item
                key={page.id}
                value={page.name}
                onSelect={() => handleSelect(page.action)}
                className="flex items-center justify-between px-6 py-2 rounded-lg cursor-pointer text-white aria-selected:bg-white/10"
              >
                <div className="flex items-center gap-2">
                  {page.icon}
                  <span>{page.name}</span>
                </div>
                {page.shortcut && (
                  <kbd className="bg-[#333] border border-[#333] bg-opacity-30 px-2 py-0.5 text-sm rounded-md font-mono">
                    {page.shortcut}
                  </kbd>
                )}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Socials"
            className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:text-white/60"
          >
            {socialLinks.map((social) => (
              <Command.Item
                key={social.id}
                value={social.name}
                onSelect={() =>
                  handleSelect(() => window.open(social.url, "_blank"))
                }
                className="flex items-center justify-between px-6 py-2 rounded-lg cursor-pointer text-white aria-selected:bg-white/10"
              >
                <div className="flex items-center gap-2">
                  {social.icon}
                  <span>{social.name}</span>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
};

export default CommandMenu;
