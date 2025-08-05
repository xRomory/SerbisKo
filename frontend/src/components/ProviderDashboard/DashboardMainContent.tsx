import DashboardHeader from "@/components/ProviderDashboard/DashboardHeader";
import DashboardStatsOverview from "@/components/ProviderDashboard/DashboardStatsOverview";
import DashboardBookingsTab from "@/components/ProviderDashboard/DashboardBookingsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, Layers } from "lucide-react";

export default function DashboardMainContent() {
  return (
    <div className="flex-1 p-4 sm:p-6 overflow-y-auto lg:ml-64 pt-16 lg:pt-0">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader />
        <DashboardStatsOverview />
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 overflow-x-auto lg:w-[600px] w-full">
            <TabsTrigger value="bookings">
              <Calendar className="mr-2 h-4 w-4" />
              Bookings
            </TabsTrigger>
            <TabsTrigger value="services">
              <Layers className="mr-2 h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="earnings">
              <Activity className="mr-2 h-4 w-4" />
              Earnings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bookings">
            <DashboardBookingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
