interface DisplayContent {
  type: 'image' | 'video';
  render: string;
}

type ServicesType =
  | 'Branding & Design'
  | 'Search Engine Optimization (SEO)'
  | 'Mobile App Development'
  | 'E-commerce Solutions'
  | '3D Modeling & Visualization'
  | 'Website Development'
  | 'Business Intelligence';

export interface ProductCardProps {
  title: string;
  inHouse?: boolean;
  category?: string;
  services: ServicesType[];
  description: string;
  link_to?: string;
  display1: DisplayContent;
  display2?: DisplayContent;
}

function ProductMedia({ content, title }: { content: DisplayContent; title: string }) {
  return content.type === 'video' ? (
    <video src={content.render} controls muted loop playsInline preload="none" aria-label={`${title} product demonstration`} className="w-full h-full object-contain" />
  ) : (
    <img src={content.render} alt={title} loading="lazy" decoding="async" width="1200" height="675" className="w-full h-full object-contain" />
  );
}

export default function ProductCard({ title, category, inHouse, services, description, display1, display2, link_to }: ProductCardProps) {
  return (
    <article className="h-full flex flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className={`grid ${display2 ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-2 p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700`}>
        <div className="aspect-video rounded-xl overflow-hidden bg-white dark:bg-gray-900"><ProductMedia content={display1} title={`${title} product preview`} /></div>
        {display2 && <div className="aspect-video rounded-xl overflow-hidden bg-white dark:bg-gray-900"><ProductMedia content={display2} title={`${title} additional view`} /></div>}
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {inHouse && <span className="text-xs font-semibold text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-900 px-3 py-1 rounded-full">In-house product</span>}
          {category && <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{category}</span>}
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{description}</p>
        <ul aria-label={`${title} services`} className="flex flex-wrap gap-2 mb-7">
          {services.map((service) => <li key={service} className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1.5 text-xs text-gray-600 dark:text-gray-300">{service}</li>)}
        </ul>
        {link_to ? (
          <a href={link_to} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} (opens in a new tab)`} className="mt-auto flex justify-between items-center gap-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">Visit site <span aria-hidden="true">↗</span></a>
        ) : <p className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">No public website link available.</p>}
      </div>
    </article>
  );
}
