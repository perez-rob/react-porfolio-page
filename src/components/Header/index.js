import React, { useEffect } from "react";
import M from "materialize-css";

export default function Header() {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false,
      constrainWidth: false,
      alignment: "right",
    });
  });
  return (
    <header>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a href="mailto:rob@robperez.net">rob@robperez.net</a>
        </li>
        <li>
          <a href="tel:+14043175336">404.317.5336</a>
        </li>
      </ul>

      <nav>
        <div className="nav-wrapper">
          <a id="page-title" href="#" className="left">
            Rob Perez
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="https://www.linkedin.com/in/r-perez/" target="blank">
                <img
                  className="nav-icon"
                  src="/images/lin-icon.png"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/perez-rob" target="blank">
                <img
                  className="nav-icon"
                  src="/images/git-icon.png"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                className="dropdown-trigger nav-text"
                href="#!"
                data-target="dropdown2"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/images/Rob-Perez-RESUME.pdf"
                className="nav-text"
                target="blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
