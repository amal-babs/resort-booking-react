import React, { lazy, Suspense } from 'react'
const Header = lazy(() => import('../components/Header'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const Services = lazy(() => import('../components/Services'));
const Gallery = lazy(() => import('../components/Gallery'));
const Bookingsection = lazy(() => import('../components/Bookingsection'));
const Footer = lazy(() => import('../components/Footer'));

const Layout = () => {
    return (
        <div>
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100 vw-100" > </div>}>
                <Header />
                <HeroSection />
                <Services />
                <Gallery />
                <Bookingsection />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Layout
