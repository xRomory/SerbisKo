export const serviceCategories = [
  {
    id: "home-repair",
    name: "Home Repair",
    icon: "🛠️",
    popular: ["Plumbing", "Electrical", "Carpentry"],
  },
  {
    id: "cleaning",
    name: "Cleaning",
    icon: "🧹",
    popular: ["House Cleaning", "Laundry", "Car Wash"],
  },
  {
    id: "tutoring",
    name: "Tutoring",
    icon: "📚",
    popular: ["Science", "Mathematics", "English"],
  },
  {
    id: "helper",
    name: "Helper",
    icon: "👩‍⚕️",
    popular: ["Babysitter", "Nurses", "Caregiver"],
  },
  {
    id: "beauty-wellness",
    name: "Beauty & Wellness",
    icon: "💇‍♀️",
    popular: ["Haircut", "Massage", "Manicure"],
  },
  {
    id: "tech",
    name: "Tech Support",
    icon: "💻",
    popular: ["Computer Repair", "Phone Repair", "WiFi Setup"],
  },
]

export const featuredServices = [
  {
    id: "1",
    title: "Professional Plumbing Services",
    category: "Home Repair",
    description: "Experienced plumber for all your home repair needs",
    providerId: "p1",
    providerName: "Juan Dela Cruz",
    rating: 4.9,
    reviewCount: 124,
    price: {
      amount: 500,
      currency: "₱",
      unit: "hour"
    },
    location: "Quezon City",
    image: "https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: "2",
    title: "House Cleaning Service",
    category: "Cleaning",
    description: "Thorough home cleaning with eco-friendly products",
    providerId: "p2",
    providerName: "Maria Santos",
    rating: 4.7,
    reviewCount: 89,
    price: {
      amount: 1500,
      currency: "₱",
      unit: "session"
    },
    location: "Makati City",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "3",
    title: "Math Tutoring for All Levels",
    category: "Tutoring",
    description: "Personalized math lessons for elementary to college students",
    providerId: "p3",
    providerName: "Carlos Reyes",
    rating: 5.0,
    reviewCount: 56,
    price: {
      amount: 400,
      currency: "₱",
      unit: "hour"
    },
    location: "Manila",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80"
  }
];

// Sample testimonials
export const testimonials = [
  {
    id: "t1",
    name: "Michelle Lim",
    role: "Homeowner",
    text: "SerbisKo helped me find a reliable plumber within an hour! The service was excellent and affordable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: "t2",
    name: "Paolo Gomez",
    role: "Student",
    text: "I found an amazing math tutor through SerbisKo who helped me improve my grades. The platform made it so easy to connect.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: "t3",
    name: "Sofia Reyes",
    role: "Working Professional",
    text: "As a busy professional, SerbisKo has been a lifesaver for finding reliable house cleaning services. Highly recommended!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
  }
];