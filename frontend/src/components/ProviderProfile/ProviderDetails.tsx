import { useState } from "react";
import { useParams } from "react-router-dom";
import { providersData } from "@/mock/mock-data";
import ProviderDetailsOverview from "@/components/ProviderProfile/ProviderDetailsOverview";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

export const ProviderDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("overview");

  const provider = providersData.find((p) => p.id === id) || providersData[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Tabs
          defaultValue="overview"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="reivews">Reviews</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
            <ProviderDetailsOverview provider={provider} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
