import "./Galary.css";
import GallaryBg from "../../assets/Gallary.jpg"

export default function Galary() {
    return (
        <>
            <section className="galary" id="galary">
                <div className="galary-h">
                    <h6>Photo Gallary</h6>
                    <h2>Unfolds the Mysteries of the <br /> Universe</h2>
                </div>

                <div className="galary-img" >
                    <img src={GallaryBg} alt="" />
                </div>

                <div className="galary-card-n">
                    <div className="card-p">
                        <img src={GallaryBg} alt="card" />
                    </div>

                     <div className="card-p">
                        <img src={GallaryBg} alt="card" />
                    </div>

                     <div className="card-p">
                        <img src={GallaryBg} alt="card" />
                    </div>

                     <div className="card-p">
                        <img src={GallaryBg}alt="card" />
                    </div>

                     <div className="card-p">
                        <img src={GallaryBg} alt="card" />
                    </div>
                </div>
            </section>
        </>
    )
}