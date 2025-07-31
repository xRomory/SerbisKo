import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { NAV_ITEMS, AUTH_BUTTONS } from "@/types/navItems";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { LogOut, Menu, Search, User } from "lucide-react";

export const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
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
          <nav className="hidden md:flex items-center lg:space-x-6 space-x-4">
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

          <div className="hidden md:flex items-center md:space-x-2">
            <form role="search" className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search a Provider"
                className="pl-8"
              />
            </form>
            {!user ? (
              AUTH_BUTTONS.map((button) => (
                <Button key={button.href} asChild variant={button.variant}>
                  <Link to={button.href}>{button.label}</Link>
                </Button>
              ))
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="ml-4 relative h-10 w-10 rounded-full border border-primary"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={user.profile_photo || ""}
                        alt={user.first_name + " " + user.last_name}
                      />
                      <AvatarFallback>
                        {(user.first_name?.[0] || "")}
                        {(user.last_name?.[0] || "")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  forceMount
                  className="w-56 bg-ghost-hover"
                >
                  <div className="text-sm font-normal items-start p-2">
                    {user.first_name} {user.last_name}
                  </div>

                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      if (user && user.username) {
                        navigate(`/customer/${user.username}`);
                      }
                    }}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div className="md:hidden flex space-x-2">
          {showMobileSearch ? (
            <form role="search" className="relative flex-1">
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
                <div className="mb-4 space-y-2 flex items-center">
                  {user && (
                    <Button
                      variant="ghost"
                      className="w-full flex justify-start p-0"
                      onClick={() => {
                        if (user && user.username) {
                          navigate(`/customer/${user.username}`);
                          setIsOpen(false);
                        }
                      }}
                    >
                      <Avatar className="h-9 w-9 border-2 border-primary ">
                        <AvatarImage
                          src={user.profile_photo || ""}
                          alt={user.first_name + " " + user.last_name}
                        />
                        <AvatarFallback>
                          {(user.first_name?.[0] || "")}
                          {(user.last_name?.[0] || "")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-lg font-medium">
                        {user.first_name} {user.last_name}
                      </span>
                    </Button>
                  )}
                </div>

                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-lg font-normal"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 pt-4">
                  {!user ? (
                    AUTH_BUTTONS.map((button) => (
                      <Button
                        key={button.href}
                        asChild
                        variant={button.variant}
                      >
                        <Link to={button.href} onClick={() => setIsOpen(false)}>
                          {button.label}
                        </Link>
                      </Button>
                    ))) : (
                      <Button
                        onClick={logout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};