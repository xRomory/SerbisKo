import { useState } from "react";
import { useParams } from "react-router-dom";
import { providersData } from "@/mock/mock-data";
import ProviderDetailsOverview from "@/components/ProviderProfile/ProviderDetailsOverview";
import ProviderDetailsServices from "@/components/ProviderProfile/ProviderDetailsServices";
import ProviderDetailsReviews from "@/components/ProviderProfile/ProviderDetailsReviews";
import ProviderDetailsGallery from "@/components/ProviderProfile/ProviderDetailsGallery";
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
          <TabsList className="grid grid-cols-4 mb-8 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
            <ProviderDetailsOverview provider={provider} />
          </TabsContent>
          <TabsContent value="services" className="space-y-6">
            <ProviderDetailsServices provider={provider} />
          </TabsContent>
          <TabsContent value="reviews" className="space-y-6">
            <ProviderDetailsReviews provider={provider} />
          </TabsContent>
          <TabsContent value="gallery" className="space-y-6">
            <ProviderDetailsGallery provider={provider} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
