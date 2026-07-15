import "./Hero.css";
import HeroImage from "../../assets/hero1.png";
import Girl from "../../assets/girl.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-left">

          <h1>
            Step Into the Mystical <br />
            <span>Discover</span> What the Tarot <br />
            Reveals
          </h1>

          <p>
            Welcome to Soul Unfolding, a sacred space where ancient <br />
             wisdom meets intuitive guidance. Let the cards  <br />
             illuminate your path
            and empower your journey.
          </p>

          <div className="hero-btn">
            <button className="book-btn">BOOK NOW</button>
            <button className="watch-btn">WATCH VIDEO</button>
          </div>

        </div>

        <div className="hero-right">

          {/* <img src={HeroImage} alt="Background" className="hero-bg" /> */}

          <img src={Girl} alt="Girl" className="hero-girl" />

        </div>

      </div>

    </section>
  );
}