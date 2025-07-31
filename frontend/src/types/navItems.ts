import type { DashbordItem, NavItem, AuthButton } from "@/types";
import {
  BarChart,
  Calendar,
  Cog,
  CreditCard,
  Home,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Providers", href: "/providers" },
  { label: "Maps", href: "/maps" },
  { label: "About", href: "/about" },
];

export const AUTH_BUTTONS: AuthButton[] = [
  { label: "Log In", href: "/login", variant: "ghost" },
  { label: "Sign Up", href: "/signup", variant: "default" },
];

export const DASHBOARD_ITEM: DashbordItem[] = [
  {
    title: "Dashboard",
    href: "/providers-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bookings",
    href: "/providers-dashboard/bookings",
    icon: Calendar,
  },
  {
    title: "Messages",
    href: "/providers-dashboard/messages",
    icon: Inbox,
  },
  {
    title: "Services",
    href: "/providers-dashboard/services",
    icon: Users,
  },
  {
    title: "Reviews",
    href: "/providers-dashboard/reviews",
    icon: MessageSquare,
  },
  {
    title: "Earnings",
    href: "/providers-dashboard/earnings",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/providers-dashboard/analytics",
    icon: BarChart,
  },
];

export const DASHBOARD_BOTTOM: DashbordItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Settings",
    href: "/providers-dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/providers-dashboard/help",
    icon: Cog,
  },
]