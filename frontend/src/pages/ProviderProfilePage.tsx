// import React from "react";
import { providersData } from "@/mock/mock-data";
import { useParams } from "react-router-dom";
import { ProviderDetails } from "@/components/ProviderProfile/ProviderDetails";
import ProviderHeader from "@/components/ProviderProfile/ProviderHeader";

export default function ProviderProfilePage() {
  const { id } = useParams();
  const provider = providersData.find((p) => p.id === id) || providersData[0];

  return (
    <div className="container px-4 mx-auto py-8">
      <ProviderHeader provider={provider}/>
      <ProviderDetails />
    </div>
  )
}
