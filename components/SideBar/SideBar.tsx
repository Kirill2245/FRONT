"use client"

import { useAuth } from "@/context/auth-context"
import logoSvg from "@/public/images/logo.svg"
import Image from "next/image"
import NavigationPanel from "./NavigationPanel"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const SideBar = () => {

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3.75 px-2 py-1">
          <Image
            src={logoSvg}
            alt="Logo"
            width={48}
            height={46}
            className="w-12 h-11.5"
          />
          <h1 className="text-sidebar-foreground text-xl font-semibold leading-12">
            Light
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavigationPanel />
      </SidebarContent>
    </Sidebar>
  )
}



export default SideBar