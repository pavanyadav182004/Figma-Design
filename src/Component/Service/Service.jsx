import "./Service.css"
import Img from "../../assets/card.png"


export default function Service() {
    return (
        <>
            <section className="service" id="service">
                <div className="service-heading">
                    <p>Divine Service</p>
                    <h1>What We offer to  <br />
                        Illuminate Your Journey</h1>
                </div>
                <div className="box-full">

                    <div className="box-1">
                        <h1> ✶ Tarot Spread Readings</h1>
                    </div>
                    <div className="box-2">
                        <p>Unblock clarity thought Tarot spreads - a sacred <br />
                            space to free your energy. gain true insight, and <br />
                            waik your soul's unique path

                        </p>
                    </div>

                </div>
                <h4>Intuitive Consultion</h4>
                <h3>Crystal Guidance</h3>

                <div className="card-c">
                    <img src={Img} alt="Service" />
                </div>

               
            </section>
        </>
    )
}