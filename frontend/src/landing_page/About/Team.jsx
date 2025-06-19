export default function Team() {
  return (
    <div className="container">
      <div className="row  text-muted p-5 my-5">
        <h2 className=" fs-2 text-center">People</h2>
      </div>
      <div className="row p-5">
        <div className="col">
          <img
            src="images/nithinKamath.jpg"
            alt="Founder"
            style={{ borderRadius: "100%", width:"60%" }}
          />
          <div className="mt-4">
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col">
          <p className="text-start">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </p>
          <p className="text-start">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-start">Playing basketball is his zen.</p>
          <p className="text-start">
            Connect on <a>Homepage</a>/<a> TradingQnA </a>/ <a> Twitter </a>
          </p>
        </div>
      </div>
    </div>
  );
}
