import React from "react";

import Search from "./Search";

import styles from "./Navbar.module.scss";

import hamburger from "@/assets/icons/navBtn.svg";
import logo from "@/assets/icons/Logo.svg";
import videoAdd from "@/assets/icons/camera.svg";
import marketplace from "@/assets/icons/marketplace.svg";
import bell from "@/assets/icons/bell.svg";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Wrapper}>
        <div className={styles.Icons}>
          <img src={hamburger} alt={hamburger} />
          <div className={styles.logo}>
            <img src={logo} alt={logo} />
          </div>
        </div>

        <div className={styles.SearchInput}>
          <Search />
        </div>
        <div className={styles.Icons}>
          <img src={videoAdd} alt={videoAdd} />
          <img src={marketplace} alt={marketplace} />
          <img src={bell} alt={bell} />
          <img
            className={styles.Avatar}
            src="https://yt3.ggpht.com/ILMOLWQODN1-TX3Cg2DNZzol60eAMxBgf_9Z_Y6-BUDWBboGFynDC1P-cfuqd4pjzTVIJylEZg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
