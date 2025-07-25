import React, { useEffect } from "react";
import type { CustomerUserData } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { useRegionsAndCities } from "@/hooks/useRegionsAndCities";
import { buildEditPayload } from "@/helpers";
import { editUserProfile } from "@/services/api";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil, X } from "lucide-react";

interface UserProfileTabProps {
  userData: CustomerUserData;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editedData: CustomerUserData;
  setEditedData: React.Dispatch<React.SetStateAction<CustomerUserData>>;
  setUserData: React.Dispatch<React.SetStateAction<CustomerUserData>>;
}

export const CustomerProfileTab: React.FC<UserProfileTabProps> = ({
  userData,
  isEditing,
  setIsEditing,
  editedData,
  setEditedData,
  setUserData,
}) => {
  const { setUser } = useAuth();
  const { regionMap, regions, loading: loadingRegions } = useRegionsAndCities();

  useEffect(() => {
    if(isEditing) {
      setEditedData({
        ...userData,
        region: userData.region || regions[0] || "",
        city: userData.city || (regionMap[userData.region]?.[0] ?? (regions[0] ? regionMap[regions[0]][0] : "")),
      })
    }
  }, [isEditing, userData, regions, regionMap]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const payload = buildEditPayload(userData, editedData);
      const updatedUser = await editUserProfile(payload);
      setUserData(updatedUser);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      window.location.reload();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Manage your personal information</CardDescription>
          </div>
          {!isEditing ? (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <Button variant="destructive" onClick={() => setIsEditing(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    value={editedData.first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    value={editedData.last_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Contact Number</Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    value={editedData.phone_number}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address_line">Address Line</Label>
                  <Input
                    id="address_line"
                    name="address_line"
                    value={editedData.address_line}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select
                    value={editedData.region}
                    onValueChange={(value) => {
                      setEditedData((prev) => ({
                        ...prev,
                        region: value,
                        city: value !== prev.region ? "" : prev.city,
                      }));
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select
                    value={editedData.city}
                    onValueChange={(value) =>
                      setEditedData((prev) => ({ ...prev, city: value }))
                    }
                    disabled={loadingRegions || !editedData.region}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      {(regionMap[editedData.region] || []).map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                      {loadingRegions && (
                        <p className="text-sm text-muted-foreground">
                          Loading regions...
                        </p>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={editedData.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <Button type="button" onClick={handleSaveProfile}>
                Save Profile
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    First Name
                  </h3>
                  <p>{userData.first_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Last Name
                  </h3>
                  <p>{userData.last_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </h3>
                  <p>{userData.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Contact Number
                  </h3>
                  <p>{userData.phone_number}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Address Line
                  </h3>
                  <p>{userData.address_line}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    City
                  </h3>
                  <p>{userData.city}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Region
                  </h3>
                  <p>{userData.region}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Username
                  </h3>
                  <p>{userData.username}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Magage your account preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive email about bookings and promotions
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-red-700">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </>
  );
};
