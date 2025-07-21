import { useEffect, useState } from "react";
import { api } from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export const ServiceForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get("/locations/cities");
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities endpoints: ", error)
        setCities([]);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[500px] bg-background p-4 rounded-lg shadow-lg">
      <div className="space-y-2 text-center mb-2">
        <h2 className="text-xl font-semibold">What service do you need?</h2>
        <p className="text-sm text-muted-foreground font-regular">
          Get connected with the best local service providers
        </p>
      </div>
      <form className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Plumber, tutor, cleaner..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select a city..." />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full font-normal">Search</Button>
      </form>
    </div>
  );
};
