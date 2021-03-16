import React, { useState, useEffect } from "react";

import { withMount } from "../utils/withMount";
import { padNumber } from "../utils/padNumber";
import styles from "./Header.css";

const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.eventBus.on("count", handleCount);
    return () => {
      window.eventBus.off("count", handleCount);
    };
  });

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="header">
      <div className="animation-wrapper">
        <div className="animation">Welcome to the modern world of MICRO FRONTENDS</div>
      </div>
      <div className="counter" onClick={resetCounter}>
        <div>{padNumber(count)}</div>
      </div>
    </div>
  );
};

export const mount = withMount(Header, styles);
