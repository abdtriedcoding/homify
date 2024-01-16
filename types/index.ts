import { Listing, User } from "@prisma/client";
import { IconType } from "react-icons/lib";

export interface CategoryBoxProps {
  icon: IconType;
  label: string;
}
export interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export interface CountryProps {
  label: string;
  value: string;
}

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export interface ListingClientProps {
  listing: SafeListing;
  currentUser?: SafeUser | null;
}
