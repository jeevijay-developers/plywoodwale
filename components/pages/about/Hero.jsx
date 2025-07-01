import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <Image width={1800} height={500} src="/img/hero/7/ply3.png" alt="Plywood Business Hero" />
        <Image
          width={1800}
          height={40}
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="Decorative Shape"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">About Us</h1>
              <p className="pageHeader__text">
                Discover our legacy in the plywood industry—delivering quality, durability, and innovation for all your furniture and construction needs. Learn more about our journey and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
