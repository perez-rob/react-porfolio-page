import React, { useEffect } from "react";
import M from "materialize-css";

export default function Parallax(props) {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  });
  return (
    <div class="parallax-container">
      <div class="parallax">
        <img src={props.imgSrc} alt="code-background" />
      </div>
    </div>
  );
}
