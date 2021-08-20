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
      <div class="section-title">
        <h2>Projects</h2>
      </div>

      <div id="project-modal" class="modal modal-fixed-footer">
        <div class="modal-content">
          <a href="#!" class="modal-close right">
            <i
              id="modal-close-btn"
              class="material-icons right"
              onmouseover="this.innerHTML='cancel'"
              onmouseout="this.innerHTML='highlight_off'"
            >
              highlight_off
            </i>
          </a>
          <h4 class="center">Modal Header</h4>
          <img src="" alt="" />
          <p>A bunch of text</p>
        </div>

        <div class="modal-footer">
          <div id="mod-foot">
            <a id="deploy-link" target="blank" href="">
              Deployed Project
            </a>
            <a id="git-link" target="blank" href="">
              Project GitHub
            </a>
          </div>
        </div>
      </div>

      <div id="projects-cont" class="row container">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col m3 s12">
              <a class="active" href="#febe">
                FeBe
              </a>
            </li>
            <li class="tab col m3 s12">
              <a href="#crypto-cards">Crypto</a>
            </li>
            <li class="tab col m3 s12">
              <a href="#weather-dash">Weather</a>
            </li>
            <li class="tab col m3 s12">
              <a href="#work-day">Schedule</a>
            </li>
          </ul>
        </div>
        <div id="febe" class="project-pics col s12">
          <figure class=""></figure>
        </div>
        <div id="crypto-cards" class="project-pics col s12">
          <figure class=""></figure>
        </div>
        <div id="weather-dash" class="project-pics col s12">
          <figure class=""></figure>
        </div>
        <div id="work-day" class="project-pics col s12">
          <figure class=""></figure>
        </div>
      </div>
    </section>
  );
}
