import LandingPage from "@/pages/LandingPage";
import { NotFound } from "@/pages/NotFound";

export const routes = [
  { index: true, element: <LandingPage /> },
  { path: "*", element: <NotFound /> }
]