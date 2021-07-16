import React, { useEffect, useState } from "react";

export default function MobileCarousel(props) {
  const { items = [] } = props;
  const mobileCarouselRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  let selectedIndexNum = 0;

  useEffect(() => {
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.addEventListener(
        "scroll",
        handleOnScrollChange
      );
    }
    return () => {
      if (mobileCarouselRef.current) {
        mobileCarouselRef.current.removeEventListener(
          "scroll",
          handleOnScrollChange
        );
      }
    };
  }, []);

  const handleOnScrollChange = (e) => {
    const scrollPosition = Math.round(e.target.scrollLeft / window.innerWidth);
    if (selectedIndexNum !== scrollPosition) {
      setSelectedIndex(scrollPosition);
      selectedIndexNum = scrollPosition;
    }
  };

  return (
    <div className="mobile-carousel" ref={mobileCarouselRef}>
      {items.map((item, i) => (
        <div key={i} className="item">
          {item}
        </div>
      ))}
      <div className="dots">
        {items.map((_item, i) => (
          <div key={i} className={selectedIndex === i ? "selected" : ""}></div>
        ))}
      </div>
    </div>
  );
}
