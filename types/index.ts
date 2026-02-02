import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    onClick?:
    MouseEventHandler<HTMLButtonElement>;   
    btnType?: "button" | "submit";
    loading?: boolean;
    href? : string;
}