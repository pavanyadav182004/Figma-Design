import "./about.css";
import AboutImg from "../../assets/about.png";

export default function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="heading">
                    <p>About Cards</p>
                    <h2>Unfolds the Mysteries of the Universe</h2>
                </div>

                <div className="about-h">
                    <div className="about-h1">
                        <h3>☤ Health</h3>
                        <p>Cards may guide you towday balance, <br />
                        helthing, and action that promote holistic <br />
                        wellness. Understand what your body and spirit need to thrive.
                        
                        </p>
                    </div>
                    <div className="about-h2">
                        <h3>🎢 Personal Growth</h3>
                        <p>Whether you're seeking confidence, <br/>
                        resilince, or inner clarity, the cards can <br />
                        illuminate your path thword becoming your <br />
                        highest self.
                        </p>


                    </div>
                </div>

                <div className="about-img">
                    <img src={AboutImg} alt="About Us" />
                </div>

                <div className="about-h">
                    <div className="about-h3">
                        <h3>❤︎ Love Life</h3>
                        <p>Gain clarity on emotional connections, feture <br />
                        possibilities, and the internationals of those <br />
                        around you-- and wheather you're single, dating or in a relationship.
                        </p>
                    </div>

                    <div className="about-h4">
                       <h3>🎓 Career</h3>
                       <p>
                        The cards may reveal new opportunities,   <br />
                        challenges, and how to again your work with <br />
                        your passing and purpose.
                       </p>
                    </div>
                </div>


            </section>
        </>
    )


}