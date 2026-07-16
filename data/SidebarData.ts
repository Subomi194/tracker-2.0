import { SidebarItemProps } from "@/types/navigation";
import { BiHomeAlt } from "react-icons/bi";
import { PiPlusBold } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
//import { BsBoxSeam } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";


export const sidebarData: SidebarItemProps[] = [
  {
    icon: BiHomeAlt,
    title: "Home",
    header: "",
    path: "/",
  },
  {
    icon: PiPlusBold,
    title: "Add Entry",
    header: "Log Entry",
    path: "/add",
  },
  {
    icon: LuHistory,
    title: "History",
    header: "Routine History",
    path: "/history",
  },
  //{
    //icon: BsBoxSeam,
    //title: "Products",
    //path: "/products",
  //},
  {
    icon: LuSettings,
    title: "Settings",
    header: "Settings",
    path: "/settings",
  }
];




