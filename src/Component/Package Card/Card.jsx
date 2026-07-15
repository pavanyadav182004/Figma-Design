import "./card.css"

import Img1 from "../../assets/reading.png"

export default function Card() {
    return (
        <section className="card" id="card">
            <div className="card-h">
                <p>Personalized Cosmic Gudiance</p>
                <h1>Discover an Affordable Package</h1>
            </div>
            <div className="card-d">
                < div className="card-d1">
                    <img src={Img1} alt="Service" />
                </div>

                < div className="card-d1">
                    <img src={Img1} alt="Service" />
                </div>

                < div className="card-d1">
                    <img src={Img1} alt="Service" />
                </div>

                < div className="card-d1">
                    <img src={Img1} alt="Service" />
                </div>

                 < div className="card-d1">
                    <img src={Img1} alt="Service" />
                </div>

            </div>
        </section>
    )
}
