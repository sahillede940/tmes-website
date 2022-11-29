import React from "react";

const Newslater = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Subscribe to our newsletter</h2>
            <p className="mb-5">Receive updates, news and deals</p>
          </div>
          <div className="col-lg-8 col-sm-10 col-12 mx-auto">
            <form action="#">
              <div className="input-wrapper position-relative">
                <input
                  type="email"
                  className="newsletter-form"
                  id="newsletter"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  value="send"
                  className="btn newsletter-btn"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        className="newsletter-bg-shape left-right-animation"
        src="images/background-shape/seo-ball-2.png"
        alt="background-shape"
      />
    </section>
  );
};

export default Newslater;
