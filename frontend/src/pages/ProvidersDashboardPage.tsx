import DashboardNav from "@/components/ProviderDashboard/DashboardNav";
import { MobileNav } from "@/components/ProviderDashboard/MobileNav";

export const ProvidersDashboardPage = () => {
  const statusColorMap = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-amber-100 text-amber-800",
    cancelled: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800"
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <MobileNav />
      <main className="flex-1 p-6 overflow-y-auto lg:ml-0">
        
      </main>
    </div>
  )
}
