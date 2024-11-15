// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AppRoutes } from "../routes";
import ObatLogo from "../../src/assets/obatin.svg";
import Avatar from "../utils/Avatar";
import Cart from "../utils/Cart";

const Navbar = () => {
  const [items, total] = [3, 100000];
  // const [items, setItems] = useState(0);
  // const [total, setTotal] = useState(0);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-link">
            <img src={ObatLogo} alt="Logo ObatIn" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="active">Beranda</a>
              </li>
              <li>
                <a>Produk</a>
              </li>
              <li>
                <a>Konsultasi</a>
              </li>
              <li>
                <a>Transaksi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <a className="active">Beranda</a>
            </li>
            <li>
              <a>Produk</a>
            </li>
            <li>
              <a>Konsultasi</a>
            </li>
            <li>
              <a>Transaksi</a>
            </li>
          </ul>
        </div>
        <Cart items={items} total={total} hidden />
        <Avatar src={ObatLogo} />
      </div>
      {/* <AppRoutes /> */}
    </>
  );
};

export default Navbar;
