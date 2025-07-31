import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_ITEM, DASHBOARD_BOTTOM } from "@/types/navItems";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

export default function DashboardNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="hidden lg:flex flex-col border-r border-primary w-64">
      <div className="px-6 py-5 border-b border-border">
        <Link to="/" className="flex flex-col items-start">
          <span className="text-lg md:text-xl font-bold tracking-tight font-figtree">
            SerbisKo
          </span>
          <span className="text-[10px] md:text-xs font-light tracking-tight font-figtree">
            Serbisyo ko. Para sa'yo
          </span>
        </Link>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <div className="flex items-center px-3 py-2 mb-6">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="https://randomuser.me/api/portraits/women/81.jpg" alt=""/>
              <AvatarFallback>CR</AvatarFallback>
            </Avatar>

            <div className="space-y-0 5">
              <div className="font-medium">Camille Reyes</div>
              <div className="text-xs text-secondary-foreground">House Cleaner</div>
            </div>
          </div>

          <div className="mb-2">
            <div className="px-3 mb-2 text-xs font-medium">MENU</div>

            <nav className="space-y-1">
              {DASHBOARD_ITEM.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                    path === item.href
                      ? "bg-primary text-background"
                      : "text-secondary-foreground hover:bg-ghost-hover"
                  )}
                >
                  <item.icon className="mr-3 w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            <div className="px-3 mb-2 text-xs font-medium text-secondary-foreground">ACCOUNT</div>
            <nav className="space-y-1">
              {DASHBOARD_BOTTOM.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                    path === item.href
                      ? "bg-primary text-background"
                      : "text-secondary-foreground hover:bg-ghost-hover"
                  )}
                >
                  <item.icon className="mr-3 w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-border">
        <div className="flex items-center px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-primary mr-3">
            <Clock className="h-4 w-4" />
          </div>

          <div className="space-y-0 5">
            
          </div>
        </div>
      </div>
    </div>
  );
};