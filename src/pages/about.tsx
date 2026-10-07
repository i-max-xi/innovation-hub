import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import PageMetadata from '@/components/shared/page-metadata';

export const aboutTitle = 'About Augwell Technologies | Software in the UK & Ghana';
export const aboutDescription = 'Augwell Technologies builds custom software and develops its own products. Registered in the UK and Ghana, we focus on useful tools for real business needs.';
const heading = 'text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight';
const label = 'text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-4';
const textLink = 'inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold hover:underline underline-offset-4';
const schema = {
  '@context': 'https://schema.org', '@type': 'AboutPage',
  '@id': 'https://www.augwelltech.com/about-us#page',
  name: aboutTitle, description: aboutDescription, url: 'https://www.augwelltech.com/about-us',
  mainEntity: {
    '@type': 'Organization', '@id': 'https://www.augwelltech.com/#organization',
    name: 'Augwell Technologies', url: 'https://www.augwelltech.com/',
    logo: 'https://www.augwelltech.com/icons/augwell_logo_icon.png',
    email: 'info@augwelltech.com',
    description: 'Augwell Technologies is registered in the UK and Ghana. We build custom software and develop in-house software products.',
  },
};
const principles = [
  { title: 'Start with the problem', icon: 'heroicons:magnifying-glass', description: 'Understand who will use the software, what they need, and which part of the workflow should work better.' },
  { title: 'Make the scope clear', icon: 'heroicons:clipboard-document-list', description: 'Discuss the features, integrations, budget, and milestones so the project has a shared direction.' },
  { title: 'Review against real needs', icon: 'heroicons:check-circle', description: 'Keep the build tied to the agreed requirements and review how the solution supports its users.' },
  { title: 'Plan for life after launch', icon: 'heroicons:wrench-screwdriver', description: 'Discuss handover, maintenance, and support as part of the project, with the level of support agreed together.' },
];

export default function AboutUs() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <PageMetadata title={aboutTitle} description={aboutDescription} path="/about-us" />
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-16">
          <div><p className={label}>About Augwell</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Useful software.<br />Built around real needs.</h1><p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">Augwell Technologies builds custom software and websites for businesses and organizations, and develops its own products. We focus on tools that help people work, buy, and make decisions more easily.</p><div className="flex flex-col sm:flex-row gap-4 mt-8"><Link to="/products" className="rounded-full bg-blue-700 text-white px-6 py-3 text-center font-semibold hover:bg-blue-800 transition-colors">See our work <span aria-hidden="true">→</span></Link><Link to="/contact" className="rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 px-6 py-3 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">Talk to us</Link></div></div>
          <aside className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-7 md:p-8 shadow-sm"><img src="/icons/augwell_logo.png" alt="Augwell Technologies" width="220" height="80" className="w-44 object-contain mb-7" /><h2 className="text-xl font-bold text-gray-900 dark:text-white">Built for business. Registered in two markets.</h2><p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">Augwell Technologies is registered in the United Kingdom and Ghana.</p><ul className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">{[{ name: 'United Kingdom', flag: '🇬🇧' }, { name: 'Ghana', flag: '🇬🇭' }].map((country) => <li key={country.name} className="flex justify-between items-center gap-3 text-sm"><span className="flex items-center gap-3 font-medium text-gray-900 dark:text-white"><span aria-hidden="true" className="text-2xl leading-none">{country.flag}</span>{country.name}</span><span className="rounded-full bg-blue-50 dark:bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-200">Registered</span></li>)}</ul></aside>
        </div>
      </section>

      <section aria-labelledby="purpose-heading" className="py-16 md:py-20"><div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-16"><div><p className={label}>Why we build</p><h2 id="purpose-heading" className={heading}>The technology should serve the business.</h2></div><div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-lg"><p>A process that takes too much manual effort. A buying experience that could be simpler. Business data that is hard to make sense of. These are the kinds of problems we build software to address.</p><p>Our work spans web and mobile applications, customer portals, e-commerce, and business intelligence. Alongside custom projects, we develop in-house products for different business needs.</p><p>Start with what you need to achieve. We’ll discuss the scope and the approach that fits.</p></div></div></section>

      <section aria-labelledby="work-heading" className="py-16 bg-gray-50 dark:bg-gray-950"><div className="container mx-auto px-4"><p className={label}>Custom builds &amp; SaaS</p><h2 id="work-heading" className={heading}>The software you need.<br />Two ways to get it.</h2><div className="grid md:grid-cols-2 gap-6 mt-9">{[
        { title: 'Built just for you', icon: 'heroicons:code-bracket', description: 'Tell us what you need. We design and build custom software for your business.', href: '/request-quotation', cta: 'Start a custom project' },
        { title: 'Ready to use today', icon: 'heroicons:squares-2x2', description: 'Choose one of our SaaS products, sign up, and start using it. We build and run the software.', href: '/products', cta: 'Explore SaaS products' },
      ].map((item) => <article key={item.title} className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-7 md:p-8 flex flex-col"><span className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-200 mb-6"><Icon icon={item.icon} className="text-2xl" /></span><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3><p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-7">{item.description}</p><Link to={item.href} className={`${textLink} mt-auto`}>{item.cta} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section aria-labelledby="principles-heading" className="py-16 md:py-20"><div className="container mx-auto px-4"><p className={label}>Working with Augwell</p><h2 id="principles-heading" className={heading}>Clear expectations from the first conversation.</h2><div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">{principles.map((principle) => <article key={principle.title} className="border-t-2 border-blue-200 dark:border-blue-800 pt-6"><Icon icon={principle.icon} className="text-2xl text-blue-700 dark:text-blue-300 mb-5" /><h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{principle.title}</h3><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{principle.description}</p></article>)}</div><div className="mt-10 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><p className="text-sm text-gray-600 dark:text-gray-300">Questions about pricing, timelines, or how to get started?</p><Link to="/faq" className={`${textLink} text-sm shrink-0`}>Read our FAQs <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="py-16 bg-[#142653]"><div className="container mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center"><div><h2 className="text-3xl font-bold leading-tight text-white">Let’s work on what matters to your business.</h2><p className="text-blue-100 leading-relaxed mt-4 max-w-xl">Bring your idea, your workflow, or the problem you need to solve. Let’s talk through a practical next step.</p></div><div><div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4"><a href="https://calendly.com/infoaugwelltech" className="rounded-full bg-white text-blue-900 text-center px-6 py-3 font-semibold hover:bg-blue-50">Book a discovery call</a><Link to="/request-quotation" className="rounded-full border border-blue-300 text-white text-center px-6 py-3 font-semibold hover:bg-white/10">Request a quotation</Link></div><p className="text-sm text-blue-200 mt-5">Response within 24 hours · <a href="mailto:info@augwelltech.com" className="underline underline-offset-4">info@augwelltech.com</a></p></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
