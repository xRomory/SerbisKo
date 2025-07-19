import type { ProvidersType } from "@/types";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";

interface ProviderServicesProps {
  provider: ProvidersType;
};

export default function ProviderDetailsServices({ provider }: ProviderServicesProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Services Offered</h2>
      <p className="text-secondary-foreground leading-relaxed mb-6">{provider.servicesDescription}</p>

      <h3 className="font-bold text-lg mb-3">Service Package</h3>
      <div className="space-y-4">
        {provider.packageRates.map((pkg, idx) => (
          <Card key={idx} className="border-border">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{pkg.name}</h4>
                  <p className="text-secondary-foreground mt-1">{pkg.description}</p>
                </div>
                <div className="text-xl font-bold text-primary">{pkg.price}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};