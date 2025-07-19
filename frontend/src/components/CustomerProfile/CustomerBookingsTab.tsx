import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bookings } from "@/mock/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MessageSquare, Star } from "lucide-react";

export default function CustomerBookingsTab() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Completed
          </Badge>
        );
      case "upcoming":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Upcoming
          </Badge>
        );
      case "cancelled":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
        <CardDescription>View and manage your service bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={booking.providerImage}
                        alt={booking.providerName}
                      />
                      <AvatarFallback>{booking.providerName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{booking.serviceName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {booking.providerName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium text-sm flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {booking.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium text-sm flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {booking.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <div>{getStatusBadge(booking.status)}</div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-medium text-sm flex items-center">
                        {booking.currency}
                        {booking.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-center items-center md:items-end space-y-3">
                  {booking.status === "completed" && !booking.rating ? (
                    <Button variant="outline">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      Leave a Review
                    </Button>
                  ) : booking.status === "completed" && booking.rating ? (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>{booking.rating}</span>
                      <span className="ml-2 text-muted-foreground">Rated</span>
                    </div>
                  ) : booking.status === "upcoming" ? (
                    <>
                      <Button>
                        <MessageSquare className="hr-4 w-4 mr-2" />
                        Contact Provider
                      </Button>
                      <Button variant="destructive">Cancel Booking</Button>
                    </>
                  ) : null}
                  <Button
                    variant="ghost"
                    className="border-border border bg-input"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};