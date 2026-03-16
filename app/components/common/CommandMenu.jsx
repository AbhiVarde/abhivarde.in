"use client";

import React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import headerNavLinks from "@/app/content/headerNavLinks";
import socialLinks from "@/app/content/socialLinks";

const CommandMenu = ({ open, onOpenChange }) => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  const pages = headerNavLinks.map((link) => ({
    id: link.title.toLowerCase(),
    name: link.title,
    icon: link.icon,
    action: () => router.push(link.url),
    shortcut: link.title[0].toUpperCase(),
  }));

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
        className="w-lg max-w-[90vw] bg-[#111] border border-[#333] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        shouldFilter={true}
      >
        <div className="flex items-center gap-2 p-3 border-b border-[#333]">
          <LuSearch className="w-4 h-4 text-white/40 shrink-0" />
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-white/30"
          />
          <kbd className="bg-[#1a1a1a] border border-[#333] px-1.5 py-0.5 text-xs rounded text-white/40 font-mono">
            esc
          </kbd>
        </div>

        <Command.List className="p-1.5">
          <Command.Empty className="py-8 text-center text-white/30 text-sm">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Pages"
            className="mb-2 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:pt-2 **:[[cmdk-group-heading]]:pb-1 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-white/30 **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-widest"
          >
            {pages.map((page) => (
              <Command.Item
                key={page.id}
                value={page.name}
                onSelect={() => handleSelect(page.action)}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-white text-sm aria-selected:bg-white/5"
              >
                <div className="flex items-center gap-2 text-white/70">
                  {page.icon}
                  <span>{page.name}</span>
                </div>
                {page.shortcut && (
                  <kbd className="bg-[#1a1a1a] border border-[#333] px-1.5 py-0.5 text-xs rounded font-mono text-white/30">
                    {page.shortcut}
                  </kbd>
                )}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Socials"
            className="**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:pt-2 **:[[cmdk-group-heading]]:pb-1 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-white/30 **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-widest"
          >
            {socialLinks.map((social) => (
              <Command.Item
                key={social.id}
                value={social.name}
                onSelect={() =>
                  handleSelect(() => window.open(social.url, "_blank"))
                }
                className="flex items-center px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 aria-selected:bg-white/5"
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
