"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function MissionVision() {
  useEffect(() => {
    // Add responsive styles for mobile
    const addResponsiveStyles = () => {
      const existingStyle = document.getElementById('mission-vision-styles');
      if (existingStyle) return;

      const style = document.createElement('style');
      style.id = 'mission-vision-styles';
      style.innerHTML = `
        @media (max-width: 767.98px) {
          .mission-vision-card {
            border-radius: 1.2rem !important;
            margin-left: 0.1rem !important;
            margin-right: 0.1rem !important;
          }
          .mission-vision-card .card-body {
            padding: 2rem !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    addResponsiveStyles();

    return () => {
      const style = document.getElementById('mission-vision-styles');
      if (style) {
        style.remove();
      }
    };
  }, []);

  return (
    <section
      className="py-15 py-md-10"
      style={{
        background: "linear-gradient(135deg, #e3f0ff 0%, #f0f7fa 100%)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8 py-10">
            <h2 className="fw-bold text-dark mb-3">Vision & Mission</h2>
            <p className="text-muted">
              We are driven by purpose, powered by innovation.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Vision Card */}
          <div className="col-md-6 mb-4 d-flex h-100">
            <div
              className="card border-0 mission-vision-card h-100 w-100"
              style={{
                background: "#fff",
                border: "1px solid #d0e3ff",
                borderRadius: "2rem",
                boxShadow: "0 4px 24px rgba(44, 62, 80, 0.10)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(44, 62, 80, 0.18)";
                e.currentTarget.style.borderColor = "#5b76f7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(44, 62, 80, 0.10)";
                e.currentTarget.style.borderColor = "#d0e3ff";
              }}
            >
              <div className="card-body p-5 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "linear-gradient(135deg, #5b76f7, #678dfd)",
                      boxShadow: "0 4px 16px rgba(91, 118, 247, 0.15)",
                    }}
                  >
                    <Image
                      src="/img/icons/6/vision.png"
                      alt="Vision Icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="mb-0 fw-bold text-dark">Vision</h3>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-0">
                    To modernize the way furniture materials are sourced and
                    selected, by integrating innovation, aesthetics, and
                    functionality in every customer interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6 mb-4 d-flex h-100">
            <div
              className="card border-0 mission-vision-card h-100 w-100"
              style={{
                background: "#fff",
                border: "1px solid #b2f0e6",
                borderRadius: "2rem",
                boxShadow: "0 4px 24px rgba(44, 62, 80, 0.10)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(44, 62, 80, 0.18)";
                e.currentTarget.style.borderColor = "#5b76f7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(44, 62, 80, 0.10)";
                e.currentTarget.style.borderColor = "#b2f0e6";
              }}
            >
              <div className="card-body p-5 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "linear-gradient(135deg, #00b4b0, #00d4c6)",
                      boxShadow: "0 4px 16px rgba(0, 180, 176, 0.15)",
                    }}
                  >
                    <Image
                      src="/img/icons/6/mission.png"
                      alt="Mission Icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="mb-0 fw-bold text-dark">Mission</h3>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-0">
                    To be the most trusted provider of quality furniture
                    materials and interior solutions in Kota and beyond, through
                    unmatched product range, customer service, and industry
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
