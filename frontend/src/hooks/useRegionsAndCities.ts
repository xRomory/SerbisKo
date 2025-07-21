import { useEffect, useState } from "react";
import { api } from "@/api/axios";

export function useRegionsAndCities() {
  const [regionMap, setRegionMap] = useState<Record<string, string[]>>({});
  const [regions, setRegions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    api.get("/locations/regions")
      .then(res => {
        setRegionMap(res.data);
        setRegions(Object.keys(res.data));
      })
      .catch(() => setError("Failed to load regions"))
      .finally(() => setLoading(false));
  }, []);

  return { regionMap, regions, loading, error }
};