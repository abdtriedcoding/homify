"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon className="cursor-pointer h-7 w-7" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/my-trips")}>My Trips</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/favorites")}>
            My Favorites
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/my-reservations")}>My Reservations</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/properties")}>
            My Properties
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/add-home")}>
            Add Your Home
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
