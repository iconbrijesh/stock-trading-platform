export default function LeftImage({ imgURL, title, discription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 p-3">
                    <img src={imgURL} />
                </div>
                <div className="col-2"></div>

                <div className="col-5 px-5 mt-5 text-muted">
                    <h2 className="text-start">{title}</h2>
                    <p className="text-start">{discription} </p>

                    <div>
                        <a href={tryDemo}>Try demo</a>
                        <a href={learnMore} style={{marginLeft: "10%"}}>Learn more</a>

                    </div>
                    <div className="">
                        <a href={googlePlay}>
                            <img src="images/googlePlayBadge.svg" />
                        </a>
                        <a href={tryDemo}style={{marginLeft: "10%"}}  >
                            <img src="images/appstoreBadge.svg" />
                        </a>

                    </div>

                </div>


            </div>

        </div>


    );
}