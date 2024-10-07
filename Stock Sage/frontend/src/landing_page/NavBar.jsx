import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
            <div className="container p-2 parent">
                <Link to={"/"}><img src="/media/images/logo.svg" alt="Logo" className="logo ms-5"  /></Link>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</> 
    )
}