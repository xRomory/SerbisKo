import React, { useState } from "react";
import type { CustomerUserData } from "@/types";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { CustomerProfileTab } from "@/components/CustomerProfile/CustomerProfileTab";
import CustomerBookingsTab from "@/components/CustomerProfile/CustomerBookingsTab";
import CustomerSavedServices from "@/components/CustomerProfile/CustomerSavedServices";

interface CustomerMainContentProps {
  userData: CustomerUserData;
  setUserData: React.Dispatch<React.SetStateAction<CustomerUserData>>;
}

export const CustomerMainContent: React.FC<CustomerMainContentProps> = ({
  userData,
  setUserData,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div className="lg:col-span-3 space-y-6">
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-3 w-full md:w-auto mb-4">
          <TabsTrigger className="" value="profile">Profile</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="saved">Saved Services</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <CustomerProfileTab
            userData={userData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editedData={{ ...userData }}
            setEditedData={setUserData}
          />
        </TabsContent>
        <TabsContent value="bookings">
          <CustomerBookingsTab />
        </TabsContent>
        <TabsContent value="saved">
          <CustomerSavedServices />
        </TabsContent>
      </Tabs>
    </div>
  );
};
