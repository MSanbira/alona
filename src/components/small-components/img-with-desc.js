import React, { useRef, useState } from "react";

export default function ImgWithDesc(props) {
  const {
    className = "",
    imgClass = '',
    src = "",
    description = "",
    alt = description || "work image",
    isAlignStart = false
  } = props;

  const imgDom = useRef(null);
  const [imgWidth, setImgWidth] = useState();

  const updateWidth = () => setImgWidth(imgDom?.current?.offsetWidth)

  return (
    <div className={"img-with-desc " + className} style={{alignItems: isAlignStart ? 'flex-start' : 'center'}}>
      <img className={imgClass} src={src} alt={alt} ref={imgDom} onLoad={updateWidth}/>
      <h5 style={{maxWidth: imgWidth || 'unset'}}>{description}</h5>
    </div>
  );
}
