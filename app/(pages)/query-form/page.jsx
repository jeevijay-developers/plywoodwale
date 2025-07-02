import QueryForm from "@/components/layout/components/queryform/QueryForm";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";

import React from "react";

export const metadata = {
  title: "Query Form ",
  description: "Plywoodwale",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        {/* <Locations /> */}
        <QueryForm />

        <FooterOne />
      </main>
    </>
  );
}
