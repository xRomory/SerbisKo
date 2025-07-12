import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { NotFound } from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />
  },
  { path: "*", element: <NotFound /> }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};

export default App