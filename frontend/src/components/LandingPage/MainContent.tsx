import React from "react";
import { Link } from "react-router-dom";
import { featuredServices, serviceCategories } from "@/mock/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function MainContent() {
  return (
    <>
      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-figtree tracking-tighter sm:text-4xl md:text-5xl">
                Popular Services
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed text-muted-foreground lg:text-base/relaxed xl:text-xl/relaxed dark:text-secondary-foreground">
                Discover the most sought-after services in your area.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {serviceCategories.map((category) => (
              <Link
                to={`/services/${category.id}`}
                key={category.id}
                className="group relative flex flex-col items-center justify-center rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <div className="mb-4 text-4xl">{category.icon}</div>
                <h3 className="text-base font-medium">{category.name}</h3>
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-background group-hover:ring-ghost-hover"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-figtree tracking-tighter">
                Featured Services
              </h2>
              <p className="md:text-xl text-muted-foreground dark:text-secondary-foreground">
                Top-rated services by our skilled Filipino providers
              </p>
            </div>
            <Button variant="ghost" asChild className="ml-auto">
              <Link to="/services" className="flex items-center">
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};