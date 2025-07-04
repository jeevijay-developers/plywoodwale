import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { allTour } from "@/data/tours";
import facilities from "@/data/facilities";

import React from "react";

export const metadata = {
  title: "Ummed club kota",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page({ params }) {
  const {title, id} = params;
  const productId = Number(id);
  // console.log("Params:", params);

  return (
    <>
      <main>
        <Header1 />
        {/* <PageHeader /> */}

        <SingleOne productId={productId} title={title} />
        {/* <TourSlider /> */}
        <FooterOne />
      </main>
    </>
  );
}
