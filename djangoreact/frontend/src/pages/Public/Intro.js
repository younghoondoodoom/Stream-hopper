import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";

const Intro = () => {
  return (
    <div className="Intro">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="">
            배경
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="streamhopper">
            Stream Hopper란?
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="team-intro">
            팀 소개
          </Link>
        </li>
      </ul>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Intro;
