import OurProductsPage from '@/components/ourProducts/OurProducts'
import React from 'react'
import Hero from "@/components/tours/Hero";
import Header1 from '@/components/layout/header/Header1';
import FooterOne from '@/components/layout/footers/FooterOne';


const page = () => {
  return (
          <main>
            <Header1 />
            <OurProductsPage />
            <FooterOne />
          </main>
  )
}

export default page