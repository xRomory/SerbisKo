import React, { useState } from "react";
import type { UserData } from "@/types";
import { CustomerMainContent } from "@/components/CustomerProfile/CustomerMainContent";
import SidebarCustomer from "@/components/CustomerProfile/SidebarCustomer";

export const CustomerProfilePage = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "Michelle",
    lastName: "Lim",
    email: "michelle.lim@example.com",
    phoneNumber: "+63 912 345 6789",
    address: "123 Emerald Street, Ortigas Center",
    city: "Pasig City",
    bio: "I'm a busy professional looking for reliable service providers to help with home maintenance and other tasks."
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <SidebarCustomer userData={userData}/>
            <CustomerMainContent userData={userData} setUserData={setUserData} />
          </div>
        </div>
      </main>
    </div>
  )
};