import React, { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  });

  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="scrollToTop"
        style={{ display: visible ? "flex" : "none" }}
        onClick={ScrollToTop}
      >
        <i className="fa-solid fa-sort-up"></i>
      </div>
    </>
  );
};

export default ScrollToTop;
