"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background p-4">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/" className="text-xl font-bold">
          Junaid Syed
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-primary">
            Blogs
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {/* For Mobile view */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-4 p-6">
              <Link href="/" className="text-lg" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link
                href="/blogs"
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
