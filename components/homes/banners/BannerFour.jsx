import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      {/* Background Image */}
      <div className="sectionBg relative">
        <Image
          src="/img/plywoodWale/TrustedPlywoodSupplier.jpg"
          width={1920}
          height={700}
          alt="image"
          className="img-ratio w-full h-[700px] object-cover"
        />
        {/* Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="container relative z-10">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-6xl md:text-4xl sm:text-2xl text-yellow-400 font-extrabold tracking-wide"
            >
              Trusted Plywood Supplier
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-gray-200 text-lg sm:text-sm mt-4 px-4 py-2 rounded-md"
            >
              <span className="font-bold text-white">
                {" "}
                We deliver premium-grade plywood engineered for strength,
                durability, and sustainability. From construction to custom
                interiors, trust us for quality products, competitive pricing,
                and dependable service.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
