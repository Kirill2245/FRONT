"use client"
import { useAuth } from "@/context/auth-context"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import SideBar from "./SideBar"

export function SideBarWrapper({ children }: { children: React.ReactNode }) {
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }


  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex-1">
          <div className="flex items-center gap-2 p-4">
            <SidebarTrigger />
          </div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}