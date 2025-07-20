import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import type { NavItem, AuthButton } from "@/types";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Providers", href: "/providers" },
  { label: "Maps", href: "/maps" },
  { label: "About", href: "/about" },
];

const AUTH_BUTTONS: AuthButton[] = [
  { label: "Log In", href: "/login", variant: "ghost" },
  { label: "Sign Up", href: "/signup", variant: "default" },
];

export const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showMobileSearch]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col items-start">
              <span className="text-lg md:text-xl font-bold tracking-tight font-figtree">
                SerbisKo
              </span>
              <span className="text-[10px] md:text-xs font-light tracking-tight font-figtree">
                Serbisyo ko. Para sa'yo
              </span>
            </div>
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <form role="search" className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search a Provider"
                className="pl-8"
              />
            </form>
            {AUTH_BUTTONS.map((button) => (
              <Button key={button.href} asChild variant={button.variant}>
                <Link to={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div className="md:hidden flex space-x-2">
          {showMobileSearch ? (
            <form 
              role="search" 
              className="relative flex-1"
            >
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search a Provider"
                className="pl-8"
                onBlur={() => setShowMobileSearch(false)}
              />
            </form>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setShowMobileSearch(true)}
              aria-label="Show search"
            >
              <Search />
            </Button>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8 px-6 py-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 pt-4">
                  {AUTH_BUTTONS.map((button) => (
                    <Button key={button.href} asChild variant={button.variant}>
                      <Link to={button.href} onClick={() => setIsOpen(false)}>
                        {button.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
