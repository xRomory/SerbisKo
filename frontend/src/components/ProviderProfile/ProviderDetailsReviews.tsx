import type { ProvidersType } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent 
} from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";

interface ProviderReviewsProps {
  provider: ProvidersType
}

export default function ProviderDetailsReviews({ provider }: ProviderReviewsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-ghost-hover rounded-lg p-6">
          <div className="flex items-center gap-1 mb-2">
            <div className="text-4xl font-bold">{provider.rating}</div>
            <div className="text-secondary-foreground text-lg">/ 5</div>
          </div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
            ))}
          </div>
          <p className="text-sm text-secondary-foreground">Based on {provider.reviews.length} reviews</p>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <div className="text-sm text-secondary-foreground w-8">70%</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="h-4 w-4 text-muted" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "20%" }}></div>
            </div>
            <div className="text-sm text-secondary-foreground w-8">20%</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              {[...Array(2)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-muted" />
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "10%" }}></div>
            </div>
            <div className="text-sm text-secondary-foreground w-8">10%</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(2)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-muted" />
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "0%" }}></div>
            </div>
            <div className="text-sm text-secondary-foreground w-8">0%</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-muted" />
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "0%" }}></div>
            </div>
            <div className="text-sm text-secondary-foreground w-8">0%</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {provider.reviews.map((review, idx) => (
          <Card key={idx} className="border-border">
            <CardContent className="p-6">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">{review.author}</h4>
                <span className="text-secondary-foreground text-sm">{review.date}</span>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                ))}
              </div>
              <p className="text-secondary-foreground">{review.comment}</p>
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" className="text-secondary-foreground">
                  <ThumbsUp className="h-4 w-4 mr-1" /> Helpful
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};