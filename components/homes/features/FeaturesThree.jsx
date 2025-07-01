import { features } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesThree() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 data-aos="fade-left" data-aos-delay="" className="text-30">
              Our Clients
            </h2>
            <div
              className="d-flex justify-content-center align-items-center flex-wrap mb-4"
              style={{ gap: 24, marginTop: 24 }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  style={{
                    width: 110,
                    height: 110,
                    background: "#fff",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    border: "1px solid #e5e5e5",
                    padding: 12,
                  }}
                >
                  <Image
                    src={`/img/ourClients/00${num}.jpg`}
                    alt={`Client ${num}`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      width: 100,
                      height: 100,
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280"
        >
          {features.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 text-center px-20 py-60 rounded-12 hover-shadow-1">
                <div className="featureIcon__icon">
                  <Image width="60" height="60" src={elm.iconSrc} alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  {elm.title}
                </h3>
                <p className="featureIcon__text mt-10">{elm.text}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
