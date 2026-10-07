import { Link } from 'react-router-dom';
import PageMetadata from '@/components/shared/page-metadata';
import { portfolioProducts } from '@/utils/data/products.data';
import ProductCard from './components/products/products-card';

export const productsTitle = 'Products & Projects | Augwell Technologies';
export const productsDescription = 'Explore Augwell’s in-house software products and website projects, including retail tools, an insurer fraud detection demo, commerce, and a nonprofit foundation.';
const schema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  '@id': 'https://www.augwelltech.com/products#page',
  name: productsTitle, description: productsDescription, url: 'https://www.augwelltech.com/products',
  mainEntity: { '@type': 'ItemList', itemListElement: portfolioProducts.map((product, index) => ({
    '@type': 'ListItem', position: index + 1,
    item: { '@type': 'CreativeWork', name: product.title, description: product.description, ...(product.link_to ? { url: product.link_to } : {}) },
  })) },
};
const groups = [
  { id: 'in-house', title: 'Products we build and run', label: 'In-house products', description: 'Our own software products address different business needs. Explore the retail platform and insurer demo below.', products: portfolioProducts.filter((p) => p.inHouse) },
  { id: 'commerce-projects', title: 'Websites built around real needs', label: 'Selected projects', description: 'From fashion customization and B2B commerce to a nonprofit foundation, explore websites built for different audiences.', products: portfolioProducts.filter((p) => !p.inHouse) },
];

export default function Products() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <PageMetadata title={productsTitle} description={productsDescription} path="/products" />
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-300 mb-4">Products &amp; projects</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">See what we’ve built.<br />Explore what it can do.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mt-6">In-house software and website projects, each built around a different need. Explore the previews and open the available sites to see the work for yourself.</p>
          <nav aria-label="Portfolio sections" className="flex flex-wrap gap-3 mt-8">{groups.map((group) => <a key={group.id} href={`#${group.id}`} className="rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300">{group.label} <span className="ml-2" aria-hidden="true">↓</span></a>)}</nav>
        </div>
      </section>
      {groups.map((group) => (
        <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="py-16 md:py-20 scroll-mt-24 even:bg-gray-50 dark:even:bg-gray-950">
          <div className="container mx-auto px-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-300 mb-3">{group.label}</p>
            <h2 id={`${group.id}-heading`} className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{group.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-5 mb-9 leading-relaxed">{group.description}</p>
            <div className="grid md:grid-cols-2 gap-6">{group.products.map((product) => <ProductCard key={product.title} {...product} />)}</div>
          </div>
        </section>
      ))}
      <section className="py-16 bg-[#142653]"><div className="container mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center"><div><h2 className="text-3xl font-bold text-white leading-tight">Have a different problem to solve?</h2><p className="text-blue-100 mt-4 leading-relaxed max-w-xl">A ready-to-use product may fit your needs. If your workflow calls for something different, let’s discuss a custom build.</p></div><div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4"><Link to="/request-quotation" className="text-center bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50">Scope a project <span aria-hidden="true">→</span></Link><Link to="/services" className="text-center border border-blue-300 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10">Explore services</Link></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
