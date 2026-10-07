import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faqGroups } from '@/utils/data/faq.data';

export const faqTitle = 'Software Development FAQs | Augwell Technologies';
export const faqDescription = 'Answers about Augwell’s software services, in-house products, project costs, timelines, booking, and ongoing support.';
const textLink = 'font-semibold text-blue-700 dark:text-blue-300 hover:underline underline-offset-4';
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.augwelltech.com/faq#page',
  url: 'https://www.augwelltech.com/faq',
  name: faqTitle,
  mainEntity: faqGroups.flatMap((group) => group.items.map((faq) => ({
    '@type': 'Question', name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))),
};

export default function FAQ() {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = existingCanonical?.href;
    const canonical = existingCanonical ?? document.createElement('link');
    document.title = faqTitle;
    if (meta) meta.content = faqDescription;
    canonical.rel = 'canonical'; canonical.href = 'https://www.augwelltech.com/faq';
    if (!existingCanonical) document.head.appendChild(canonical);
    return () => {
      document.title = previousTitle === faqTitle ? 'Augwell Technologies | Custom Software, E-commerce & Business Apps' : previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription === faqDescription ? 'Custom software, web and mobile apps, e-commerce platforms, and business intelligence tools from Augwell Technologies. Explore our work or book a discovery call.' : previousDescription;
      if (previousCanonical && previousCanonical !== 'https://www.augwelltech.com/faq') canonical.href = previousCanonical;
      else canonical.remove();
    };
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-300 mb-4">Frequently asked questions</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">A little clarity.<br />A better next step.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mt-6">What we build, how projects work, and what to expect when you get in touch. Find the details you need to move forward.</p>
          <nav aria-label="FAQ topics" className="flex flex-wrap gap-3 mt-8">
            {faqGroups.map((group) => <a key={group.id} href={`#${group.id}`} className="rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">{group.title} <span className="ml-2" aria-hidden="true">↓</span></a>)}
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-[0.65fr_1.35fr] gap-10 lg:gap-16 items-start">
        <aside className="lg:sticky lg:top-28 rounded-3xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-7">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-300 mb-4">Let’s talk</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Have a question about your project?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4">Tell us what you’re trying to achieve. We can discuss your requirements and help you assess the next step.</p>
          <Link to="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-blue-700 text-white font-semibold px-5 py-3 mt-6 hover:bg-blue-800 transition-colors">Ask us a question <span aria-hidden="true">→</span></Link>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">Response within 24 hours</p>
          <div className="mt-7 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4 text-sm">
            <p><Link to="/services" className={textLink}>Explore our services <span aria-hidden="true">→</span></Link></p>
            <p><Link to="/products" className={textLink}>See products &amp; projects <span aria-hidden="true">→</span></Link></p>
            <p><a href="mailto:info@augwelltech.com" className={`${textLink} break-words`}>info@augwelltech.com</a></p>
          </div>
        </aside>

        <div className="space-y-12">
          {faqGroups.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-24">
              <h2 id={`${group.id}-heading`} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{group.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-5">{group.description}</p>
              <div className="space-y-3">
                {group.items.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 open:border-blue-300 dark:open:border-blue-700 transition-colors">
                    <summary className="flex justify-between items-start gap-4 cursor-pointer list-none p-5 md:p-6 text-gray-900 dark:text-white font-semibold [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:rounded-2xl">
                      <span>{faq.question}</span><span aria-hidden="true" className="relative w-5 h-5 shrink-0 text-blue-600 mt-0.5"><span className="absolute top-2.5 left-0.5 h-0.5 w-4 bg-current" /><span className="absolute top-1 left-2 h-4 w-0.5 bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="px-5 md:px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="py-16 bg-[#142653]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl"><h2 className="text-3xl font-bold text-white leading-tight">Ready to talk through your idea?</h2><p className="text-blue-100 mt-4 leading-relaxed">Bring the problem, a rough brief, or a goal. Let’s discuss what a useful solution could look like.</p></div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0"><a href="https://calendly.com/infoaugwelltech" className="rounded-full bg-white text-blue-900 px-6 py-3 text-center font-semibold hover:bg-blue-50">Book a discovery call <span aria-hidden="true">→</span></a><Link to="/request-quotation" className="rounded-full border border-blue-300 text-white px-6 py-3 text-center font-semibold hover:bg-white/10">Request a quotation</Link></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
