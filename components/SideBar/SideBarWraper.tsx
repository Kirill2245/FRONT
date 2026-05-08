"use client"
import { useAuth } from "@/context/auth-context"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import SideBar from "./SideBar"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef, useCallback } from "react"

const NO_SIDEBAR_PATHS = [
  "/login",
  "/register",
  "/reset-password",
  "/coming-soon",
  "/maintenance",
  "/analytics"
]

export function SideBarWrapper({ children }: { children: React.ReactNode }) {
  const { loading, isAuthenticated } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [key, setKey] = useState(0) // ← добавить
  const pathname = usePathname()
  const initialCheckDone = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!loading) {
      initialCheckDone.current = true
    }
  }, [loading])

  // ✅ Обновляем key при изменении pathname
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [pathname])

  const hideSidebar = NO_SIDEBAR_PATHS.includes(pathname) || 
                        pathname?.startsWith("/auth/") 

  if (hideSidebar) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }

  return (
    <SidebarProvider key={key}>
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex-1">
        <div className="fixed -top-2 z-50 flex items-center gap-2 p-4">
            <SidebarTrigger />
        </div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}