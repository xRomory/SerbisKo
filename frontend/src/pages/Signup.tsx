import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomerSignupForm } from "@/components/SignupPage/CustomerSignupForm";
import { ProvidersSignupForm } from "@/components/SignupPage/ProvidersSignupForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Mail, ArrowLeftIcon } from "lucide-react";
import { LuFacebook } from "react-icons/lu";

export const Signup = () => {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-8">
        <Link
          to="/"
          className="flex justify-center text-sm mb-4 text-primary hover:text-primary/70"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Home Page
        </Link>
        <div className="container mx-auto px-4 md:px-6">
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">
                Create an account
              </CardTitle>
              <CardDescription>
                Join SerbisKo and connect with skilled service providers across
                the Philippines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customer" className="text-xs">
                    Customer Sign Up
                  </TabsTrigger>
                  <TabsTrigger value="providers" className="text-xs">
                    Service Provider Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="customer" className="mt-2">
                  <CustomerSignupForm />
                </TabsContent>
                <TabsContent value="providers" className="mt-2">
                  <ProvidersSignupForm />
                </TabsContent>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>

                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-ghost-hover px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <LuFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};
