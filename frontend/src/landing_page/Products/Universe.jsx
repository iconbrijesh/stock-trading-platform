import SignUpFree from "@/SignUpFree";
export default function Universe() {
    return (
        <div className="container">
            <p style={{ margin: "5rem 5rem" }}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <h3 className="text-secondary mb-4">The Zerodha Universe</h3>
            <p className="fs-6">Extend your trading and investment experience even further with our partner platforms</p>

            <div className="row mt-5 mb-4">
                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/zerodhaFundhouse.png" alt='zerodhaFundHouse_logo' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</span>

                    </a>
                </div>




                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/sensibullLogo.svg" alt='Sensibull' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</span>

                    </a>
                </div>

                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/tijori.svg" alt='tijori_logo' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.</span>

                    </a>
                </div>



            </div>



            <div className="row mt-4 mb-5">
                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/streakLogo.png" alt='Streak_logo' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</span>

                    </a>
                </div>




                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/smallcaseLogo.png" alt='smallcase_logo' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</span>

                    </a>
                </div>

                <div className="col-4">
                    <a href="#">
                        <div>
                            <img src="images/dittoLogo.png" alt='ditto_logo' className="img-fluid" style={{ height: "70px", width: "150px" }} />
                        </div>
                        <span style={{ fontSize: "10px" }} className="text-muted">Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling</span>

                    </a>
                </div>



            </div>

            <SignUpFree />




        </div>


    );
}