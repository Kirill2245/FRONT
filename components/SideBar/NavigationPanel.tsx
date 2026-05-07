"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboardIcon,
  WalletIcon,
  SettingsIcon,
  LogOutIcon,
  HomeIcon,
  SparklesIcon,
  FolderIcon,
  HeartIcon,
  MessageCircleIcon,
  CoinsIcon,
  TrendingDownIcon,
  CreditCardIcon,
  UserIcon,
  BellIcon,
  CpuIcon,
  HeadphonesIcon,
  HelpCircleIcon,
} from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { useCallback } from "react"
import { useAuth } from "@/context/auth-context"

const NavigationPanel = () => {
  const pathname = usePathname()
  const { loading, isAuthenticated, checkAuth, logout: authLogout } = useAuth()
  
  const sections = [
    {
      label: "ПАНЕЛЬ",
      items: [
        { href: "/home", label: "Главная", icon: HomeIcon },
        { href: "/analytics", label: "AI-совпадения", icon: SparklesIcon },
        { href: "/projects", label: "Мои проекты", icon: FolderIcon },
        { href: "/favorites", label: "Избранные", icon: HeartIcon },
        { href: "/messages", label: "Сообщения", icon: MessageCircleIcon },
      ],
    },
    {
      label: "ФИНАНСЫ",
      items: [
        { href: "/balance", label: "Баланс", icon: CoinsIcon },
        { href: "/expenses", label: "Расходы", icon: TrendingDownIcon },
        { href: "/payment-methods", label: "Способы оплаты", icon: CreditCardIcon },
      ],
    },
    {
      label: "НАСТРОЙКИ",
      items: [
        { href: "/profile", label: "Профиль", icon: UserIcon },
        { href: "/notifications", label: "Уведомления", icon: BellIcon },
        { href: "/ai-settings", label: "Настройки AI", icon: CpuIcon },
        { href: "/support", label: "Поддержка", icon: HeadphonesIcon },
        { href: "/help", label: "Помощь", icon: HelpCircleIcon },
      ],
    },
  ]
  
  const handleLogout = useCallback(async () => {
    try {
      await authLogout()
      window.location.href = "/login"
    } catch (error) {
      console.error("Logout error:", error)
      await authLogout()
      window.location.href = "/"
    }
  }, [authLogout])
  
  return (
    <nav className="flex flex-col h-full">
      {sections.map((section) => (
        <SidebarGroup key={section.label}>
          <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}

      <div className="flex-1" />
      
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button onClick={handleLogout}>
                  <LogOutIcon className="size-4" />
                  <span>Выйти</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </nav>
  )
}

export default NavigationPanel