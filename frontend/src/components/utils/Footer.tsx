import { Link } from "react-router-dom";
import { Logo } from "@/components/utils/Logo";
import type { LinkItem } from "@/types";

const SERVICES_ITEM: LinkItem[] = [
  { label: "Home Repair", href: "/services/home-repair" },
  { label: "Cleaning", href: "/services/cleaning" },
  { label: "Tutoring", href: "/services/tutoring" },
  { label: "Helper", href: "/services/helper" },
]

const COMPANY_ITEM: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Providers", href: "/providers" },
  { label: "Maps", href: "/maps" },
  { label: "About", href: "/about" },
]

const LEGAL_ITEM: LinkItem[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
]

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              An AI-powered platform that connects Filipinos with trusted local service providers — from repairs to tutoring, all in one place.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {SERVICES_ITEM.map((item) => (
                <li>
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-3">SerbisKo</h3>
            <ul className="space-y-2">
              {COMPANY_ITEM.map((item) => (
                <li>
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_ITEM.map((item) => (
                <li>
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-2">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} SerbisKo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
