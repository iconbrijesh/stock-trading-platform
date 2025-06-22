export default function RightSection({ imgURL, title, discription, learnMore }) {
    return (
        <div className="container mt-5">
            
            <div className="row">
                <div className="col-5 p-5 mt-5 text-muted">
                    <h2  className="text-start">{title}</h2>
                    <p className="text-start">{discription}</p>
                    <div>
                        <a href={learnMore}>Learn More</a>
                    </div>
                </div>

              <div className="col-2"></div>
                
                <div className="col-5 ">
                    <img src={imgURL} className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}
