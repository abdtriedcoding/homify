import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    value: "beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    value: "windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    value: "modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    value: "countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    value: "pools",
  },
  {
    label: "Islands",
    icon: GiIsland,
    value: "islands",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    value: "lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    value: "skiing",
  },
  {
    label: "Castles",
    icon: GiCastle,
    value: "castles",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    value: "caves",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    value: "camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    value: "arctic",
  },
  {
    label: "Desert",
    icon: GiCactus,
    value: "desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    value: "barns",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    value: "lux",
  },
];
