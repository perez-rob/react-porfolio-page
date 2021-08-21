import React, { useEffect, useRef } from "react";
import M from "materialize-css";

// gif imports for project modals
import febeGif from "../../images/Project-Demos/febe-demo.gif";
import cryptoGif from "../../images/Project-Demos/crypto-demo.gif";
import weatherGif from "../../images/Project-Demos/weather-demo.gif";
import workdayGif from "../../images/Project-Demos/workday-demo.gif";

export default function Work() {
  // materialize component initializations
  const projectModal = useRef();

  useEffect(() => {
    M.Modal.init(projectModal.current, {
      endingTop: "4%",
      opacity: 0.9,
      onOpenEnd: () => {
        console.log(projectModal.current.isOpen);
      },
    });

    var elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, {
      swipeable: true,
      responsiveThreshold: 30000,
    });
  });

  // functions to render modal with content based on which project image is clicked

  const modalContent = useRef();
  const modalTitle = useRef();
  const modalText = useRef();
  const modalGif = useRef();
  const modalDeployLink = useRef();
  const modalGitLink = useRef();

  const handleFebe = () => {
    modalTitle.current.innerText = "FeBe - Feel Better";
    modalText.current.innerText =
      "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 An full-stack app where users can create an account to access the site. From the dashboard, the user can select their current mood and then receive a suggested activity which is chosen based on a combination of what other users have reported as useful for that mood and the feedback the user given for past suggestions. The user can then logout and, upon returning from the activity, still see there suggested activity and provide feedback on how it worked for their current mood. There is also a live chat feature using socket.io that allows all logged in users to communicate with each other, and a community board that shows the five most recent mood-activity combos and the users feedback about its efficacy. Users can also add activities to the database. This was a group project where I acted  as lead developer and project manager. ";
    modalGif.current.src = febeGif;
    modalGif.current.alt = "FeBe Demo gif";
    modalDeployLink.current.href = "https://febe.herokuapp.com/";
    modalGitLink.current.href = "https://github.com/perez-rob/FeBe-Feel-Better";
  };
  const handleCrypto = () => {
    modalTitle.current.innerText = "Crypto Cards";
    modalText.current.innerText =
      "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Entering the name of a currency in the search bar creates an information card containing up-to-date statistics of that assets, including a 30-day price history chart, which is then added to the card display area. The user can add as many cards as they desire and remove them just as easily to curate their ideal array of token information.  The user's card layout is saved whenever a change is made so, upon returning to the application at a later time, their selected cryptocurrencies are automatically displayed and they can stay informed of any changes to the assets they are watching. Each card's 'Twitter Feed' button pulls up a bar on the left containing a selection of recent, relevant tweets from Twitter's API. Additional features include a scrolling ticker of CoinGecko's Top Trending Coins to present the user with new potential currencies to explore, and a glossary of crypto-related terms to assist the user as they explore various assets in the crypto space.";
    modalGif.current.src = cryptoGif;
    modalGif.current.alt = "Crypto Cards Demo gif";
    modalDeployLink.current.href = "https://perez-rob.github.io/Crypto-Board/";
    modalGitLink.current.href = "https://github.com/perez-rob/Crypto-Board";
  };
  const handleWeather = () => {
    modalTitle.current.innerText = "Weather Dashboard";
    modalText.current.innerText =
      "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Search for a city by name and see the current weather conditions (including temperature, wind speed, humidity, and UV index) along with that city's five-day forecast. The project guidelines only required a text input for the city name which, based on how the OpenWeatherMap API processes such queries, resulted in only being able to see results for the most well-known city with a given name. This caused a potentially frustrating user experience if they wanted to see the weather for a lesser-known city with the same name (e.g. 'Atlanta, TX' versus the more well-known 'Atlanta, GA'). To improve the user's experience, my project includes an additional input to specify a state. If the user selects a state along with a city's name, the API call is modified to return the appropriate weather data for that city. This input, however, is not required and if left blank the results display the weather for whichever city OpenWeatherMap defaults to for that city name. Finally, the user's search history is saved and rendered as buttons beneath the search bar so that, if they return to the page in the future, they can easily check the weather for those cities with a single click.";
    modalGif.current.src = weatherGif;
    modalGif.current.alt = "Weather Dashboard Demo gif";
    modalDeployLink.current.href =
      "https://perez-rob.github.io/Weather-Dashboard/";
    modalGitLink.current.href =
      "https://github.com/perez-rob/Weather-Dashboard";
  };
  const handleWorkday = () => {
    modalTitle.current.innerText = "Workday Scheduler";
    modalText.current.innerText =
      "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 A simple scheduling app that breaks the day into hour-long time blocks. Each time block is an editable text area where the user can input whatever they want to add to their schedule. Pressing the blue button to the right of the time block saves their entry so, if they return to the site at a later time, their schedule will be stored and displayed again when they open the page. The schedule keeps track of the current time and color codes the time blocks to distinguish past, present, and future. The project guidelines only required the schedule to accommodate the hours from 9am to 5pm, however, given that the user may want to schedule events beyond this limited range, my project includes some extra features. One of these is a button which opens a dropdown menu where the user can alter the default 9-to-5 display to any custom time range they desire. To further improve the user's experience, my project includes another extra feature: drag-and-drop functionality. If the user wants to move an event from its original time block to another, instead of erasing the entry and retyping it, they can simply select it and drag it to a new time block. Any contents that were already in the new time block are moved to the original location of the event being moved, and any events in between the two are completely unaffected.";
    modalGif.current.src = workdayGif;
    modalGif.current.alt = "Workday Scheduler Demo gif";
    modalDeployLink.current.href =
      "https://perez-rob.github.io/Work-Day-Scheduler/";
    modalGitLink.current.href =
      "https://github.com/perez-rob/Work-Day-Scheduler";
  };

  return (
    <section id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div
        id="project-modal"
        ref={projectModal}
        className="modal modal-fixed-footer"
      >
        <div ref={modalContent} className="modal-content">
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
          <h4 ref={modalTitle} className="center">
            Modal Header
          </h4>
          <img ref={modalGif} src="" alt="" />
          <p ref={modalText}>A bunch of text</p>
        </div>

        <div className="modal-footer">
          <div id="mod-foot">
            <a id="deploy-link" ref={modalDeployLink} target="blank" href="#!">
              Deployed Project
            </a>
            <a id="git-link" ref={modalGitLink} target="blank" href="#!">
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
        <div
          id="febe"
          onClick={handleFebe}
          className="project-pics col s12 modal-trigger"
          data-target="project-modal"
        ></div>
        <div
          id="crypto-cards"
          onClick={handleCrypto}
          className="project-pics col s12 modal-trigger"
          data-target="project-modal"
        ></div>
        <div
          id="weather-dash"
          onClick={handleWeather}
          className="project-pics col s12 modal-trigger"
          data-target="project-modal"
        ></div>
        <div
          id="work-day"
          onClick={handleWorkday}
          className="project-pics col s12 modal-trigger"
          data-target="project-modal"
        ></div>
      </div>
    </section>
  );
}
