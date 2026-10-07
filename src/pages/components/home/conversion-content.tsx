import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { homeFaqs } from '@/utils/data/faq.data';
import { portfolioProducts } from '@/utils/data/products.data';
export { homeFaqs } from '@/utils/data/faq.data';

function trackInquiry(method: 'quote' | 'call' | 'email', placement: string) {
  const analytics = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  analytics?.('event', 'homepage_inquiry_click', { inquiry_method: method, placement });
}

const primary = 'inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500';
const textLink = 'inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold hover:underline underline-offset-4';
const heading = 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight';
const eyebrow = 'text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3';

export const homeServices = [
  {
    title: 'Custom software & business apps',
    category: 'Custom software',
    headline: ['Less admin.', 'More progress.'],
    icon: 'heroicons:code-bracket',
    description: 'Replace repetitive tasks and disconnected tools with software that works the way your team does.',
    examples: ['Customer & staff portals', 'Web & mobile applications', 'Connected tools & workflows'],
    cta: 'Plan my software build',
    tone: 'blue',
  },
  {
    title: 'E-commerce & retail platforms',
    category: 'E-commerce & retail',
    headline: ['Better shopping.', 'Simpler operations.'],
    icon: 'heroicons:shopping-bag',
    description: 'Connect the customer experience to the tools behind it, from browsing and checkout to stock and sales.',
    examples: ['Online stores & B2B commerce', 'Product browsing & checkout', 'Retail POS & inventory'],
    cta: 'Plan my commerce platform',
    tone: 'violet',
  },
  {
    title: 'Data & business intelligence',
    category: 'Data & analytics',
    headline: ['See what matters.', 'Decide what’s next.'],
    icon: 'heroicons:chart-bar',
    description: 'Turn scattered business data into a clear view of performance, so you know where to focus.',
    examples: ['Reporting & analytics dashboards', 'Clear data visualizations', 'Business intelligence tools'],
    cta: 'Plan my data dashboard',
    tone: 'cyan',
  },
];

export const homeProducts = portfolioProducts
  .filter((product) => Boolean(product.link_to))
  .map((product) => ({
    name: product.title,
    label: product.inHouse ? (product.category?.includes('demo') ? 'In-house demo' : 'In-house product') : product.category ?? 'Project',
    description: product.description,
    image: product.display1.render,
    url: product.link_to!,
  }));



export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://www.augwelltech.com/#organization', name: 'Augwell Technologies', url: 'https://www.augwelltech.com/', logo: 'https://www.augwelltech.com/icons/augwell_logo_icon.png', email: 'info@augwelltech.com', description: 'Custom software development, e-commerce platforms, business intelligence tools, and in-house software products.', contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', email: 'info@augwelltech.com' } },
    { '@type': 'WebPage', '@id': 'https://www.augwelltech.com/#webpage', url: 'https://www.augwelltech.com/', name: 'Augwell Technologies | Custom Software, E-commerce & Business Apps', about: { '@id': 'https://www.augwelltech.com/#organization' } },
    ...homeServices.map((service) => ({ '@type': 'Service', name: service.title, description: service.description, provider: { '@id': 'https://www.augwelltech.com/#organization' } })),
    { '@type': 'ItemList', name: 'Augwell products and projects', itemListElement: homeProducts.map((product, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: product.name, description: product.description, url: product.url } })) },
    { '@type': 'FAQPage', mainEntity: homeFaqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ],
};

export function ServicesContent() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <p className={eyebrow}>Our services</p>
          <h2 id="services-heading" className={heading}>What would make your business work better?</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-5 text-lg leading-relaxed">Less manual work. A better buying experience. A clearer view of your data. Choose the problem you want to solve, and let’s build around it.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {homeServices.map((service, index) => {
            const tone = {
              blue: { icon: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200', accent: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
              violet: { icon: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-200', accent: 'text-violet-700 dark:text-violet-300', dot: 'bg-violet-500' },
              cyan: { icon: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200', accent: 'text-cyan-700 dark:text-cyan-300', dot: 'bg-cyan-500' },
            }[service.tone as 'blue' | 'violet' | 'cyan'];

            return (
              <article key={service.title} aria-label={service.title} className={`group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-[box-shadow,border-color] duration-300`}>
                <div className="p-7 xl:p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-8">
                    <p className={`text-xs font-semibold tracking-wider uppercase ${tone.accent}`}>{service.category}</p>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${tone.icon}`}><Icon icon={service.icon} className="text-2xl" aria-hidden="true" /></div>
                  </div>
                  <h3 className="text-[1.75rem] xl:text-[1.9rem] leading-[1.2] tracking-tight font-bold text-gray-900 dark:text-white mb-4">
                    {service.headline.map((line) => <span key={line} className="block">{line}</span>)}
                  </h3>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-7 lg:min-h-[100px] xl:min-h-[75px]">{service.description}</p>
                  <div className="mt-auto">
                    <p className="text-[11px] uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400 mb-4">What we can build</p>
                    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      {service.examples.map((example) => <li key={example} className="flex items-center gap-3"><span className={`w-1.5 h-1.5 rounded-full shrink-0 ${tone.dot}`} aria-hidden="true" />{example}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="px-7 xl:px-8 pb-7 xl:pb-8 pt-2">
                  <Link to="/request-quotation" onClick={() => trackInquiry('quote', service.title)} className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${index === 0 ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700'}`}>
                    {service.cta}<Icon icon="heroicons:arrow-right" className="text-lg shrink-0 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div><h3 className="font-semibold text-gray-900 dark:text-white mb-2">Also available</h3><p className="text-sm text-gray-600 dark:text-gray-400">Business websites · SEO · Branding &amp; design · 3D modeling &amp; visualization</p></div>
          <Link to="/services" className={`${textLink} text-sm shrink-0`}>Explore all services <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}

export default function ConversionContent() {
  return (
    <>
      <section id="projects" aria-labelledby="projects-heading" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl"><p className={eyebrow}>See the work</p><h2 id="projects-heading" className={heading}>Real products. Open them. Try them.</h2><p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">Explore client projects and products we’ve built in-house. Each one shows a different problem software can solve.</p></div>
            <Link to="/products" className={`${textLink} shrink-0`}>View all projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {homeProducts.map((product) => (
              <article key={product.name} className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700"><img src={product.image} alt={`${product.name} product preview`} width="1200" height="630" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                <div className="p-7 flex flex-col flex-1"><p className="text-xs text-blue-700 dark:text-blue-300 font-semibold mb-3">{product.label}</p><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{product.name}</h3><p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{product.description}</p><a href={product.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${product.name} (opens in a new tab)`} className={`${textLink} mt-auto`}>Visit {product.name} <span aria-hidden="true">↗</span></a></div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><p className="text-gray-700 dark:text-gray-300 mb-4">Have a different problem to solve?</p><Link to="/request-quotation" onClick={() => trackInquiry('quote', 'projects')} className={primary}>Tell us what you need <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <section aria-labelledby="process-heading" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10"><p className={eyebrow}>From brief to launch</p><h2 id="process-heading" className={heading}>Know what happens next.</h2><p className="mt-5 text-gray-600 dark:text-gray-400 text-lg">A good build starts with a clear problem, a focused scope, and a shared plan.</p></div>
          <ol className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tell us where you’re stuck', description: 'Share your workflow, users, and goals. A rough idea is enough to start the conversation.', detail: 'Start with a discovery call or project brief.' },
              { title: 'Define the right first version', description: 'Discuss the features, integrations, budget, and timeline before committing to a build.', detail: 'Agree on scope and delivery milestones.' },
              { title: 'Build, review, and launch', description: 'Review the solution against your requirements and plan the handover, launch, and ongoing support.', detail: 'Keep the work tied to your business needs.' },
            ].map((step, index) => <li key={step.title} className="border-t-2 border-blue-200 dark:border-blue-800 pt-6"><span className="text-blue-600 dark:text-blue-400 font-bold text-3xl">0{index + 1}</span><h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-3">{step.title}</h3><p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p><p className="text-sm font-medium text-blue-700 dark:text-blue-300 mt-4">{step.detail}</p></li>)}
          </ol>
        </div>
      </section>
      <section aria-labelledby="faq-heading" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div><p className={eyebrow}>Before you get in touch</p><h2 id="faq-heading" className={heading}>Your questions, answered.</h2><p className="text-gray-600 dark:text-gray-400 mt-5 mb-6 leading-relaxed">Deciding what to build is a big step. Start with the details that matter.</p><a href="mailto:info@augwelltech.com" onClick={() => trackInquiry('email', 'faq')} className={textLink}>Ask us a question <span aria-hidden="true">→</span></a></div>
          <div className="space-y-4">{homeFaqs.map((faq) => <details key={faq.question} className="group rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6"><summary className="cursor-pointer font-semibold text-gray-900 dark:text-white focus-visible:outline-blue-500">{faq.question}</summary><p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <section aria-labelledby="contact-heading" className="py-20 bg-[#142653]">
        <div className="container mx-auto px-4 max-w-3xl text-center"><p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">Let’s build something useful</p><h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white leading-tight">Bring the problem.<br />We’ll help you shape the solution.</h2><p className="text-blue-100 text-lg mt-6 mb-8 leading-relaxed">Tell us what’s slowing your team down or what your customers need. Let’s discuss the scope and the next step.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://calendly.com/infoaugwelltech" onClick={() => trackInquiry('call', 'closing_cta')} className="inline-flex justify-center rounded-full bg-white text-blue-900 px-7 py-3 font-semibold hover:bg-blue-50 transition-colors">Book a discovery call <span className="ml-2" aria-hidden="true">→</span></a><Link to="/request-quotation" onClick={() => trackInquiry('quote', 'closing_cta')} className="inline-flex justify-center rounded-full border border-blue-300 text-white px-7 py-3 font-semibold hover:bg-white/10 transition-colors">Request a project quote</Link></div><p className="text-blue-200 text-sm mt-6">Response within 24 hours · <a href="mailto:info@augwelltech.com" className="underline underline-offset-4">info@augwelltech.com</a></p></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c') }} />
    </>
  );
}
