import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero from "@/components/tours/Hero";
import TourList5 from "@/components/tours/TourList5";
import React from "react";

export const metadata = {
  title: "Tour-list-6 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page({ params }) {
  const { title, id } = params;
  const categoryId = Number(id);
  return (
    <>
      <main>
        <Header1 />
        <Hero title={title} />
        <TourList5 categoryId={categoryId} />
        <FooterOne />
      </main>
    </>
  );
}
