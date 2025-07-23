import type { CustomerCredentials, CustomerUserData } from "@/types";
import { api } from "@/api/axios";

export const createAccountCustomer = async (payload: CustomerCredentials): Promise<CustomerUserData> => {
  try {
    const response = await api.post("/auth/signup", payload);
    return response.data as CustomerUserData;
  } catch (error) {
    throw error;
  }
};

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const uploadToImageCloudinary = async (data: FormData) => {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const image = await response.json()

  return image;
};