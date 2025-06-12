import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  const base = import.meta.env.BASE_URL;

  const sponsorLogos = [
    "mathworks-removebg.png",
    "sight-removebg.png",
    "labteach-removebg.png",
    "sustaina-removebg.png",
    "CoreEL-removebg.png",
    "amda-removebg.png",
  ];

  return (
    <section className="sponsor-section">
      <h2>Organized By</h2>

      <div className="main-logos-with-text">
        <img
          src={`${base}bitm-removebg.png`}
          alt="BITM Logo"
          className="main-logo"
        />

        <div className="logo-text">
          <p className="college-name">
            Ballari Institute of Technology and Management
          </p>
          <p className="branch-name">IEEE Student Branch BITM</p>
        </div>

        <img
          src={`${base}ieee-removebg.png`}
          alt="IEEE Logo"
          className="main-logo"
        />
      </div>

      <h3>Our Sponsors</h3>
      <div className="sponsor-logos">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            src={`${base}${logo}`}
            alt={`Sponsor ${index + 1}`}
            className="sponsor-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
