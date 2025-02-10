import React from 'react';
import Footer from './../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Offline } from "react-detect-offline";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Offline>
        <div className='network'>
          <i className='fas fa-wifi'></i> You are offline (surprise!)
        </div>
      </Offline>
      <Footer />
    </>
  );
}
