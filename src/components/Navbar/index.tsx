import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky navbar bg-base-100 pb-5  ">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-neutral-content"
          >
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#B3CCF5"
              stroke="currentColor"
              style={{ marginTop: "6px" }}
            >
              <rect width="100" height="10" rx="15"></rect>
              <rect y="30" width="100" height="10" rx="15"></rect>
              <rect y="60" width="100" height="10" rx="15"></rect>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>

            <li>
              <a href="#prize">Event Fee</a>
            </li>

            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>

        <a>
          <img
            src=""
            style={{
              // maxWidth: !isNonMobile ? "60px" : "40px",
              marginTop: "5px",
            }}
            className="rvce_logo"
          />
        </a>

        {/*<img src={Logo} style={{width:'100px',maxWidth:'100px'}} className="logo" />*/}
      </div>
      <div className="navbar hidden lg:flex">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl font-bold">
            <span>P</span>
            <span className="text-white">K</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {/*
      <Link to="/register" className="btn btn-primary btn-xs  lg:btn-md">
          Register
        </Link>
      */}
      </div>
    </div>
  );
};

export default Navbar;
