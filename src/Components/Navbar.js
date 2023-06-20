// import PropTypes from 'prop-types'
import React from "react";
import { Link } from "react-router-dom";
//import styles from './mystyle.module.css';
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg backgroundimage ">
        <div className="container-fluid backgroundimage">
          <Link
            className="navbar-brand nav-link active"
            to="/"
            style={{ fontSize: 30, color: " #e8475e" }}
          >
            <strong>TaazaKhabar</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div
            className="collapse navbar-collapse "onClick="closeMenu"
            id="navbarSupportedContent"
            style={{ fontSize: 20 }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  to="/business"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Business</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/entertainment"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Entertainment</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/health"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Health</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/science"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Science</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/sports"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Sport</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/technology"
                  style={{ color: "  #00008b" }}
                >
                  <strong>Technology</strong>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Contactus"
                  style={{ color: "  #00008b",height:"100%" }}
                >
                  <strong>ContactUs</strong>
                </Link>
              </li> */}
              
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style ={{color :"white"}}>Enable Drak mode</label>
  </div>  */}

             
    
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
