"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "../../../public/assets/img/logo/helium-logo.png";
import HeliumLogo from "../../../public/assets/img/teacher/helium_edu.png";
import HeaderCartIcon from "@/svg/HeaderCartIcon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useScrollDirection from "@/hooks/sticky-header";
import HeaderIcon from "@/svg/header-icon";
import Menu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./components/MobileMenu";
import { useRouter } from "next/navigation";

const HeaderOne = () => {
  const scrollDirection = useScrollDirection(null);
  const {toggleSideMenu,sideMenuOpen} = useContext(AppContext) as AppContextType
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();

  // redux import
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));

  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      {/* <HeaderTopBar /> */}
      <header>
        <div
          className={`sticky header-area header-transparent ${
            scrollDirection === "down" ? "sticky-header" : " "
          }`}
        >
          <div className="container-fluid">
            <div className="header-main-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-5 col-sm-9 col-9">
                  <div className="header-left d-flex align-items-center">
                  <div className="header-logo">
                      <Link href="/">
                        <Image
                          // style={{ width: ", height: "70%"}}
                          src={HeliumLogo}
                          alt="logo"
                        />
                      </Link>
                    </div>

                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <Menu/>
                        </ul>
                      </nav>
                    </div>

                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-7 col-sm-3 col-3">
                  <div className="header-right d-flex align-items-center justify-content-end">                    
                    <div className="d-none d-md-block mx-2">
                      <Link
                        href="/login"
                        className="user-btn-sign-up edu-btn"
                      >
                         Sign In
                      </Link>
                    </div>

                    <div className="d-none d-md-block">
                      <Link
                        href="/registration"
                        // href='/'
                        className="user-btn-sign-up edu-btn"
                      >
                        Join for free
                      </Link>
                    </div>
                    
                    <div className="menu-bar d-xl-none ml-20">
                      <button onClick={toggleSideMenu}
                        className="side-toggle"
                      >
                      <div  className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setCartOpen(false)}
          className={cartOpen ? "body-overlay opened" : "body-overlay"}
        ></div>
      </header>
      <MobileMenu/>
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>
    </>
  );
};

export default HeaderOne;
