import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function TourTypeOne() {
  const products = [
    {
      title: "Plywood",
      imageSrc:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Commercial, Marine, BWP/BWR, MDF & Particle Boards",
    },
    {
      title: "Laminates",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1683134681760-531bbc8eddb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      description: "Decorative & industrial laminates in multiple textures",
    },
    {
      title: "Hardware",
      imageSrc:
        "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hinges, locks, drawer systems, and modular fittings",
    },
    {
      title: "Interior Products",
      imageSrc:
        "https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Designer panels, wall claddings, veneers",
    },
    {
      title: "Solid Wood Furniture",
      imageSrc:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Custom, high-quality wooden furniture pieces",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <style>{`
        .offer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 250px) auto;
          gap: 20px;
        }
        .card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          color: white;
          background-size: cover;
          background-position: center;
          cursor: pointer;
        }
        .card .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);
        }
        .card h3 {
          font-weight: 700;
          margin-bottom: 8px;
        }
          .card h3, .card h5, .card p {
            color: #fff;
                  }
        .card p {
          margin-bottom: 4px;
          font-size: 0.9rem;
        }
        .card span {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.8);
        }
        .grid-plywood { grid-column: span 2; grid-row: span 2; }
        .grid-laminates { grid-column: 3 / 4; grid-row: 1 / 2; }
        .grid-hardware { grid-column: 4 / 5; grid-row: 1 / 2; }
        .grid-interior { grid-column: 3 / 5; grid-row: 2 / 3; }
        .grid-wood { grid-column: 1 / -1; grid-row: 3 / 4; height: 280px; }
      `}</style>

      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-dark mb-3">What We Offer</h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Premium quality wood products and interior solutions crafted with
            precision and care.
          </p>
        </div>

        <div className="offer-grid">
          {/* Plywood */}
          <div
            className="card grid-plywood"
            style={{ backgroundImage: `url(${products[0].imageSrc})` }}
          >
            <div className="overlay">
              <h3>{products[0].title}</h3>
              <p>{products[0].description}</p>
              <span>
                Explore <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Laminates */}
          <div
            className="card grid-laminates"
            style={{ backgroundImage: `url(${products[1].imageSrc})` }}
          >
            <div className="overlay">
              <h5>{products[1].title}</h5>
              <p>{products[1].description}</p>
              <span>
                Explore <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Hardware */}
          <div
            className="card grid-hardware"
            style={{ backgroundImage: `url(${products[2].imageSrc})` }}
          >
            <div className="overlay">
              <h5>{products[2].title}</h5>
              <p>{products[2].description}</p>
              <span>
                Explore <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Interior Products */}
          <div
            className="card grid-interior"
            style={{ backgroundImage: `url(${products[3].imageSrc})` }}
          >
            <div className="overlay">
              <h5>{products[3].title}</h5>
              <p>{products[3].description}</p>
              <span>
                Explore <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Solid Wood Furniture */}
          <div
            className="card grid-wood"
            style={{ backgroundImage: `url(${products[4].imageSrc})` }}
          >
            <div className="overlay">
              <h3>{products[4].title}</h3>
              <p>{products[4].description}</p>
              <span>
                Explore <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
