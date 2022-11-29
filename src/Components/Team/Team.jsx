import React from "react";

const Team = () => {
  return (
    <section className="section-lg team" id="team">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Our Team</h2>
            <p className="mb-100">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
              <br />
              fugiat nulla pariatur. Excepteur sint occaecat
            </p>
          </div>
        </div>
        <div className="col-10 mx-auto">
          <div className="team-slider">
            <div className="team-member">
              <div className="d-flex mb-4">
                <div className="mr-3">
                  <img
                    className="rounded-circle img-fluid"
                    src="images/team/team-1.jpg"
                    alt="team-member"
                  />
                </div>
                <div className="align-self-center">
                  <h4>Becroft</h4>
                  <h6 className="text-color">web designer</h6>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. S eparated
                they
              </p>
            </div>
            <div className="team-member">
              <div className="d-flex mb-4">
                <div className="mr-3">
                  <img
                    className="rounded-circle img-fluid"
                    src="images/team/team-2.jpg"
                    alt="team-member"
                  />
                </div>
                <div className="align-self-center">
                  <h4>John Doe</h4>
                  <h6 className="text-color">web developer</h6>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. S eparated
                they
              </p>
            </div>
            <div className="team-member">
              <div className="d-flex mb-4">
                <div className="mr-3">
                  <img
                    className="rounded-circle img-fluid"
                    src="images/team/team-3.jpg"
                    alt="team-member"
                  />
                </div>
                <div className="align-self-center">
                  <h4>Erik Ligas</h4>
                  <h6 className="text-color">Programmer</h6>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. S eparated
                they
              </p>
            </div>
            <div className="team-member">
              <div className="d-flex mb-4">
                <div className="mr-3">
                  <img
                    className="rounded-circle img-fluid"
                    src="images/team/team-1.jpg"
                    alt="team-member"
                  />
                </div>
                <div className="align-self-center">
                  <h4>Erik Ligas</h4>
                  <h6 className="text-color">Programmer</h6>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. S eparated
                they
              </p>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src="images/team/team-2.jpg"
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>John Doe</h4>
                    <h6 className="text-color">web developer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/backgrounds/team-bg.png"
        alt="team-bg"
        className="img-fluid team-bg"
      />
      <img
        className="team-bg-shape-1 up-down-animation"
        src="images/background-shape/seo-ball-1.png"
        alt="background-shape"
      />
      <img
        className="team-bg-shape-2 left-right-animation"
        src="images/background-shape/seo-ball-1.png"
        alt="background-shape"
      />
      <img
        className="team-bg-shape-3 left-right-animation"
        src="images/background-shape/team-bg-triangle.png"
        alt="background-shape"
      />
      <img
        className="team-bg-shape-4 up-down-animation img-fluid"
        src="images/background-shape/team-bg-dots.png"
        alt="background-shape"
      />
    </section>
  );
};

export default Team;
