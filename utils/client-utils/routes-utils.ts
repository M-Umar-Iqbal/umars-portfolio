import { NextRouter, } from "next/router"


export const isCurrentRoute = (currentPath: string, href: string) => {
    return  currentPath === href;
}