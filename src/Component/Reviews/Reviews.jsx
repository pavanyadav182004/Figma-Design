import "./Reviews.css"
import Rajesh from "../../assets/rajesh.jpg"
import Aisa from "../../assets/Aisa.jpg"
import Mich from "../../assets/Michael.jpg"

export default function Reviews() {
    return (
        <>
            <section>
                <div className="reviews-main" id="reviews">
                    <h6>Testimonials</h6>
                    <p>Unfolds the Mysteries of the <br /> Universe</p>

                    <div className="reviews-1">
                        <img src={Rajesh} alt="" />

                        <div className="user-n">
                            <h3>Rajesh Kumar</h3>
                            <p>IT Dairector</p>
                            <p>It helps us set up employee credentials,
                                assign devices, and ensure compliance
                                effortlessly</p>
                        </div>
                    </div>

                    <div className="reviews-2">
                        <img src={Mich} alt="" />
                        <div className="user-n">
                            <h3>Aisha Khan</h3>
                            <p>VP of Operations</p>
                            <p>our new hires feel welcomed and well-
                                equipped. The built-in training modules and
                                task automation save my team hours of work
                                every week!</p>
                        </div>
                    </div>

                    <div className="reviews-3">
                        <img src={Aisa} alt="" />
                        <div className="user-n">
                            <h3>Michael Anderson</h3>
                            <p>CFO</p>
                            <p>The cost-effectiveness of TalentFlow is
                                remarkable. Automating onboarding has cut
                                down HR overhead costs significantly</p>
                        </div>
                    </div>


                    <div className="reviews-1">
                        <img src={Aisa} alt="" />

                        <div className="user-n">
                            <h3>Rajesh Kumar</h3>
                            <p>IT Dairector</p>
                            <p>It helps us set up employee credentials,
                                assign devices, and ensure compliance
                                effortlessly</p>
                        </div>


                    </div>

                    <div className="reviews-2">
                        <img src={Aisa} alt="" />

                        <div className="user-n">
                            <h3>Aisha Khan</h3>
                            <p>VP of Operations</p>
                            <p>our new hires feel welcomed and well-
                                equipped. The built-in training modules and
                                task automation save my team hours of work
                                every week!</p>

                        </div>

                    </div>

                    <div className="reviews-3">
                        <img src={Mich} alt="" />

                        <div className="user-n">
                            <h3>Michael Anderson</h3>
                            <p>CFO</p>
                            <p>The cost-effectiveness of TalentFlow is
                                remarkable. Automating onboarding has cut
                                down HR overhead costs significantly</p>


                        </div>

                    </div>


                    <div className="reviews-1">
                        <img src={Rajesh} alt="" />

                        <div className="user-n">
                            <h3>Rajesh Kumar</h3>
                            <p>IT Dairector</p>
                            <p>It helps us set up employee credentials,
                                assign devices, and ensure compliance
                                effortlessly</p>
                        </div>


                    </div>

                    <div className="reviews-2">
                        <img src={Mich} alt="" />

                        <div className="user-n">
                            <h3>Aisha Khan</h3>
                            <p>VP of Operations</p>
                            <p>our new hires feel welcomed and well-
                                equipped. The built-in training modules and
                                task automation save my team hours of work
                                every week!</p>

                        </div>

                    </div>

                    <div className="reviews-3">
                        <img src={Rajesh} alt="" />

                        <div className="user-n">
                            <h3>Michael Anderson</h3>
                            <p>CFO</p>
                            <p>The cost-effectiveness of TalentFlow is
                                remarkable. Automating onboarding has cut
                                down HR overhead costs significantly</p>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}