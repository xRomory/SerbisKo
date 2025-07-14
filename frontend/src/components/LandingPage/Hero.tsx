import { Link } from "react-router-dom";
import { ServiceForm } from "@/components/LandingPage/ServiceForm";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-figtree font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="block">Para sa Galing ng Pinoy,</span>
                <span className="block">May SerbisKo.</span>
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[600px] italic font-light">
                Book trusted local helpers in the Philippines with AI-powered matching—whether it's sira ang gripo or may kailangan sa math.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="px-8 font-normal">
                <Link to="/services">Find Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-normal">
                <Link to="/be-provider">Become a Provider</Link>
              </Button>
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};