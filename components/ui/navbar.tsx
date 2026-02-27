"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  active?: string;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Team", href: "/team" },
];

export default function Navbar({ active }: NavbarProps) {
  const pathname = usePathname();
  const currentPath = active ?? pathname;

  return (
    <nav className="flex items-center gap-6 px-6 py-3 border-b bg-white">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-red-600",
            currentPath === item.href
              ? "text-red-600"
              : "text-gray-600"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
