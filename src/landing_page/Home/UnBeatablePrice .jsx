export default function UnBeatablePrice () {
    return (
        <div className="container">
            <div className="row align-items-center">
                {/* Image Section with Heading */}
                <div className="col-md-6">
                    <h3 className="text-secondary mb-4">Unbeatable pricing</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <img src="images/price0.svg" alt="trust image" className="img-fluid rounded w-25" />
                        <img src="images/price0.svg" alt="trust image" className="img-fluid rounded w-25" />
                        <img src="images/price20.svg" alt="trust image" className="img-fluid rounded w-25" />
                    </div>
                </div>

                {/* Text Section - Ensure Vertical Alignment */}
                <div className="col-md-6 d-flex align-items-center">
                    <p  className="mx-4 ">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
            </div>
        </div>
    );
}