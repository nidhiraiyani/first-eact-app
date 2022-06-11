import React from "react";
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import img6 from '../image/6.jpg'
import img7 from '../image/7.jpg'
import img8 from '../image/8.jpg'
import img9 from '../image/9.jpg'
import img10 from '../image/10.jpg'
import img11 from '../image/11.jpg'
import img12 from '../image/12.jpg'

function Gallery() {
  return (
    <div className="container-fluid">
      <h1 className="text-center pb-4 pt-4">Gallery</h1>
      <div className="container" >
      <div className="row justify-contant-center">
        <div className="col-lg-4 mb-4">
          <img src={img4} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
          <img src={img5} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
          <img src={img6} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
          <img src={img7} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
          <img src={img8} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
        <img src={img9} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
        <img src={img10} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
        <img src={img11} className="w-100" alt="img not found"/>
        </div>
        <div className="col-lg-4 mb-4">
        <img src={img12} className="w-100" alt="img not found"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Gallery;
