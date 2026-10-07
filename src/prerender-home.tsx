import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { NextUIProvider } from '@nextui-org/react';
import NavbarComponent from './components/shared/navbar';
import Footer from './components/shared/footer';
import Home from './pages/home';
import Services from './pages/services';
import FAQ from './pages/fag';
import Products from './pages/products';
import AboutUs from './pages/about';
export { productsTitle, productsDescription } from './pages/products';
export { aboutTitle, aboutDescription } from './pages/about';
export { faqTitle, faqDescription } from './pages/fag';
export { servicesTitle, servicesDescription } from './pages/services';

export function render(pathname = '/') {
  return renderToStaticMarkup(
    <StaticRouter location={pathname}>
      <NextUIProvider>
        <div className="bg-[#f8f8f8] dark:bg-[#1a1a1a] text-base font-roboto">
          <NavbarComponent />
          {pathname === '/services' ? <Services /> : pathname === '/faq' ? <FAQ /> : pathname === '/products' ? <Products /> : pathname === '/about-us' ? <AboutUs /> : <Home />}
          <Footer />
        </div>
      </NextUIProvider>
    </StaticRouter>
  );
}
