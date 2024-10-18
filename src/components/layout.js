/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";
export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      {/* <div
        className={"sticky"}
        top={0}
        sx={{
          backgroundColor: "White",
          height: ["100px", "100px", "70px", "70px", "70px", "50px", "50px"],
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>This website is still in development</h3>
      </div> */}
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
