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
  UserSearch,
} from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { useCallback, useMemo } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation" // Добавь useRouter вместо window.location

const EXISTING_ROUTES = [
  "/home",
  "/projects", 
  "/favorites",
  "/messages",
  "/balance",
  "/expenses",
  "/payment-methods",
  "/profile",
  "/notifications",
  "/ai-settings",
  "/support",
  "/help",
  "/analytics" // когда создашь страницу
]

const NavigationPanel = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { logout: authLogout } = useAuth()
  
  const sections = useMemo(() => [
    {
      label: "ПАНЕЛЬ",
      items: [
        { href: "/home", label: "Главная", icon: HomeIcon, disabled: false },
        { href: "/analytics", label: "AI-совпадения", icon: SparklesIcon, disabled: false }, // disabled пока нет страницы
        { href: "/projects", label: "Мои проекты", icon: FolderIcon, disabled: false },
        { href: "/search-masters", label: "Найти фрилансера", icon: UserSearch, disabled: false },
        { href: "/favorites", label: "Избранные", icon: HeartIcon, disabled: false },
        { href: "/messages", label: "Сообщения", icon: MessageCircleIcon, disabled: false },
      ],
    },
    {
      label: "ФИНАНСЫ",
      items: [
        { href: "/balance", label: "Баланс", icon: CoinsIcon, disabled: false },
        { href: "/expenses", label: "Расходы", icon: TrendingDownIcon, disabled: false },
        { href: "/payment-methods", label: "Способы оплаты", icon: CreditCardIcon, disabled: false },
      ],
    },
    {
      label: "НАСТРОЙКИ",
      items: [
        { href: "/profile", label: "Профиль", icon: UserIcon, disabled: false },
        { href: "/notifications", label: "Уведомления", icon: BellIcon, disabled: false },
        { href: "/ai-settings", label: "Настройки AI", icon: CpuIcon, disabled: false },
        { href: "/support", label: "Поддержка", icon: HeadphonesIcon, disabled: false },
        { href: "/help", label: "Помощь", icon: HelpCircleIcon, disabled: false },
      ],
    },
  ], [])
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, disabled: boolean) => {
    if (disabled) {
      e.preventDefault()
      router.push('/coming-soon') // или показать тост
    }
  }
  
  const handleLogout = useCallback(async () => {
    try {
      await authLogout()
      router.push("/login")
    } catch (error) {
      console.error("Logout error:", error)
      await authLogout()
      router.push("/")
    }
  }, [authLogout, router])
  
  return (
    <nav className="flex flex-col h-full">
      {sections.map((section) => (
        <SidebarGroup key={section.label}>
          <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.href}
                    disabled={item.disabled}
                  >
                    <Link 
                      href={item.disabled ? "#" : item.href}
                      onClick={(e) => handleNavigation(e, item.href, item.disabled)}
                      className={item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                    >
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                      {item.disabled && (
                        <span className="text-xs ml-auto text-muted-foreground">
                          скоро
                        </span>
                      )}
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