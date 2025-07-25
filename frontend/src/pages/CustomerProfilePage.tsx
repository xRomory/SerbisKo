import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import type { CustomerUserData } from "@/types";
import { CustomerMainContent } from "@/components/CustomerProfile/CustomerMainContent";
import { SidebarCustomer } from "@/components/CustomerProfile/SidebarCustomer";

export const CustomerProfilePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<CustomerUserData>({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address_line: "",
    region: "",
    city: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        username: user?.username || "",
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        email: user?.email || "",
        phone_number: user?.phone_number || "",
        address_line: user?.address_line || "",
        region: user?.region || "",
        city: user?.city || "",
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
