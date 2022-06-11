import React from "react";
import About from "../pages/About"
import Gallery from "../pages/Gallery"
import Contact from "../pages/Contact"
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";

function Home() {
  return (
    <>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="img not found" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="img not found" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="img not found" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <About />
    <Gallery />
    <Contact />
    </>
  );
}

export default Home;
