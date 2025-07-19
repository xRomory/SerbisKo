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
];

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
      unit: "hour",
    },
    location: "Quezon City",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
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
      unit: "session",
    },
    location: "Makati City",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
      unit: "hour",
    },
    location: "Manila",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80",
  },
];

// Sample testimonials
export const testimonials = [
  {
    id: "t1",
    name: "Michelle Lim",
    role: "Homeowner",
    text: "SerbisKo helped me find a reliable plumber within an hour! The service was excellent and affordable.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "t2",
    name: "Paolo Gomez",
    role: "Student",
    text: "I found an amazing math tutor through SerbisKo who helped me improve my grades. The platform made it so easy to connect.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "t3",
    name: "Sofia Reyes",
    role: "Working Professional",
    text: "As a busy professional, SerbisKo has been a lifesaver for finding reliable house cleaning services. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
  },
];

// Sample booking data
export const bookings = [
  {
    id: "b1",
    serviceId: "s1",
    serviceName: "Plumbing Repair",
    providerId: "p1",
    providerName: "Juan Dela Cruz",
    providerImage:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    date: "2023-07-25",
    time: "10:00 AM",
    status: "completed",
    price: 1500,
    currency: "₱",
    address: "123 Rizal Street, Makati City",
    rating: 4.8,
  },
  {
    id: "b2",
    serviceId: "s2",
    serviceName: "House Cleaning",
    providerId: "p2",
    providerName: "Maria Santos",
    providerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "2023-07-30",
    time: "9:00 AM",
    status: "upcoming",
    price: 2000,
    currency: "₱",
    address: "456 Bonifacio Avenue, Quezon City",
    rating: null,
  },
  {
    id: "b3",
    serviceId: "s3",
    serviceName: "Math Tutoring",
    providerId: "p3",
    providerName: "Carlos Reyes",
    providerImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "2023-07-18",
    time: "4:00 PM",
    status: "cancelled",
    price: 400,
    currency: "₱",
    address: "789 Mabini Street, Manila",
    rating: null,
  },
];

// Sample saved services
export const savedServices = [
  {
    id: "s1",
    title: "Professional Plumbing Services",
    providerId: "p1",
    providerName: "Juan Dela Cruz",
    rating: 4.9,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "s2",
    title: "Expert Electrical Repairs",
    providerId: "p4",
    providerName: "Antonio Reyes",
    rating: 4.7,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1621905252507-c93c6acec5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "s3",
    title: "Piano Lessons for All Ages",
    providerId: "p5",
    providerName: "Sofia Garcia",
    rating: 5.0,
    reviewCount: 56,
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

export const providersData = [
  {
    id: "1",
    name: "Maria Santos",
    title: "Professional House Cleaner",
    tagline: "Delivering spotless results with care and attention to detail",
    rating: 4.9,
    review_number: 132,
    completedJobs: 218,
    yearsOfExperience: 8,
    hourlyRate: "₱350",
    packageRates: [
      {
        name: "Basic Cleaning",
        price: "₱1,500",
        description: "3-hour standard cleaning for small apartments",
      },
      {
        name: "Deep Cleaning",
        price: "₱3,500",
        description: "6-hour thorough cleaning including hard-to-reach areas",
      },
      {
        name: "Move-in/Move-out",
        price: "₱5,000",
        description: "Comprehensive cleaning for property transitions",
      },
    ],
    location: "Quezon City",
    languages: ["Filipino", "English"],
    availability: "Available weekdays, 8am-5pm",
    about:
      "With over 8 years of professional cleaning experience, I specialize in providing thorough and reliable cleaning services for homes and apartments in the metro Manila area. I use eco-friendly cleaning products and pay special attention to details that matter most to you. My goal is to exceed your expectations and leave your space spotless and sanitized.",
    services: [
      "Deep Cleaning",
      "Regular Maintenance",
      "Disinfection",
      "Move-in/Move-out Cleaning",
    ],
    servicesDescription:
      "I offer comprehensive cleaning services tailored to your needs. From regular maintenance to deep cleaning and special occasions, I ensure your space is immaculate. I bring my own cleaning supplies and equipment, though I'm happy to use your preferred products if requested.",
    profileImage: "https://i.pravatar.cc/400?img=26",
    galleryImages: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    reviews: [
      {
        author: "Juana Reyes",
        rating: 5,
        date: "June 12, 2025",
        comment:
          "Maria did an excellent job cleaning our condo. She was thorough, efficient, and paid attention to all the small details. Will definitely book her again!",
      },
      {
        author: "Carlos Bautista",
        rating: 5,
        date: "May 28, 2025",
        comment:
          "Very professional and reliable. Maria arrived on time and cleaned our 3-bedroom house beautifully. She even organized areas I didn't expect her to touch. Highly recommended!",
      },
      {
        author: "Elena Cruz",
        rating: 4,
        date: "May 15, 2025",
        comment:
          "Good service overall. Did a great job with the bathrooms and kitchen. Could have spent a bit more time on the living room, but still satisfied with the results.",
      },
    ],
  },
];