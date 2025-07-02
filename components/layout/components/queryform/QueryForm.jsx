"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const url = process.env.NEXT_PUBLIC_BASE_URL;
export default function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    company: "",
    address: "",
    reference: "",
    youAre: "You are ?",
  });
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !formData.name ||
      !formData.whatsapp ||
      !formData.address ||
      !formData.youAre
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log("formdata", formData);
    // if (formData.youAre === "You are ?") {
    //   alert("please select a role");
    //   return;
    // }
    try {
      const res = await axios.post(`${url}/submitform`,formData);
      setSubmitted(true);
      setFormData({ name: "", whatsapp: "", address: "", youAre: "" });
      setTimeout(()=>{
        router.push('/')
      },[1000])
    } catch (error) {
      console.log("error", error);
      setError("Something went wrong. Please try again.");
    }
    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     access_key: "93d67399-7852-4437-b553-73042a7abb7c",
    //     ...formData,
    //   }),
    // });

    // const result = await response.json();

    // if (result.success) {
    //   setSubmitted(true);
    //   setFormData({ name: "", phone: "", email: "", message: "" });
    // } else {
    //   setError("Something went wrong. Please try again.");
    // }
  };

  return (
    <section
      className="layout-pt-lg layout-pb-lg"
      style={{ marginTop: "25px" }}
    >
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center  mb-30">Query Form</h2>

            <div className="contactForm">
              {submitted ? (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <p className="text-success text-center">
                    Message sent successfully!
                  </p>
                  <button type="button" className="btn btn-dark col-3">
                    Go Back
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row y-gap-30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="reference"
                      placeholder="Reference"
                      required
                      value={formData.reference}
                      onChange={handleChange}
                    />
                  </div>
                  <select
                    className="form-select col-6"
                    aria-label="Select Role"
                    required
                    name="youAre"
                    value={formData.youAre}
                    onChange={handleChange}
                  >
                    <option selected>You are ?</option>
                    <option value="End User">End User</option>
                    <option value="Architect/Interior Designer">
                      Architect/Interior Designer
                    </option>
                    <option value="Contractor">Contractor</option>
                  </select>

                  <div className="col-12">
                    <textarea
                      type="text"
                      name="address"
                      rows="6"
                      placeholder="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <p className="text-danger text-center">{error}</p>}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button -md -dark-1 bg-accent-1 text-white col-12"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
