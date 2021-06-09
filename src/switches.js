import React, { useEffect, useState } from "react";

const Switcher = () => {
  const [IsLight, setIsLight] = useState(false);

  const Switch = (status) => {
    if (status) {
      setIsLight(!status);
    } else {
      setIsLight(!status);
    }
  };

  return (
    <div className={`App ${IsLight ? "" : "app-dark"}`}>
      <div
        className={`sw-wrapper ${IsLight ? "" : "sw-wrapper-dark"}`}
        onClick={() => Switch(IsLight)}
      >
        <div
          className={`sw-knob-mode ${
            IsLight
              ? "sw-light-mode sw-opacity-show"
              : "sw-dark-mode sw-opacity-hide"
          }`}
        ></div>
        <div
          className={`sw-knob-dark-mode ${
            IsLight
              ? "sw-opacity-hide"
              : "sw-opacity-show sw-knob-dark-mode-reupdate"
          }`}
        ></div>
        <img
          src="/star.svg"
          className={`sw-star-dark ${
            IsLight ? "sw-opacity-hide" : "sw-star-dark-opacity-show"
          }`}
        />
      </div>
    </div>
  );
};

export default Switcher;
