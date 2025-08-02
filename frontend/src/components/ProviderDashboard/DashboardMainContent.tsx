import DashboardHeader from "@/components/ProviderDashboard/DashboardHeader";
import DashboardStatsOverview from "@/components/ProviderDashboard/DashboardStatsOverview";

export default function DashboardMainContent() {
  return (
    <div className="flex-1 p-4 sm:p-6 overflow-y-auto lg:ml-64 pt-16 lg:pt-0">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader />
        <DashboardStatsOverview />

      </div>
    </div>
  );
}
