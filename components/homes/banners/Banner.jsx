import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <Image width={1530} height={600} src="/img/cta/2/bg.png" alt="image" />

        <div className="cta__image">
          <Image
            width={750}
            height={600}
            src="/img/ummed club/gallary/im1.png"
            alt="image"
          />
          <Image
            width="40"
            height="600"
            src="/img/cta/2/shape.svg"
            alt="image"
          />
          <Image
            width="390"
            height="35"
            src="/img/cta/2/shape2.svg"
            alt="image"
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-30  lh-13"
              >
                <span className="text-accent-1">About PlywoodWale </span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                <strong>
                  Kota’s First One-Stop Furniture Material Destination
                </strong>
                <br />
                PlywoodWale.com (Shri Krishna Sales &amp; Suppliers) is Kota’s
                leading source for premium plywood, laminates, hardware, and
                custom furniture solutions. We offer a complete furniture and
                interior ecosystem — combining the feel of a physical showroom
                with the convenience of a digital platform. Whether you're a
                homeowner, architect, or contractor, we bring you quality,
                variety, and reliability under one roof.
              </p>

              <div className="mt-30 md:mt-20">
                {/* <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -dark-1 bg-accent-1 text-white"
                > */}
                {/* <Link href="/tour-list-1">
                    Book Now
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link> */}
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
