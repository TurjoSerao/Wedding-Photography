import "./home.css";
import { vector, author, quote, flowerUnderline } from "./images";

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
            <h3>AWARD WINNING PHOTOGRAPHY</h3>
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
    </>
  );
}

export default Home;
