"use client";
import { usePathname } from "next/navigation";

const UnmountStudio = ({ children }) => {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <>{children}</>;
};

export default UnmountStudio;
