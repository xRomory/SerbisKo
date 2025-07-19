import React from "react";
import type { ProvidersType } from "@/types";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface ProviderOverviewProps {
  provider: ProvidersType
}

export default function ProviderDetailsOverview({ provider }: ProviderOverviewProps) {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">About {provider.name}</h2>
        <p className="text-secondary-foreground leading-relaxed">{provider.about}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-accent rounded-lg p-4 text-center">
          <div className="text-amber-500 font-bold text-xl mb-1">{provider.completedJobs}</div>
          <div className="text-secondary-foreground text-sm">Jobs Completed</div>
        </div>
        <div className="bg-sky-100 rounded-lg p-4 text-center">
          <div className="text-sky-600 font-bold text-xl mb-1">{provider.yearsOfExperience}</div>
          <div className="text-secondary-foreground text-sm">Experience</div>
        </div>
        <div className="bg-emerald-100 rounded-lg p-4 text-center">
          <div className="text-emerald-600 font-bold text-xl mb-1">{provider.rating}</div>
          <div className="text-secondary-foreground text-sm">Avg. Rating</div>
        </div>
        <div className="bg-pink-100 rounded-lg p-4 text-center">
          <div className="text-pink-600 font-bold text-xl mb-1">30 Mins</div>
          <div className="text-secondary-foreground text-sm">Avg. Response</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold text-lg mb-3">Languages</h3>
          <div className="flex gap-2 flex-wrap">
            {provider.languages.map((lang, idx) => (
              <Badge key={idx} variant="secondary" className="bg-ghost-hover">{lang}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Services</h3>
          <div className="flex gap-2 flex-wrap">
            {provider.services.map((service, idx) => (
              <Badge key={idx} variant="secondary" className="bg-ghost-hover">{service}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Availability</h3>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Clock className="h-5 w-5 text-muted-foreground" />
            {provider.availability}
          </div>
        </div>
      </div>
    </>
  );
};