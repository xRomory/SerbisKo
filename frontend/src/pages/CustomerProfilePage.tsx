import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import type { UserData } from "@/types";
import { CustomerMainContent } from "@/components/CustomerProfile/CustomerMainContent";
import SidebarCustomer from "@/components/CustomerProfile/SidebarCustomer";

export const CustomerProfilePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    region: "",
    city: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        username: user?.username || "",
        firstName: user?.first_name || "",
        lastName: user?.last_name || "",
        email: user?.email || "",
        phoneNumber: user?.first_name || "",
        address: user?.address_line || "",
        region: user?.region || "",
        city: user?.city || "",
        bio: "",
      });
    }
  }, [user]);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SidebarCustomer userData={userData} />
          <CustomerMainContent userData={userData} setUserData={setUserData} />
        </div>
      </div>
    </main>
  );
};
