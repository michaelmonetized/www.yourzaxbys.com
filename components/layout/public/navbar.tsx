"use client";

import Navbar from "@/components/ui/navbar";
import { usePathname } from "next/navigation";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-dvh grow">
      <Navbar active={pathname} />
      <div className="grow">{children}</div>
    </div>
  );
}
