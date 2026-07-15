import "./Banner.css";
import BannerBg from "../../assets/bannerbg.png";
import SunImg from "../../assets/suraj.png";

export default function Banner() {
  return (
    <section className="banner" id="booking">
      <div className="banner-box">

        <img src={BannerBg} alt="" className="banner-bg" />

        <div className="banner-content">
          <h6>Divine Guidance</h6>

          <h1>
            Book your tarot session and
            <br />
            gain the clarity you seek.
          </h1>

          <button>Book A Session</button>
        </div>

        <div className="banner-right">
          <img src={SunImg} alt="" className="sun-img" />
        </div>

      </div>
    </section>
  );
}