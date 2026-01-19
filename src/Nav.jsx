import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./Story";
import Service from "./Service";
import Logo from "./assets/logo-2.png";
import LogoText from "./assets/logo-text.png";
import { useState, useEffect } from "react";
import Footer from './footer';
import Explore from "./Explore";
import Story from "./Story";


const icons = [
  "https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-hamburger-like-menu-black-glyph-ui-icon-icon-concept-settings-vector-png-image_47699556.jpg",
  "https://png.pngtree.com/png-clipart/20250807/original/pngtree-hair-salon-scissors-and-comb-icon-png-image_21654220.png",
  "https://cdn-icons-png.flaticon.com/512/501/501894.png"
];

function Nav() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true); // start rotate

      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length);
        setIsRotating(false); // stop rotate
      }, 1000); // rotate duration

    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);
  return (
    <>

      <nav className="navbar shadow-sm position-sticky top-0 z-1 py-2">
        <div className="container">
          <div className="row justify-content-between align-items-center w-100">

            {/* LEFT COLUMN – MENUS */}
            <div className="col-4">
              <ul className="navbar-nav  d-none d-lg-flex flex-row gap-3 mb-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/explore" className="nav-link">Explore Us</Link>
                </li>
                <li className="nav-item">
                  <a href="https://maps.app.goo.gl/nGnf5tAPfASuZRft6" className="nav-link">Find Us</a>
                </li>
              </ul>
            </div>

            {/* CENTER COLUMN – LOGO */}
            <div className="col-4 text-center">
              <Link to="/" className="navbar-brand m-0 d-flex gap-2">
                <img src={Logo} alt="Logo" width="90" className="head object-fit-contain" />
                <img src={LogoText} alt="Logo" width="200" className="text object-fit-contain" />
              </Link>
            </div>

            {/* RIGHT COLUMN – COFFEE ICON */}
            <div className="col-4 text-end">
              <img
                src={icons[currentIcon]}
                alt="menu-icon"
                className={`rotating-icon ${isRotating ? "rotate" : ""}`}
                onClick={() => setShowMenu(true)}
                data-bs-toggle="offcanvas"
                data-bs-target="#coffeeMenu"
              />
            </div>

          </div>
        </div>
      </nav>

      {/* Offcanvas: contains all menus + CTA items */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="coffeeMenu"
        aria-labelledby="coffeeMenuLabel"
        style={{ width: "280px" }}
      >
        {/* Offcanvas Header with Logo */}
        <div className="offcanvas-header d-flex flex-column align-items-start border-bottom">
          <img
            src={LogoText} // replace with your logo
            alt="Logo"
            style={{ width: "100px", marginBottom: "10px" }}
          />


          <button
            type="button"
            className="btn-close text-reset position-absolute top-0 end-0 m-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Offcanvas Body */}
        <div className="offcanvas-body d-flex flex-column justify-content-between p-3">

          {/* Main Menu Links */}
          <ul className="list-unstyled mb-4">
            <li>
              <Link to="/explore" className="text-decoration-none d-block py-2">
                Latest Styles
              </Link>
            </li>

            <li>
              <Link to="/explore" className="text-decoration-none d-block py-2">
                Trends
              </Link>
            </li>

            <li>
              <Link to="/story" className="text-decoration-none d-block py-2">
                Our Story
              </Link>
            </li>

            <li>
              <a href="https://maps.app.goo.gl/nGnf5tAPfASuZRft6" className="text-decoration-none d-block py-2">
                Find Us
              </a>
            </li>

            <li>
              <a href="tel:09827706661" className="text-decoration-none d-block py-2">
                Call Us
              </a>
            </li>
          </ul>


          <hr />


        </div>
      </div>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/story" element={<Story />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Nav;
