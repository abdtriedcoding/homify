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
