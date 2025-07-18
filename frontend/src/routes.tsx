import MainLayout from "@/components/layouts/MainLayout";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import { CustomerProfilePage } from "@/pages/CustomerProfilePage";
import { Signup } from "@/pages/Signup";
import { NotFound } from "@/pages/NotFound";

export const routes = [
  { 
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/customer", element: <CustomerProfilePage /> },
      { path: "*", element: <NotFound /> },
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]