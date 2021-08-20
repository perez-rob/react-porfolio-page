import React, { useEffect } from "react";
import M from "materialize-css";

export default function Work() {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {
      endingTop: "4%",
      opacity: 0.9,
    });

    var elems2 = document.querySelectorAll(".tabs");
    M.Tabs.init(elems2, {
      swipeable: true,
      responsiveThreshold: 30000,
    });
  });
  return (
    <section id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div id="project-modal" className="modal modal-fixed-footer">
        <div className="modal-content">
          <a href="#!" className="modal-close right">
            <i
              id="modal-close-btn"
              className="material-icons right"
              onmouseover="this.innerHTML='cancel'"
              onmouseout="this.innerHTML='highlight_off'"
            >
              highlight_off
            </i>
          </a>
          <h4 className="center">Modal Header</h4>
          <img src="" alt="" />
          <p>A bunch of text</p>
        </div>

        <div className="modal-footer">
          <div id="mod-foot">
            <a id="deploy-link" target="blank" href="#!">
              Deployed Project
            </a>
            <a id="git-link" target="blank" href="#!">
              Project GitHub
            </a>
          </div>
        </div>
      </div>

      <div id="projects-cont" className="row container">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col m3 s12">
              <a className="active" href="#febe">
                FeBe
              </a>
            </li>
            <li className="tab col m3 s12">
              <a href="#crypto-cards">Crypto</a>
            </li>
            <li className="tab col m3 s12">
              <a href="#weather-dash">Weather</a>
            </li>
            <li className="tab col m3 s12">
              <a href="#work-day">Schedule</a>
            </li>
          </ul>
        </div>
        <div id="febe" className="project-pics col s12">
          <figure className=""></figure>
        </div>
        <div id="crypto-cards" className="project-pics col s12">
          <figure className=""></figure>
        </div>
        <div id="weather-dash" className="project-pics col s12">
          <figure className=""></figure>
        </div>
        <div id="work-day" className="project-pics col s12">
          <figure className=""></figure>
        </div>
      </div>
    </section>
  );
}
