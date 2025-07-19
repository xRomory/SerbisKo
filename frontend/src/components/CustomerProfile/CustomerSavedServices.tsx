import { savedServices } from "@/mock/mock-data";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Heart, Star } from "lucide-react";

export default function CustomerSavedServices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Service Providers</CardTitle>
        <CardDescription>Services you've saved for later</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedServices.map((service) => (
            <Card key={service.id} className="overflow-hidden pt-0">
              <div className="relative h-40 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 text-rose-500 hover:bg-background hover:text-rose-600 rounded-full h-8 w-8">
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.providerName}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span>{service.rating}</span>
                    <span className="text-muted-foreground ml-1">({service.reviewCount})</span>
                  </div>
                  <Button size="sm">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
