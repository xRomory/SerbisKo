import React, { useState } from "react";
import * as yup from "yup";
import { useRegionsAndCities } from "@/hooks/useRegionsAndCities";
import { Link } from "react-router-dom";
import { createAccountCustomer } from "@/services/api";
import { userSchema } from "@/schema/schemas";
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
import type { CustomerCredentials } from "@/types";

export const CustomerSignupForm = () => {
  const { regionMap, regions, loading: loadingRegions } = useRegionsAndCities();
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
    phone_number?: string;
    address_line?: string;
    region?: string;
    city?: string;
    api?: string;
    message?: string;
  }>({});
  const [formData, setFormData] = useState<CustomerCredentials>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address_line: "",
    region: "",
    city: "",
    password: "",
    confirm_password: "",
    role: "customer"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (error[id as keyof typeof error])
      setError((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    if (!termsAccepted) {
      setError({ message: "You must accept the terms and conditions." });
      setLoading(false);
      return;
    }

    try {
      await userSchema.validate(formData, { abortEarly: false });
      await createAccountCustomer(formData);
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
            <Label htmlFor="first_name">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="Juan"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
            {error.first_name && (
              <p className="text-sm text-destructive">{error.first_name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="last_name"
              name="last_name"
              placeholder="Dela Cruz"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
            {error.last_name && (
              <p className="text-sm text-destructive">{error.last_name}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="space-y-2">
            <Label htmlFor="phone_number">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone_number"
              name="phone_number"
              placeholder="+63"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
            />
            {error.phone_number && (
              <p className="text-sm text-destructive">{error.phone_number}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address_line">
            Address Line <span className="text-destructive">*</span>
          </Label>
          <Input
            id="address_line"
            name="address_line"
            placeholder="e.g. 123 Rizal St., Brgy. Malinis"
            value={formData.address_line}
            onChange={handleInputChange}
            required
          />
          {error.address_line && (
            <p className="text-sm text-destructive">{error.address_line}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Region">
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
              onChange={handleInputChange}
              placeholder="Enter password"
              value={formData.password}
              required
            />
            {error.password && (
              <p className="text-sm text-destructive">{error.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm_password">
              Confirm Password <span className="text-destructive">*</span>
            </Label>
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={handleInputChange}
              value={formData.confirm_password}
              required
            />
            {error.confirm_password && (
              <p className="text-sm text-destructive">
                {error.confirm_password}
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
