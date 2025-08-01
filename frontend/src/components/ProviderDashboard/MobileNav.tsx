import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import MobileDasboardNavMenu from "./MobileDasboardNavMenu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden sticky top-0 flex items-center justify-between border-b px-4 h-16 z-30">
      <div className="flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <MobileDasboardNavMenu />
          </SheetContent>
        </Sheet>

        <div className="text-xl font-bold tracking-tight font-figtree">
          SerbisKo
        </div>
      </div>

      <div className="flex items-center">
        <Button variant="ghost" size="sm" className="text-primary">
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          Available
        </Button>
      </div>
    </div>
  );
};
