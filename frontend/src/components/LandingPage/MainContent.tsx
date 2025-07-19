import { Link } from "react-router-dom";
import {
  featuredServices,
  serviceCategories,
  testimonials,
} from "@/mock/mock-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Search,
  Star,
} from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden group pt-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-background px-2 py-1 text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-primary mr-1" />
                    {service.rating} ({service.reviewCount})
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl lg:text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.category} • {service.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        {service.price.currency}
                        {service.price.amount}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        per {service.price.unit}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Provider:</span>{" "}
                    {service.providerName}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/services/${service.id}`}>
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-12 md:py-16 bg-ghost-hover">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-figtree">
                How SerbisKo Works
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed text-muted-foreground lg:text-base/relaxed xl:text-xl/relaxed dark:text-secondary-foreground">
                Simple steps to find and book the perfect service provider
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-figtree">Search</h3>
              <p className="text-secondary-foreground">
                Browse through our extensive of services or use our AI-powered
                search to find exactly what you need
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-figtree">Connect</h3>
              <p className="text-secondary-foreground">
                Choose from our vetted Filipino service providers based on
                reviews, ratings, and you specific requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-figtree">Book & Enjoy</h3>
              <p className="text-secondary-foreground">
                Schedule the service, make secure payments, adn enjoy
                professional, reliable service at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-ghost-hover">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-figtree">
                What our Users Say
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed text-muted-foreground lg:text-base/relaxed xl:text-xl/relaxed dark:text-secondary-foreground">
                Don't just take our word for it, hear from our satisfied users
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="pt-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-background overflow-hidden h-16 w-16">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground italic">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-background">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-figtree">
                Ready to Find Your Perfect Service Provider?
              </h2>
              <p className="max-w-[900px] text-background/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied Filipinos who have found reliable
                service providers through SerbisKo
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="px-8 hover:bg-amber-100">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/services">Browse Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
