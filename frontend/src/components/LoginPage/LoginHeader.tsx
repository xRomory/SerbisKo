import { Logo } from "@/components/utils/Logo";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

export default function LoginHeader() {
  return (
    <>
      <div className="text-center mb-4 relative">
        <Logo className="items-center" />
      </div>
      <Link to="/" className="flex justify-center text-sm mb-4 text-primary hover:text-primary/70">
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        Back to Home Page
      </Link>
    </>
  );
}
