"use client";

import { Navigation as MainNavigation } from "@/components/layout/navigation";
import { usePathname } from "next/navigation";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-dvh grow">
      <MainNavigation />
      <div className="grow">{children}</div>
    </div>
  );
}
