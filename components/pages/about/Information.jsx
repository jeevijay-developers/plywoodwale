import React from "react";

export default function Information() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700">
              About Our Plywood Business: Quality & Trust Since Inception
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              With decades of experience, we are a leading supplier of premium
              plywood and wood products, serving furniture makers, architects, and
              builders across the region. Our commitment to quality ensures every
              sheet meets the highest standards for strength, finish, and
              sustainability.
              <br />
              <br />
              From innovative manufacturing processes to personalized customer
              service, we strive to deliver solutions that inspire creativity and
              reliability. Choose us for your next project and experience the
              difference that true craftsmanship and dedication can make.
            </p>
            {/* <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
