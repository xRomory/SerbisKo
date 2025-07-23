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
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
export const uploadToImageCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if(!response.ok) {
    throw new Error("Failed to upload image");
  }

  const image = await response.json();

  return image.secure_url;
};

export const updateUserProfilePicture = async (profilePhotoUrl: string) => {
  try {
    const response = await api.patch("/profile/profile-photo", {
      profile_photo: profilePhotoUrl,
    });

    return response
  } catch (error) {
    throw error;
  }
};