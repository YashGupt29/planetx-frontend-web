
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Heart, LayoutDashboard, MessageSquare, ScrollText, Settings, User } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Wishlist",
    icon: Heart,
    href: "/wishlist",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Share Feedback",
    icon: MessageSquare,
    href: "/feedback",
  },
  {
    title: "Privacy & Policy",
    icon: ScrollText,
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    icon: Building2,
    href: "/terms",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

