import type { ProvidersType } from "@/types";

interface ProviderGalleryProps {
  provider: ProvidersType;
}

export default function ProviderDetailsGallery({ provider }: ProviderGalleryProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Work Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {provider.galleryImages.map((img, idx) => (
          <div key={idx} className="aspect-square rounded-lg overflow-hidden">
            <img src={img} alt={`Work Sample ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}
