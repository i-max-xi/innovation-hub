import type { ProductCardProps } from '@/pages/components/products/products-card';

// Links are supplied by Augwell. Missing public URLs must stay omitted.
export const portfolioProducts: ProductCardProps[] = [
  {
    title: 'Sellem', inHouse: true, category: 'Retail software',
    services: ['Website Development', 'Business Intelligence'],
    description: 'Shop management for retailers, bringing point of sale, inventory, sales history, and business analytics into one browser-based app.',
    link_to: 'https://www.sellem.app/',
    display1: { type: 'image', render: '/images/products/sellem.svg' },
  },
  {
    title: 'Fraud Detection (SaaS)', inHouse: true, category: 'Insurer fraud detection demo',
    services: ['Website Development', 'Business Intelligence'],
    description: 'An in-house software demo exploring fraud detection for insurers. Open the demo to explore the application.',
    link_to: 'https://fraud-detection-systemgit-cgdjvenzgp3flmpfvnyect.streamlit.app',
    display1: { type: 'image', render: '/images/products/fraud-detection.png' },
  },
  {
    title: 'AfroLoom', category: 'African fashion commerce',
    services: ['3D Modeling & Visualization', 'Website Development', 'E-commerce Solutions'],
    description: 'African fashion commerce with 3D product customization, giving shoppers a way to explore and personalize clothing.',
    link_to: 'https://www.afroloom.com',
    display1: { type: 'image', render: '/images/products/afroloom.jpg' },
    display2: { type: 'video', render: '/images/products/afroloom_video.mp4' },
  },
  {
    title: 'Sneakz Official', category: 'Clothing e-commerce',
    services: ['Website Development'],
    description: 'A clothing e-commerce website that lets customers browse apparel and buy online, with layouts for desktop and mobile.',
    link_to: 'https://www.sneaksofficial.com',
    display1: { type: 'image', render: '/images/products/sneakz-desktop.png' },
    display2: { type: 'image', render: '/images/products/sneakz-mobile.png' },
  },
  {
    title: 'Odura Hope Foundation', category: 'Nonprofit website',
    services: ['Website Development'],
    description: 'A website for a nonprofit supporting vulnerable children in Ghana through education, nutrition, and holistic support.',
    link_to: 'https://www.odurahopefoundation.org/',
    display1: { type: 'image', render: '/trusted/odura-hope-foundation.jpg' },
  },
  {
    title: 'Foundry Hub', category: 'B2B e-commerce',
    services: ['Search Engine Optimization (SEO)'],
    description: 'By improving Foundry Hub’s SEO, we increased its visibility on Google and boosted conversions by 60%. The before-and-after images show its B2B marketplace moving from second to first for “foundry hub,” with its brand logo appearing in the result. Better visibility helped more buyers discover the platform and become customers.',
    display1: { type: 'image', render: '/images/products/BEFORE.png', alt: 'Before SEO: Foundry Hub’s B2B marketplace in second position for the Google search “foundry hub,” without its brand logo.' },
    display2: { type: 'image', render: '/images/products/AFTER.png', alt: 'After SEO: Foundry Hub’s B2B marketplace in first position for the Google search “foundry hub,” with its brand logo displayed.' },
  },
];
