export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  client: string;
  duration: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  // Website Development Projects
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce platform with advanced features including real-time inventory management, multi-payment gateways, and AI-powered product recommendations.",
    image: "/images/products/afroloom.jpg",
    category: "Website Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "Responsive Design",
      "Real-time Inventory",
      "Multi-payment Gateways",
      "AI Recommendations",
      "Admin Dashboard",
      "Mobile Optimization"
    ],
    results: [
      { metric: "Conversion Rate", value: "+45%", description: "Increase in sales conversion" },
      { metric: "Page Load Speed", value: "1.2s", description: "Average page load time" },
      { metric: "Mobile Traffic", value: "+60%", description: "Increase in mobile users" }
    ],
    client: "TechStart Inc.",
    duration: "3 months",
    challenge: "Client needed a scalable e-commerce solution that could handle high traffic and provide seamless user experience across all devices.",
    solution: "Developed a custom platform using modern technologies with focus on performance optimization and user experience."
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    description: "Complete redesign of a corporate website with modern UI/UX, improved SEO, and integrated CMS for easy content management.",
    image: "/images/products/BEFORE.png",
    category: "Website Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful"],
    features: [
      "Modern UI/UX Design",
      "SEO Optimization",
      "CMS Integration",
      "Fast Loading",
      "Accessibility Compliant",
      "Analytics Integration"
    ],
    results: [
      { metric: "SEO Ranking", value: "+200%", description: "Improvement in search rankings" },
      { metric: "Bounce Rate", value: "-35%", description: "Reduction in bounce rate" },
      { metric: "User Engagement", value: "+80%", description: "Increase in time on site" }
    ],
    client: "Global Corp",
    duration: "2 months",
    challenge: "Outdated website with poor SEO performance and low user engagement needed complete overhaul.",
    solution: "Redesigned with modern technologies, implemented comprehensive SEO strategy, and integrated user-friendly CMS."
  },

  // Mobile App Development Projects
  {
    id: "fitness-app",
    title: "Fitness Tracking Mobile App",
    description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features for iOS and Android platforms.",
    image: "/images/products/AFTER.png",
    category: "Mobile App Development",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    features: [
      "Workout Tracking",
      "Nutrition Logging",
      "Social Features",
      "Progress Analytics",
      "Offline Mode",
      "Push Notifications"
    ],
    results: [
      { metric: "App Downloads", value: "50K+", description: "Total downloads" },
      { metric: "User Rating", value: "4.8/5", description: "Average app store rating" },
      { metric: "Retention Rate", value: "75%", description: "30-day user retention" }
    ],
    client: "FitLife Solutions",
    duration: "4 months",
    challenge: "Creating a cross-platform app that motivates users to maintain fitness routines with engaging features.",
    solution: "Developed using React Native for cross-platform compatibility with Firebase backend for real-time data sync."
  },
  {
    id: "delivery-app",
    title: "Food Delivery App",
    description: "A complete food delivery solution with real-time tracking, multiple payment options, and restaurant management system.",
    image: "/images/products/fraud-detection.png",
    category: "Mobile App Development",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "Google Maps API"],
    features: [
      "Real-time Tracking",
      "Multiple Payments",
      "Restaurant Management",
      "Order History",
      "Rating System",
      "Push Notifications"
    ],
    results: [
      { metric: "Order Volume", value: "10K+", description: "Monthly orders processed" },
      { metric: "Delivery Time", value: "25 min", description: "Average delivery time" },
      { metric: "Customer Satisfaction", value: "92%", description: "Customer satisfaction rate" }
    ],
    client: "QuickBite Delivery",
    duration: "5 months",
    challenge: "Building a scalable delivery platform that could handle high order volumes with real-time tracking.",
    solution: "Developed robust backend infrastructure with real-time tracking using Google Maps API and efficient order management system."
  },

  // E-commerce Solutions Projects
  {
    id: "fashion-store",
    title: "Fashion E-commerce Store",
    description: "A premium fashion e-commerce platform with virtual try-on features, size recommendations, and personalized shopping experience.",
    image: "/images/products/afroloom.jpg",
    category: "E-commerce Solutions",
    technologies: ["Shopify Plus", "React", "AR.js", "Machine Learning"],
    features: [
      "Virtual Try-On",
      "Size Recommendations",
      "Personalized Shopping",
      "Inventory Management",
      "Multi-currency Support",
      "Social Commerce"
    ],
    results: [
      { metric: "Sales Growth", value: "+120%", description: "Increase in online sales" },
      { metric: "Return Rate", value: "-40%", description: "Reduction in returns" },
      { metric: "Customer Lifetime Value", value: "+65%", description: "Increase in CLV" }
    ],
    client: "StyleHub Fashion",
    duration: "6 months",
    challenge: "Reducing return rates and improving customer experience in online fashion shopping.",
    solution: "Implemented virtual try-on technology and AI-powered size recommendations to enhance customer confidence in purchases."
  },

  // Business Intelligence Projects
  {
    id: "analytics-dashboard",
    title: "Business Intelligence Dashboard",
    description: "A comprehensive BI dashboard that transforms raw data into actionable insights with real-time analytics and predictive modeling.",
    image: "/images/products/fraud-detection.png",
    category: "Business Intelligence",
    technologies: ["Power BI", "Python", "SQL Server", "Machine Learning"],
    features: [
      "Real-time Analytics",
      "Predictive Modeling",
      "Custom Reports",
      "Data Visualization",
      "Automated Insights",
      "Mobile Access"
    ],
    results: [
      { metric: "Decision Speed", value: "+300%", description: "Faster decision making" },
      { metric: "Data Accuracy", value: "99.5%", description: "Data accuracy rate" },
      { metric: "Cost Savings", value: "$2M+", description: "Annual cost savings" }
    ],
    client: "DataCorp Analytics",
    duration: "4 months",
    challenge: "Transforming complex data into understandable insights for business decision making.",
    solution: "Created interactive dashboards with automated reporting and predictive analytics to enable data-driven decisions."
  },

  // 3D Modeling & Visualization Projects
  {
    id: "architectural-visualization",
    title: "Architectural 3D Visualization",
    description: "High-quality 3D architectural visualizations and virtual tours for real estate marketing with photorealistic rendering.",
    image: "/images/products/AFTER.png",
    category: "3D Modeling & Visualization",
    technologies: ["Blender", "3ds Max", "V-Ray", "Unreal Engine"],
    features: [
      "Photorealistic Rendering",
      "Virtual Tours",
      "Interactive Walkthroughs",
      "360° Views",
      "Animation",
      "VR Compatibility"
    ],
    results: [
      { metric: "Sales Conversion", value: "+85%", description: "Increase in property sales" },
      { metric: "Client Satisfaction", value: "98%", description: "Client satisfaction rate" },
      { metric: "Project Completion", value: "40% faster", description: "Faster project delivery" }
    ],
    client: "Prime Real Estate",
    duration: "3 months",
    challenge: "Creating compelling visual representations of properties to attract potential buyers.",
    solution: "Developed high-quality 3D visualizations and virtual tours that allow clients to experience properties before construction."
  },

  // SEO Projects
  {
    id: "seo-optimization",
    title: "Comprehensive SEO Campaign",
    description: "Complete SEO overhaul for a local business resulting in significant organic traffic growth and improved search rankings.",
    image: "/images/products/BEFORE.png",
    category: "Search Engine Optimization (SEO)",
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Local SEO"
    ],
    results: [
      { metric: "Organic Traffic", value: "+250%", description: "Increase in organic traffic" },
      { metric: "Keyword Rankings", value: "Top 3", description: "Average ranking position" },
      { metric: "Lead Generation", value: "+180%", description: "Increase in qualified leads" }
    ],
    client: "Local Business Hub",
    duration: "6 months",
    challenge: "Improving online visibility and organic traffic for a local business with limited digital presence.",
    solution: "Implemented comprehensive SEO strategy including technical optimization, content creation, and local SEO tactics."
  },

  // Branding & Design Projects
  {
    id: "brand-identity",
    title: "Complete Brand Identity Design",
    description: "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    image: "/images/products/afroloom.jpg",
    category: "Branding & Design",
    technologies: ["Adobe Creative Suite", "Figma", "Sketch"],
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography",
      "Marketing Materials",
      "Digital Assets"
    ],
    results: [
      { metric: "Brand Recognition", value: "+150%", description: "Increase in brand awareness" },
      { metric: "Customer Trust", value: "+90%", description: "Improvement in brand trust" },
      { metric: "Market Position", value: "Top 3", description: "Industry ranking" }
    ],
    client: "TechStart Innovations",
    duration: "2 months",
    challenge: "Creating a distinctive brand identity that stands out in a competitive tech market.",
    solution: "Developed a comprehensive brand identity that reflects innovation and trustworthiness with consistent application across all touchpoints."
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
