export interface AuthContextType {
  user: { 
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address_line: string;
    region: string;
    city: string;
    role: string;
    user_id: string;
  } | null;
  token: string | null;
  login: (data: { email: string; password: string; }) => Promise<void>;
  logout: () => void;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line: string;
  region: string;
  city: string;
  role: string;
  user_id: string;
  expires_in: number;
  created_at: string;
};

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