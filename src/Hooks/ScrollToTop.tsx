import React, { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // const scrollToTop = () => {
    //   window.scrollTo(0, 0);
    // };

    // scrollToTop();
  }, []);

  return null;
}
