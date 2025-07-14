import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const ProvidersSignupForm = () => {
  const [error, setError] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
  });

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSignupSubmit} className="space-y-4">
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
              required
            />
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
              required
            />
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
            required
          />
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
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact"
              name="contact"
              placeholder="+63"
              value={formData.contactNumber}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            Address Line <span className="text-destructive">*</span>
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="e.g. 123 Rizal St., Brgy. Malinis"
            value={formData.address}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="region">
              Region <span className="text-destructive">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
                <SelectItem value="Manila">Manila</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="password">
              Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              required
            />
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
