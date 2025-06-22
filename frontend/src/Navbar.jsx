import { Link } from "react-router-dom";
export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg   "
            style={{
                backgroundColor: "#ffffff",
                color: "#424242",
                width: "100vw", // Full viewport width
                borderBottom: "1px solid #dee2e6"
            }}
        >
            <div className="container-fluid ">
                <Link className="navbar-brand p-2" to="/">
                    <img src="images/logo.svg" alt="logo" style={{ width: "25%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="support">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav >

    );
}