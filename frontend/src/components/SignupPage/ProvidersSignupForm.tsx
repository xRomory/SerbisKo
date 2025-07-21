import React, { useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { api } from "@/api/axios";
import { useRegionsAndCities } from "@/hooks/useRegionsAndCities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { userSchema } from "@/schema/schemas";

export const ProvidersSignupForm = () => {
  const { regionMap, regions, loading: loadingRegions } = useRegionsAndCities();
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    contactNumber?: string;
    address?: string;
    region?: string;
    city?: string;
    api?: string;
  }>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
    region: "",
    city: "",
    role: "provider",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (error[id as keyof typeof error])
      setError((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({});

    if (!termsAccepted) {
      setError({ api: "You must accept the terms and conditions" });
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      await userSchema.validate(formData, { abortEarly: false });

      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        phone_number: formData.contactNumber,
        address_line: formData.address,
        region: formData.region,
        city: formData.city,
        role: formData.role,
      };

      await api.post("/auth/signup", payload);

      window.location.href = "/login";
    } catch (err: any) {
      if (err instanceof yup.ValidationError) {
        const newError: typeof error = {};

        err.inner.forEach((errors) => {
          if (errors.path)
            newError[errors.path as keyof typeof newError] = errors.message;
        });
        setError(newError);
      } else {
        setError({
          api:
            err instanceof Error
              ? err.message
              : "Signup failed. Please try again",
        });
      }

      setError(err.response?.data?.detail || "Sign up Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSignupSubmit} className="space-y-4">
        {error.api && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4 mr-2" />
            <AlertDescription>{error.api}</AlertDescription>
          </Alert>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Juan"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {error.firstName && (
              <p className="text-sm text-destructive">{error.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Dela Cruz"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {error.lastName && (
              <p className="text-sm text-destructive">{error.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {error.email && (
            <p className="text-sm text-destructive">{error.email}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="service">
              Service Type <span className="text-destructive">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cleaning">Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNumber">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              placeholder="+63"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
            {error.contactNumber && (
              <p className="text-sm text-destructive">{error.contactNumber}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            Address Line <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="e.g. 123 Rizal St., Brgy. Malinis"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          {error.address && (
            <p className="text-sm text-destructive">{error.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="region">
              Region <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.region}
              onValueChange={(value) => {
                setFormData((prev) => ({ ...prev, region: value, city: "" }));
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

            {error.region && (
              <p className="text-sm text-destructive">{error.region}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.city}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, city: value }))
              }
              disabled={loadingRegions || !formData.region}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {(regionMap[formData.region] || []).map((city) => (
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
            {error.city && (
              <p className="text-sm text-destructive">{error.city}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="password">
              Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {error.password && (
              <p className="text-sm text-destructive">{error.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {error.confirmPassword && (
              <p className="text-sm text-destructive">
                {error.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-row items-start space-x-2 pt-2">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => {
              setTermsAccepted(checked === true);
            }}
          />
          <div className="grid gap-1 5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </Label>
            <p className="text-sm text-muted-foreground">
              By checking this box, you agree to our{" "}
              <Link
                to="/terms-service"
                className="text-primary underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </>
  );
};
