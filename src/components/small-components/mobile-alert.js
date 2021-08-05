import React, { useRef } from "react";
import closeSrc from "../../assets/images/white-close.svg";
import { isHideMobileAlert, setHideMobileAlert } from "../../utils";

export default function MobileAlert(props) {
  const alert = useRef(null);

  const handleCloseAlert = () => {
    setHideMobileAlert();
    alert.current.classList.add("hide");
  };

  if (isHideMobileAlert()) {
      return <></>
  }

  return (
    <div className="mobile-alert" ref={alert}>
      <img
        className="mobile-alert-exit"
        src={closeSrc}
        alt="close"
        onClick={handleCloseAlert}
      />
      <p>This experience is best viewed on desktop devices.</p>
      <div className="btn" onClick={handleCloseAlert}>
        I still want to take a look
      </div>
    </div>
  );
}
