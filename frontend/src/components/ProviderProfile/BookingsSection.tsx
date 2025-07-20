import React, { useState } from "react";
import type { ProvidersType } from "@/types";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Mail, Phone, Shield } from "lucide-react";

interface BookingsSectionProps {
  provider: ProvidersType;
}

export const BookingsSection: React.FC<BookingsSectionProps> = ({
  provider,
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card className="bg-ghost-hover border-border">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4">Book {provider.name}</h3>

          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Select a date</h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md w-10/12"
            />
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-sm mb-2">Available time slots</h4>
            <div className="grid grid-cols-3 gap-2">
              {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"].map(
                (time, idx) => (
                  <Button
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    className={idx === 0 ? "bg-primary" : "border-border"}
                    size="sm"
                  >
                    {time}
                  </Button>
                )
              )}
            </div>
          </div>

          <Button className="w-full">Book Appointment</Button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-medium">Phone</div>
                <div className="text-secondary-foreground">
                  Available after booking
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-medium">Email</div>
                <div className="text-secondary-foreground">
                  Available after booking
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-secondary-foreground">
              All payments are secured and processed through SerbisKo's secure platform.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
