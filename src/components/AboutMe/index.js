import React, { useEffect } from "react";

export default function AboutMe() {
  return (
    <section id="welcome">
      <div className="section-title">
        <h2>Welcome</h2>
      </div>
      <br />
      <div id="about-me-cont" className="row container">
        <div id="personal-pic" className="col s12 m3 valign-wrapper">
          <img
            src="/images/prof-pic2.jpg"
            onmouseover="this.src='/images/prof-pic1.jpg'"
            onmouseout="this.src='/images/prof-pic2.jpg'"
            alt="Profile-Picture"
          />
        </div>
        <div className="section-contents col s12 m9">
          <p>
            {"\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0"} If you dedicate the
            majority of your time and effort to something, it is amazing what
            you can accomplish in a short amount of time. I'm a full-stack
            developer with a background in research-oriented psychology and a
            passion for creating engaging, well-crafted, and interactive
            pages/applications. Known as a critical thinker, insightful
            contributor, and one who works well with and motivates members of
            project teams. I am well versed in using a variety of technologies
            to efficiently solve problems and enhance user experiences through
            refined functionality and detail-oriented design. Able to rapidly
            learn and implement new technologies and adapt to the demands of any
            project. Ready to apply skills as part of a quality-driven team to
            craft products which people are delighted to use and leave them with
            an indelible positive impression of the organization those products
            represent.
          </p>
          <p className="">
            <span id="read-more-btn" className="">
              (read more)
            </span>
            <span id="read-more" className="hide">
              &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp For every project completed
              thus far, I have not only met, but exceeded the acceptance
              criteria. I always add to or improve upon the basic, required
              functionality so that the user can both do more with and have a
              more satisfying experience with my applications. I consistently go
              the extra mile with my CSS stylings to ensure my projects are
              professional and aesthetically appealing. While most of the
              projects below are quite common to see from bootcamp developers,
              you will notice that my versions indicate a developer who puts in
              the extra time and effort to make a superior product, with an
              emphasis on enhanced functionality and ease-of-use. By constantly
              striving to take my projects to the next level, I have learned how
              to provide the user a better, more complete experience and, in the
              process, have provided myself with additional learning
              opportunities through these extra challenges. I hope you enjoy the
              following examples of my work, and, if you have a dream for an
              application, I hope that you will contact me to help you build it!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
