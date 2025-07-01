"use client";
import React from "react";
import { MdStore, MdDevices, MdVerified, MdLocalShipping, MdGroups } from "react-icons/md";

export default function FeaturesOne() {
  const features = [
    {
      icon: <MdStore size={40} color="#0d6efd" />,
      title: "Kota’s First One-Stop Destination",
      text: "For all your interior and furniture needs under one roof.",
    },
    {
      icon: <MdDevices size={40} color="#0d6efd" />,
      title: "Showroom + Online Convenience",
      text: "Enjoy a curated showroom experience and the ease of online shopping.",
    },
    {
      icon: <MdVerified size={40} color="#0d6efd" />,
      title: "Authorized Stockist",
      text: "We stock top Indian & international brands you can trust.",
    },
    {
      icon: <MdLocalShipping size={40} color="#0d6efd" />,
      title: "Robust Inventory & Quick Delivery",
      text: "Get what you need, when you need it, with our strong inventory and fast delivery.",
    },
    
  ];

  return (
    <section
      className="bg-gradient position-relative"
      style={{
        background: "linear-gradient(135deg, #fff8f2, #f1f5f9)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-40">
          <div className="col-auto text-center">
            <h2 data-aos="fade-up" className="text-36 fw-700 text-dark">
              Why Choose PlywoodWale?
            </h2>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {features.map((feature, i) => (
            <div
              className="col-12 col-sm-8 col-md-5 col-lg-3 d-flex justify-content-center"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div
                className="card shadow-lg border-4 text-center p-4 rounded-5 h-100"
                style={{
                  background: "#fff",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  minHeight: "270px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: "2rem",
                  paddingTop: "3rem"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(13,110,253,0.15)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(13,110,253,0.08)";
                }}
              >
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  {feature.icon}
                </div>
                <h5 className="fw-bold mb-2" style={{ color: "#000" }}>{feature.title}</h5>
                <p style={{ color: "#6c757d" }} className="mb-0">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
