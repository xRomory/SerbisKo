import { dashboardData } from "@/mock/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, MessageSquare, PhilippinePeso, Star } from "lucide-react";

export default function DashboardStatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {/* Bookings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-secondary-foreground">
            Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">
                {dashboardData.stats.bookings.total}
              </div>
              <p className="text-sm text-secondary-foreground">
                Total Bookings
              </p>
            </div>

            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Calendar className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Completion rate</span>
              <span className="font-medium">
                {dashboardData.stats.bookings.percentComplete}%
              </span>
            </div>
            <Progress
              value={dashboardData.stats.bookings.percentComplete}
              className="h-1.5"
            />

            <div className="flex justify-between text-sm mt-3">
              <div>
                <span className="font-medium text-green-600">
                  {dashboardData.stats.bookings.completed}
                </span>
                <span className="text-muted-foreground ml-1">Completed</span>
              </div>
              <div>
                <span className="font-medium text-amber-600">
                  {dashboardData.stats.bookings.pending}
                </span>
                <span className="text-muted-foreground ml-1">Pending</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earnings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-secondary-foreground">
            Earnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">
                {dashboardData.stats.earnings.total}
              </div>
              <p className="text-sm text-secondary-foreground">
                Total earnings
              </p>
            </div>

            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <PhilippinePeso className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-ghost-hover p-3 rounded-md">
              <div className="text-secondary-foreground text-xs">Available</div>
              <div className="font-medium mt-1">
                {dashboardData.stats.earnings.available}
              </div>
            </div>

            <div className="bg-ghost-hover p-3 rounded-md">
              <div className="text-secondary-foreground text-xs">Pending</div>
              <div className="font-medium mt-1">
                {dashboardData.stats.earnings.pending}
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-green-600 font-medium">
            {dashboardData.stats.earnings.trend} vs last month
          </div>
        </CardContent>
      </Card>

      {/* Reviews */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-secondary-foreground">
            Reviews & Ratings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">
                {dashboardData.stats.reviews.averageRating}
              </div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(dashboardData.stats.reviews.averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-muted-foreground text-sm ml-1">
                  ({dashboardData.stats.reviews.total})
                </span>
              </div>
            </div>

            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Response rate</span>
              <span className="font-medium">
                {dashboardData.stats.reviews.responseRate}%
              </span>
            </div>
            <Progress
              value={dashboardData.stats.reviews.responseRate}
              className="h-1.5"
            />

            <div className="flex justify-between text-sm mt-3">
              <div>
                <span className="font-medium text-green-600">
                  {dashboardData.stats.bookings.completed}
                </span>
                <span className="text-muted-foreground ml-1">Completed</span>
              </div>
              <div>
                <span className="font-medium text-amber-600">
                  {dashboardData.stats.bookings.pending}
                </span>
                <span className="text-muted-foreground ml-1">Pending</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};