import LazyPageWrapper from './lazy.page.wrapper';
import Footer from '@/components/shared/footer';
import NavbarComponent from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <NavbarComponent />
      <div className=" bg-[#f8f8f8] dark:bg-[#1a1a1a]">
        <LazyPageWrapper component={<Outlet />} />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
