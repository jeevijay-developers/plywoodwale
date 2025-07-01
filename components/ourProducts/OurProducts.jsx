'use client'
import React from "react";
import { products } from "@/data/PlywoodData/productData";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ourProducts.module.css";
import { useRouter } from "next/navigation";

export default function OurProductsPage() {
  const router = useRouter();
  // Flatten all products into a single array
  const allProducts = products.flatMap((cat) => cat.prods);

  const handleCardClick = (product) => {
    router.push(`/${product.title}/${product.productId}`);
  };

  return (
    <div className="container py-5 mt-5">
      <h1 className="mb-4 text-center">Our Products</h1>
      <div className="row">
        {allProducts.map((product) => (
          <div
            key={product.productId}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => handleCardClick(product)}
          >
            <div className={`card h-100 shadow-sm ${styles.productCard}`}>
              <img
                src={product.image}
                alt={product.title}
                className={`card-img-top ${styles.productImage}`}
                style={{ objectFit: "cover", height: 200 }}
              />
              <div className="card-body d-flex flex-column justify-content-end">
                <h5 className="card-title text-center mb-0">{product.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
