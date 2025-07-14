import MainLayout from "@/components/layouts/MainLayout";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import { NotFound } from "@/pages/NotFound";

export const routes = [
  { 
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> }
]