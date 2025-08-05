import { dashboardData } from "@/mock/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";

export default function DashboardBookingsTab() {
  const statusColorMap = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-amber-100 text-amber-800",
    cancelled: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800",
  };

  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
        <Button variant="outline">View Calendar</Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {dashboardData.recentBookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage
                          src={booking.client.image}
                          alt={booking.client.name}
                        />
                        <AvatarFallback>
                          {booking.client.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{booking.client.name}</div>
                        <div className="text-sm text-secondary-foreground">
                          {booking.service}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        statusColorMap[
                          booking.status as keyof typeof statusColorMap
                        ]
                      }
                    >
                      {booking.status.charAt(0).toUpperCase() +booking.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x border-t border-border">
                  <div className="px-3 py-3 flex flex-col items-center-justify-center">
                    <div className="text-xs text-secondary-foreground">Date</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}