import MainLayout from "@/components/layouts/MainLayout";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import ProviderProfilePage from "@/pages/ProviderProfilePage";
// import NoNavLayout from "@/components/layouts/NoNavLayout";
import { ProvidersDashboardPage } from "@/pages/ProvidersDashboardPage";
import { CustomerProfilePage } from "@/pages/CustomerProfilePage";
import { Signup } from "@/pages/Signup";
import { NotFound } from "@/pages/NotFound";

export const routes = [
  { 
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/customer/:username", element: <CustomerProfilePage /> },
      { path: "/provider/:id", element: <ProviderProfilePage /> },
      { path: "*", element: <NotFound /> },
    ]
  },
  // {
  //   element: <NoNavLayout />,
  //   children: [
  //     { path: "/providers-dashboard", element: <ProvidersDashboardPage /> },
  //   ]
  // },
  { path: "/providers-dashboard", element: <ProvidersDashboardPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];