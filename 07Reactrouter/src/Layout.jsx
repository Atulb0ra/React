import React from 'react'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {Outlet} from 'react-router-dom'
//outlet is used to use layout as a base jha bhi outlet hoga 
// wha dynamically hum changes kr skte hai jaise yha header same rahega 
// footer same rahega but footer and header k beech changes hote rahenge
// jaise hi hum home ya about ya contact mai jaayenge toh

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout
