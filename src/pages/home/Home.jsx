import "./home.css";
import {
  vector,
  author,
  quote,
  flowerUnderline,
  service1,
  service2,
  service3,
  hero,
  portfolio1,
  portfolio2,
} from "./images";

function Home() {
  return (
    <>
      {/* hero section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-sub">Your Dream Wedding Awaits</h2>
            <h2 className="hero-head">Artistic Wedding Photography</h2>
          </div>
        </div>
      </section>
      {/* Award Section  */}
      <section className="award">
        <div className="container">
          <div className="award-content">
            <img src={vector} alt="" />
            <p className="sub-heading">AWARD WINNING PHOTOGRAPHY</p>
            <h2>
              Showcasing your big day in a memorable and unforgettable way.
            </h2>
          </div>
        </div>
      </section>
      {/* about section */}
      <section className="about">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={author} alt="" />
          </div>
          <div className="about-content">
            <img className="quote" src={quote} alt="" />
            <h2>Hello, My Name is Tessa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac. Integer malesuada
              sagittis placerat eget.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac. Integer malesuada
              sagittis placerat.
            </p>
            <img src={flowerUnderline} alt="" />
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services">
        <div className="container">
          <div className="service-content">
            <p className="sub-heading">Services</p>
            <h2>What I Offer</h2>
            {/* cards */}
            <div className="service-cards">
              <div className="card">
                <img src={service1} alt="" />
                <h5>Wedding</h5>
                <p>Per Session</p>
                <p className="price">$2999</p>
                <button className="btn-primary">More Details</button>
              </div>
              <div className="card">
                <img src={service2} alt="" />
                <h5>Portrait</h5>
                <p>Per Session</p>
                <p className="price">$399</p>
                <button className="btn-primary">More Details</button>
              </div>
              <div className="card">
                <img src={service3} alt="" />
                <h5>Engagement</h5>
                <p>Per Session</p>
                <p className="price">$1999</p>
                <button className="btn-primary">More Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-image">
          <img src={hero} alt="Wedding Couple" />
        </div>

        <div className="cta-content">
          <div className="cta-card">
            <img src={vector} alt="" className="cta-icon" />
            <h3>Creative, Passionate, Artistic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan.
            </p>
          </div>
        </div>
      </section>
      {/* portfolio section */}
      <section className="portfolio">
        <p className="sub-heading">PORTFOLIO</p>
        <h2>Featured Story</h2>
        <div className="portfolio-content">
          <div className="portfolio-card">
            <h2>01</h2>
            <p>Ricardo & Michelle</p>
            <p>
              Lorem ipsum dolor sit amet consecte Dignissim consectetur
              tristique purus vehicula felis velit.
            </p>
          </div>
          <div className="portfolio-image">
            <img src={portfolio1} alt="" />
            <img src={portfolio2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
