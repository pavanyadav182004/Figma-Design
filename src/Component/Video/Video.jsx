import "./Video.css";

import Bg from "../../assets/vn.png";

import MainPoster from "../../assets/video1.jpg";

import Poster1 from "../../assets/v1.jpg";
import Poster2 from "../../assets/v2.jpg";
import Poster3 from "../../assets/v3.jpg";
import Poster4 from "../../assets/v4.jpg";
import Poster5 from "../../assets/v5.jpg";

export default function Video() {
  return (
    <section className="video-section" id="video">

      <img src={Bg} alt="" className="video-bg"/>

      <div className="video-heading">
        <h6>Our Videos</h6>
        <h2>
          Unfolds the Mysteries of the
          <br />
          Universe
        </h2>
      </div>

      <div className="video-wrapper">

        {/* Left */}

        <div className="main-video">

          <img src={MainPoster} alt="" />

          <div className="video-title">
            <h2>Tarot Reading</h2>
          </div>

          <div className="main-play">
            ▶
          </div>

        </div>

        {/* Right */}

        <div className="video-grid">

          <div className="video-card">
            <img src={Poster1} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster2} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster3} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster4} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster5} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster2} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster3} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

          <div className="video-card">
            <img src={Poster4} alt="" />
            <span>Video</span>
            <div className="play-btn">▶</div>
          </div>

        </div>

      </div>

    </section>
  );
}