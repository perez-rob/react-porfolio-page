import React, { useEffect } from "react";
import M from "materialize-css";

export default function Parallax(props) {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  });
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={props.imgSrc} alt="code-background" />
      </div>
    </div>
  );
}
