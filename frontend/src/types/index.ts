export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface AuthButton {
  label: string;
  href: string;
  variant?: "default" | "ghost" | "outline";
}