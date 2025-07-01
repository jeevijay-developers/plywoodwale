/*New code*/
"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    imageSrc: "/img/hero/7/ply1.png",
    subtitle:
      "Discover premium quality plywood for all your construction and interior needs.",
    title: "WELCOME TO PLYWOODWALE",
  },
  {
    id: 2,
    imageSrc: "/img/hero/7/ply6.png",
    subtitle:
      "Explore a wide range of plywood products, from commercial to marine grade, at the best prices.",
    title: "Extensive Product Range",
  },
  {
    id: 3,
    imageSrc: "/img/hero/7/ply2.png",
    subtitle:
      "Our plywood is trusted by builders and architects for its durability and strength.",
    title: "Quality You Can Trust",
  },
  {
    id: 4,
    imageSrc: "/img/hero/7/ply3.png",
    subtitle:
      "Get expert advice and support for your plywood selection and project requirements.",
    title: "Expert Guidance & Support",
  },
  {
    id: 5,
    imageSrc: "/img/hero/7/ply4.png",
    subtitle:
      "Join our community of satisfied customers and experience seamless plywood shopping.",
    title: "Customer Satisfaction Guaranteed",
  },
];

export default function Hero7() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero -type-7">
      {/* <div className="hero__shape"></div> */}

      <div className="hero__slider js-section-slider">
        <Swiper
          className="w-100"
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".js-sliderHero-prev",
            nextEl: ".js-sliderHero-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
        >
          {slides.map((elm, i) => (
            <SwiperSlide key={elm.id}>
              <div className="hero__bg image-half-overlay">
                <Image
                  width={1920}
                  height={960}
                  src={elm.imageSrc}
                  alt="background"
                />
              </div>

              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="hero__content text-center">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="hero__title text-white"
                      >
                        {elm.title.includes(",") ? (
                          <>
                            {elm.title.split(",")[0]},
                            <br className="md:d-none" />
                            {elm.title.split(",")[1]}
                          </>
                        ) : (
                          elm.title
                        )}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hero__subtitle text-white mb-20 md:mb-10"
                      >
                        {elm.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero__nav d-flex mt-40">
        <button className="button -outline-white rounded-full size-72 flex-center text-white js-sliderHero-prev">
          <i className="icon-arrow-left text-20"></i>
        </button>

        <button className="button -outline-white rounded-full size-72 flex-center text-white ml-10 js-sliderHero-next">
          <i className="icon-arrow-right text-20"></i>
        </button>
      </div>
    </section>
  );
}


