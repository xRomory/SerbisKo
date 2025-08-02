import { Button } from "../ui/button";
import { Calendar, Clock } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-secondary-foreground">
          Welcome back, User! Here's what is happening to your services.
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          <Clock className="mr-2 h-4 w-4" />
          Available Now
        </Button>
        <Button size="sm" className="whitespace-nowrap">
          <Calendar className="mr-2 h-4 w-4" />
          Create Availability
        </Button>
      </div>
    </div>
  );
}