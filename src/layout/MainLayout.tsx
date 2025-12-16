import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingMenuButton from '../components/FloatingMenuButton';


const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black animated-dark-bg">
      {/* Header */}
      {/* <Header /> */}

      {/* Main content */}
      <main className="flex-1 relative z-10 pb-24 lg:pb-16">
        {/* Outlet renders nested routes */}
        <Outlet />
      </main>

      {/* Floating menu button */}
      <FloatingMenuButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
