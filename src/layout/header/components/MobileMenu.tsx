"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import MenuTwo from './MenuTwo';
import LogoBlack from '../../../../public/assets/img/teacher/helium_edu.png';
import Image from 'next/image';


const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType


  return (
    <div className="fix">
      <div className={sideMenuOpen ? "side-info info-open" : "side-info"}>
        <div className="row align-items-center mb-30">
          <div className="col-9">
            <Link href="/"><Image src={LogoBlack} style={{ width: "auto", height: "auto" }} alt="Logo" /></Link>
          </div>
          <div className="col-3 text-end"><button className="side-info-close" onClick={toggleSideMenu}><i className="fal fa-times"></i></button>
          </div>
        </div>
        <div className="side-info-content">
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              <MenuTwo />
            </ul>
          </div>
          <div className="offset-widget offset_searchbar mb-30">
            <div className="menu-search position-relative ">
              <form action="#" className="filter-search-input">
                <input type="text" placeholder="Search keyword" />
                <button><i className="fal fa-search"></i></button>
              </form>
            </div>
          </div>
          <div className="offset-widget offset_menu-top mb-20">
            <div className="header-menu-top-icon mb-20">
              <Link href="tel:(555)674890556"><i className="fas fa-phone-alt"></i>(91) 98897 63777</Link>
              <Link href="mailto:info@example.com"><i className="fal fa-envelope"></i>connect@heliumlearn.com</Link>
              <i className="fal fa-map-marker-alt"></i><span>Levana Cyber Heights, 10th floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh- 226010 Bharat 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;