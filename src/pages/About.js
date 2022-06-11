import React from "react";
import about from "../image/about.jpg";

function About() {
  return (
    <div className="container-fluid">
      <h1 className="text-center pt-4">About</h1>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <img src={about} className="w-100" alt="img not found" />
          </div>
          <div className="col-lg-6 about">
            <h3 className="pt-lg-1 pt-md-4 pt-sm-4 pt-2">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <i className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
            <li className="text-muted py-1">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="text-muted py-1">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="text-muted py-1">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
            <p className="text-muted pt-3">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
        <div className="row p-4 text-center">
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-earth-americas text-center about1"></i></h4>
              <h3>Lorem Ipsum</h3>
              <p className="text-secondary">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-feather-pointed text-center about1"></i></h4>
              <h3>Sed ut perspiciatis</h3>
              <p className="text-secondary">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-book-open text-center about1"></i></h4>
              <h3>Magni Dolores</h3>
              <p className="text-secondary">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-stroopwafel text-center about1"></i></h4>
              <h3>Nemo Enim</h3>
              <p className="text-secondary">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-award text-center about1"></i></h4>
              <h3>Dele cardo</h3>
              <p className="text-secondary">
                Quis consequatur saepe eligendi volup tatem consequatur dolor
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="border border-warning p-3 my-3 mx-2">
              <h4 className=""><i class="fa-solid fa-crown text-center about1"></i></h4>
              <h3>Divera don</h3>
              <p className="text-secondary">
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
