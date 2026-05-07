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
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

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
      <SidebarFooter>
        {/* Кнопка выхода или информация */}
      </SidebarFooter>
    </Sidebar>
  )
}



export default SideBar