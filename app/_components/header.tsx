import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserMenu from "./user-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import LoginModal from "./login-modal";

const Header = () => {
  const user = false;
  return (
    <nav className="flex justify-between items-center bg-white top-0 left-0 sticky shadow-md p-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          className="cursor-pointer"
          src="/images/logo.png"
          height="100"
          width="100"
          alt="Logo"
        />
      </Link>
      {/* Search Button */}
      <div className="flex-grow flex justify-center">
        <Button variant={"destructive"} className="rounded-full">
          <p className="font-medium text-base">Search</p>
          <span className="pl-2">
            <SearchIcon className="w-5 h-5" />
          </span>
        </Button>
      </div>
      {/* Profile and User Menu */}
      {user ? (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <UserMenu />
        </div>
      ) : (
        // <Link href="/login" className={buttonVariants()}>
        //   Log In
        // </Link>
        <LoginModal />
      )}
    </nav>
  );
};

export default Header;
