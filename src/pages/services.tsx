import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { homeFaqs } from './components/home/conversion-content';

const button = 'inline-flex justify-center items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500';
const link = 'inline-flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300 hover:underline underline-offset-4';
const label = 'text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400 mb-3';
const heading = 'text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight';
export const servicesTitle = 'Software Development Services | Augwell Technologies';
export const servicesDescription = 'Custom software, web and mobile apps, e-commerce platforms, and business intelligence. Explore Augwell’s services and discuss your project scope.';

const offerings = [
  { id: 'custom-software', category: 'Custom software', title: 'Software that fits the way you work.', icon: 'heroicons:code-bracket', description: 'When spreadsheets, manual tasks, or disconnected tools are holding your team back, build an application around your actual workflow.', fit: 'Teams with a specific operational problem or a new product to build.', deliverables: ['Customer and staff portals', 'Web and mobile applications', 'Workflow automation and integrations'], scope: 'Your users, current workflow, required features, and the tools the application needs to connect to.', cta: 'Scope a software build', proof: 'Explore our products and projects', proofUrl: '/products',  },
  { id: 'commerce', category: 'E-commerce & retail', title: 'Connect the storefront to the business behind it.', icon: 'heroicons:shopping-bag', description: 'Create a buying experience that suits your customers and the tools your team needs to manage products, orders, and retail operations.', fit: 'Retailers, fashion brands, and businesses selling online or to other businesses.', deliverables: ['Online stores and B2B commerce', 'Product browsing and checkout', 'Retail tools, POS, and inventory'], scope: 'Your catalog, customers, checkout requirements, stock workflow, and existing systems.', cta: 'Scope a commerce platform', proof: 'See AfroLoom’s fashion commerce platform', proofUrl: 'https://www.afroloom.com',  },
  { id: 'business-intelligence', category: 'Data & business intelligence', title: 'A clearer view of what needs your attention.', icon: 'heroicons:chart-bar', description: 'Bring scattered business data into dashboards and reporting tools that help your team understand performance and make informed decisions.', fit: 'Teams that need useful reporting across sales, operations, or other business data.', deliverables: ['Reporting and analytics dashboards', 'Data visualization', 'Business intelligence tools'], scope: 'Your data sources, reporting questions, user access, and how often information needs to update.', cta: 'Scope a data dashboard', proof: 'Explore the fraud detection demo', proofUrl: 'https://fraud-detection-systemgit-cgdjvenzgp3flmpfvnyect.streamlit.app',  },
];

const supporting = [
  { title: 'Business websites', description: 'A clear, responsive website that helps visitors understand your offer and get in touch.', icon: 'heroicons:globe-alt' },
  { title: 'Search engine optimization', description: 'Improve site structure, content, and technical foundations so search engines can understand your business.', icon: 'heroicons:magnifying-glass' },
  { title: 'Branding & design', description: 'Visual identity and design assets that give your business a consistent presence.', icon: 'heroicons:paint-brush' },
  { title: '3D modeling & visualization', description: 'Product models and visualizations that help customers explore what you offer.', icon: 'heroicons:cube' },
];
const faqs = homeFaqs.filter((faq) => ['How much does a custom software project cost?', 'How long will my project take?', 'Do you provide support after launch?', 'Can I use an existing product instead of commissioning software?'].includes(faq.question));
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': 'https://www.augwelltech.com/services#page', url: 'https://www.augwelltech.com/services', name: servicesTitle, description: servicesDescription },
    ...offerings.map((offer) => ({ '@type': 'Service', '@id': `https://www.augwelltech.com/services#${offer.id}`, name: offer.category, description: offer.description, provider: { '@type': 'Organization', name: 'Augwell Technologies', url: 'https://www.augwelltech.com/' } })),
    ...supporting.map((service) => ({ '@type': 'Service', name: service.title, description: service.description, provider: { '@type': 'Organization', name: 'Augwell Technologies', url: 'https://www.augwelltech.com/' } })),
    { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ],
};

function inquiry(placement: string) {
  (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'services_inquiry_click', { placement });
}

export default function Services() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonical = existingCanonical ?? document.createElement('link');
    const previousCanonical = existingCanonical?.href;
    document.title = servicesTitle;
    if (description) description.content = servicesDescription;
    canonical.rel = 'canonical'; canonical.href = 'https://www.augwelltech.com/services';
    if (!existingCanonical) document.head.appendChild(canonical);
    return () => {
      document.title = previousTitle === servicesTitle ? 'Augwell Technologies | Custom Software, E-commerce & Business Apps' : previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription === servicesDescription ? 'Custom software, web and mobile apps, e-commerce platforms, and business intelligence tools from Augwell Technologies. Explore our work or book a discovery call.' : previousDescription;
      if (previousCanonical && previousCanonical !== 'https://www.augwelltech.com/services') canonical.href = previousCanonical;
      else canonical.remove();
    };
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
          <div><p className={label}>Our services</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white max-w-3xl">Build around your business.<br /><span className="text-blue-700 dark:text-blue-300">Move it forward.</span></h1><p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6 max-w-2xl">Custom software, commerce platforms, and business intelligence tools built around the people who use them. Start with the problem you want to solve.</p><div className="flex flex-col sm:flex-row gap-4 mt-8"><a href="https://calendly.com/infoaugwelltech" onClick={() => inquiry('hero_call')} className={button}>Book a discovery call <span aria-hidden="true">→</span></a><a href="#service-options" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800">Explore the services <span className="ml-2" aria-hidden="true">↓</span></a></div><p className="text-sm text-gray-500 dark:text-gray-400 mt-5">Response within 24 hours · <a href="mailto:info@augwelltech.com" className="hover:underline">info@augwelltech.com</a></p></div>
          <aside className="rounded-3xl bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 p-7 md:p-8 shadow-lg"><div className="h-12 w-12 rounded-2xl bg-blue-700 flex items-center justify-center mb-6"><Icon icon="heroicons:chat-bubble-left-right" className="text-white text-2xl" /></div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">You don’t need a finished brief.</h2><p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">Bring your idea, a frustrating workflow, or a goal. We’ll discuss what’s needed and shape a practical scope.</p><ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">{['Who will use it?', 'What needs to work better?', 'What budget or timeline do you have?'].map((item) => <li key={item} className="flex gap-3"><span className="text-blue-600" aria-hidden="true">→</span>{item}</li>)}</ul><Link to="/request-quotation" onClick={() => inquiry('brief')} className={`${link} mt-6`}>Send us a project brief <span aria-hidden="true">→</span></Link></aside>
        </div>
      </section>

      <section id="service-options" aria-labelledby="options-heading" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4"><p className={label}>Choose your starting point</p><h2 id="options-heading" className={heading}>Three ways to put software to work.</h2><nav aria-label="Service sections" className="flex flex-wrap gap-3 mt-7 mb-12">{offerings.map((offer) => <a key={offer.id} href={`#${offer.id}`} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300">{offer.category} <span aria-hidden="true">↓</span></a>)}</nav>
          <div className="space-y-8">{offerings.map((offer, index) => {
            return <article key={offer.id} id={offer.id} aria-labelledby={`${offer.id}-heading`} className={`rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-7 md:p-10 grid lg:grid-cols-2 gap-10 scroll-mt-24`}>
              <div><div className="flex items-center gap-3 mb-6"><span className="text-sm font-semibold text-blue-600 dark:text-blue-300">0{index + 1}</span><p className="text-xs uppercase tracking-widest font-semibold text-gray-600 dark:text-gray-300">{offer.category}</p><Icon icon={offer.icon} className="text-blue-600 dark:text-blue-300 text-2xl ml-auto" /></div><h3 id={`${offer.id}-heading`} className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">{offer.title}</h3><p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-5">{offer.description}</p><p className="text-sm text-gray-600 dark:text-gray-300 mt-5 leading-relaxed"><strong className="text-gray-900 dark:text-white">A good fit for: </strong>{offer.fit}</p><div className="mt-7">{offer.proofUrl.startsWith('/') ? <Link to={offer.proofUrl} className={`${link} text-sm`}>{offer.proof} <span aria-hidden="true">→</span></Link> : <a href={offer.proofUrl} target="_blank" rel="noopener noreferrer" className={`${link} text-sm`}>{offer.proof} <span aria-hidden="true">↗</span></a>}</div></div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 md:p-7 flex flex-col"><h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5">What we can build</h4><ul className="space-y-4 text-gray-800 dark:text-gray-200">{offer.deliverables.map((item) => <li key={item} className="flex gap-3"><span className="text-blue-600" aria-hidden="true">✓</span>{item}</li>)}</ul><div className="border-t border-gray-100 dark:border-gray-700 mt-6 pt-5 mb-7"><p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">What we’ll scope together</p><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{offer.scope}</p></div><Link to="/request-quotation" onClick={() => inquiry(offer.id)} className={`${button} mt-auto`}>{offer.cta} <span aria-hidden="true">→</span></Link></div>
            </article>;
          })}</div>
        </div>
      </section>

      <section aria-labelledby="supporting-heading" className="py-16 bg-gray-50 dark:bg-gray-800"><div className="container mx-auto px-4"><p className={label}>Also available</p><h2 id="supporting-heading" className={heading}>The details that complete the experience.</h2><p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl">Get help with your website, visibility, and visual identity alongside your software project or as a separate brief.</p><div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-9">{supporting.map((service) => <article key={service.title} className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 flex flex-col"><Icon icon={service.icon} className="text-blue-600 dark:text-blue-300 text-2xl mb-5" /><h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p><Link to="/request-quotation" aria-label={`Discuss ${service.title}`} onClick={() => inquiry(service.title)} className={`${link} mt-auto text-sm`}>Discuss a brief <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section aria-labelledby="delivery-heading" className="py-20"><div className="container mx-auto px-4"><p className={label}>How we work</p><h2 id="delivery-heading" className={heading}>Clear scope. Shared milestones. A useful result.</h2><ol className="grid md:grid-cols-3 gap-8 mt-10">{[{ title: 'Understand the problem', text: 'Discuss the users, workflow, and goals. Identify what a successful first version needs to do.' }, { title: 'Agree on the plan', text: 'Define features, integrations, budget, and delivery milestones before development starts.' }, { title: 'Build, review, and launch', text: 'Review the work against your requirements, then plan testing, handover, and any ongoing support.' }].map((step, index) => <li key={step.title} className="border-t-2 border-blue-200 dark:border-blue-800 pt-6"><p className="text-blue-600 dark:text-blue-300 text-3xl font-bold mb-4">0{index + 1}</p><h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3><p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.text}</p></li>)}</ol></div></section>

      <section aria-labelledby="services-faq-heading" className="py-16 bg-gray-50 dark:bg-gray-800"><div className="container mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-12"><div><p className={label}>Before you start</p><h2 id="services-faq-heading" className={heading}>Let’s clear up the practical details.</h2><p className="text-gray-600 dark:text-gray-300 mt-5">Questions about scope, cost, or support? Here’s where to begin.</p></div><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"><summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">{faq.question}</summary><p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p></details>)}</div></div></section>

      <section className="py-20 bg-[#142653]"><div className="container mx-auto px-4 text-center max-w-3xl"><p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-4">Your next step</p><h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Tell us what needs to work better.</h2><p className="mt-5 mb-8 text-blue-100 text-lg leading-relaxed">We’ll discuss the problem, the possibilities, and a practical way forward.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://calendly.com/infoaugwelltech" onClick={() => inquiry('closing_call')} className="rounded-full bg-white text-blue-900 px-7 py-3 font-semibold hover:bg-blue-50">Book a discovery call <span aria-hidden="true">→</span></a><Link to="/request-quotation" onClick={() => inquiry('closing_quote')} className="rounded-full border border-blue-300 text-white px-7 py-3 font-semibold hover:bg-white/10">Request a project quote</Link></div><p className="mt-6 text-blue-200 text-sm">Response within 24 hours · <a href="mailto:info@augwelltech.com" className="underline underline-offset-4">info@augwelltech.com</a></p></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
