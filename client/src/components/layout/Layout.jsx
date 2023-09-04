import React from 'react'
import Footer from "../footer/Footer";
import Header from "../header/Header"
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <div style={{backgroundColor: "var(--black)", overflow: "hidden"}}>
            <Header/>
            <Outlet/>   
        </div>
        <Footer/>
    </>
  )
}

export default Layout