import React, { useRef, useState } from "react";
import type { CustomerUserData } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { uploadToImageCloudinary, updateUserProfilePicture } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage
} from "@/components/ui/avatar";
import { 
  Clock, 
  CreditCard, 
  Heart, 
  Key, 
  MapPin, 
  MessageSquare, 
  Pencil, 
  Star, 
  User 
} from "lucide-react";

interface SidebarCustomerProps {
  userData: CustomerUserData;
  onProfilePhotoUpdate?: (newPhotoUrl: string) => void;
}

export const SidebarCustomer = ({ userData, onProfilePhotoUpdate }: SidebarCustomerProps) => {
  const photoRef = useRef<HTMLInputElement | null>(null);
  const { user, setUser } = useAuth();
  const [uploading, setUploading] = useState<boolean>(false);

  const handleProfilePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return;
    
    setUploading(true);
    try {
      const imageUrl = await uploadToImageCloudinary(file);
      await updateUserProfilePicture(imageUrl);
      onProfilePhotoUpdate?.(imageUrl);

      if(user) {
        const updatedUser = { ...user, profile_photo: imageUrl }
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (err) {
      console.error('Failed to upload profile photo:', err);
      alert("Failed to upload profile photo. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleAvatarClick = () => {
    photoRef.current?.click();
  };

  return (
    <div className="lg:col-span-1">
      <Card>
        <CardHeader className="flex flex-col items-center text-center pb-2">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-primary">
              <AvatarImage src={user?.profile_photo} alt={`${userData.firstName} ${userData.lastName}`} className="object-cover"/>
              <AvatarFallback>{userData.firstName[0]}{userData.lastName[0]}</AvatarFallback>
            </Avatar>
            <Button 
              size="icon" 
              variant="outline" 
              className="absolute bottom-0 right-0 h-9 w-8 rounded-full bg-background"
              onClick={handleAvatarClick}
              disabled={uploading}
            >
              <Pencil className="h-4 w-4 text-primary" />
              <span className="sr-only">Change Profile Picture</span>
            </Button>
            <Input 
              ref={photoRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="hidden"
            />
          </div>
          {uploading && (
            <div className="mt-2 text-sm text-muted-foreground">
              Uploading...
            </div>
          )}
          <CardTitle className="mt-4 font-medium">{userData.firstName} {userData.lastName}</CardTitle>
          <CardDescription className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {userData.city}
          </CardDescription>
          <div className="mt-2 flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">Trusted Customer</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile Information
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Bookings History
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Heart className="mr-2 h-4 w-4" />
              Saved Services
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Payment Methods
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Key className="mr-2 h-4 w-4" />
              Account Security
            </Button>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};