import React from "react";
import styles from "./Layout.module.scss";
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import Navigation from "../../component/Navigation/Navigation/Navigation";
function Layout(props) {
  return (
    <div className={styles.Layout}>
      <Navigation />
      <Toolbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
