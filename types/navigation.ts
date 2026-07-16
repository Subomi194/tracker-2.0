import { IconType } from "react-icons";

export type SidebarItemProps = {
    title: string;
    header: string;
    path: string;
    icon: IconType;
    expanded?: boolean;
    

}