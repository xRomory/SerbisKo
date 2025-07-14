import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
  return (
    <div className="flex flex-col container px-4 mx-auto py-4 md:py-6">
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-16 flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/" className="font-normal">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};
