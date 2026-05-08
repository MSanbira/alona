import React, { useEffect, useState } from "react";

export default function MobileCarousel(props) {
  const { items = [] } = props;
  const mobileCarouselRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedIndexNum = React.useRef(0);

  useEffect(() => {
    const handleOnScrollChange = (e) => {
      const scrollPosition = Math.round(e.target.scrollLeft / window.innerWidth);
      if (selectedIndexNum.current !== scrollPosition) {
        setSelectedIndex(scrollPosition);
        selectedIndexNum.current = scrollPosition;
      }
    };

    const carousel = mobileCarouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleOnScrollChange);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleOnScrollChange);
      }
    };
  }, []);

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
