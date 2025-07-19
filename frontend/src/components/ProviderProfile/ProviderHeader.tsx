// import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Star } from "lucide-react";
import type { ProvidersType } from "@/types";

interface ProviderHeaderProps {
  provider: ProvidersType;
}

export default function ProviderHeader({ provider }: ProviderHeaderProps) {
  return (
    <div className="bg-ghost-hover rounded-xl shadow-sm border border-border overflow-hidden mb-8">
      <div className="relative h-64 overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div> */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center "></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2"></div>
      </div>

      <div className="relative px-8 pb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="-mt-16 md:-mt-20">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-md">
              <img
                src={provider.profileImage}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 pt-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Verified
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    Top Rated
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mt-2">
                  {provider.name}
                </h1>
                <p className="lg text-secondary-foreground">{provider.title}</p>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {provider.location}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{provider.rating}</span>
                  <span className="text-muted-foreground">({provider.reviews.length} reviews)</span>
                </div>
                <p className="text-xl md:text-2xl font-bold text-primary">{provider.hourlyRate}/hour</p>
                <div className="flex gap-4 mt-2">
                  <Button>Book Now</Button>
                  <Button variant="outline" className="border-border">
                    <MessageSquare className="h-4 w-4 mr-2" /> Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};