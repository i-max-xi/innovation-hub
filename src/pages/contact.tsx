import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Support from './support';

const Contact = () => (
  <main className="bg-gray-50 dark:bg-gray-950 py-12 md:py-20">
    <div className="container mx-auto px-4 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-4">Contact Augwell</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Let’s talk about<br className="hidden md:block" /> what’s next.</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">Have a project in mind, a question about our services, or need help with something? Tell us what you need.</p>
        <div className="mt-8 flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"><Icon icon="heroicons:clock" className="text-lg" /></span>Response within 24 hours</div>
        <div className="mt-9 space-y-4">
          <a href="mailto:info@augwelltech.com" className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 hover:border-blue-400 transition-colors"><span className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-200 shrink-0"><Icon icon="heroicons:envelope" className="text-xl" /></span><div className="min-w-0"><p className="text-sm font-semibold text-gray-900 dark:text-white">Prefer email?</p><p className="text-sm text-blue-700 dark:text-blue-300 mt-1 break-words">info@augwelltech.com</p></div><span aria-hidden="true" className="ml-auto text-blue-700 dark:text-blue-300">↗</span></a>
          <a href="https://calendly.com/infoaugwelltech" className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 hover:border-blue-400 transition-colors"><span className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-200 shrink-0"><Icon icon="heroicons:calendar-days" className="text-xl" /></span><div><p className="text-sm font-semibold text-gray-900 dark:text-white">Prefer a conversation?</p><p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Book a discovery call</p></div><span aria-hidden="true" className="ml-auto text-blue-700 dark:text-blue-300">→</span></a>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6"><p className="text-sm font-semibold text-gray-900 dark:text-white">Ready to scope a build?</p><p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-3">Send your requirements through our project brief.</p><Link to="/request-quotation" className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline">Request a quotation <span aria-hidden="true">→</span></Link></div>
      </div>
      <Support embedded />
    </div>
  </main>
);

export default Contact;
