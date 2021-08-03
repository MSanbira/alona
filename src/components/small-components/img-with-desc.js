import React, { useRef, useState } from "react";

export default function ImgWithDesc(props) {
  const {
    className = "",
    imgClass = "",
    src = "",
    srcOnMobile,
    description = "",
    alt = description || "work image",
    isAlignStart = false,
  } = props;

  const imgDom = useRef(null);
  const [imgWidth, setImgWidth] = useState();

  const updateWidth = () => setImgWidth(imgDom?.current?.offsetWidth);

  return (
    <div
      className={"img-with-desc " + className}
      style={{ alignItems: isAlignStart ? "flex-start" : "center" }}
    >
      <img
        className={imgClass + (srcOnMobile ? " hide-on-mobile" : "")}
        src={src}
        alt={alt}
        ref={imgDom}
        onLoad={updateWidth}
      />
      {srcOnMobile && (
        <img
          className={imgClass + " show-on-mobile"}
          src={srcOnMobile}
          alt={alt}
        />
      )}
      <h5 style={{ maxWidth: imgWidth || "unset" }}>{description}</h5>
    </div>
  );
}
