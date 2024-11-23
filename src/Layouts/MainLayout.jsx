/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { ReactLenis, useLenis } from 'lenis/react'


const MainLayout = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </ReactLenis>
  );
};

export default MainLayout;
