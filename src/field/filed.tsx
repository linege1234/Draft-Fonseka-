import * as React from "react";
import { useState } from "react";
import Player from "./player";
import Refresh from "./Refresh";

import "./styles.css";

export default function Filed() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Player key={count} />
      </div>
    </>
  );
}
