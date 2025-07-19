export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface AuthButton {
  label: string;
  href: string;
  variant?: "default" | "ghost" | "outline";
}

export interface LinkItem {
  label: string;
  href: string
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  bio: string;
}

export interface ProviderReview {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ProviderPackageRate {
  name: string;
  price: string;
  description: string;
}

export interface ProvidersType {
  id: string;
  name: string;
  title: string;
  tagline: string;
  rating: number;
  review_number: number;
  completedJobs: number;
  yearsOfExperience: number;
  hourlyRate: string;
  packageRates: ProviderPackageRate[];
  location: string;
  languages: string[];
  availability: string;
  about: string;
  services: string[];
  servicesDescription: string;
  profileImage: string;
  galleryImages: string[];
  reviews: ProviderReview[];
}