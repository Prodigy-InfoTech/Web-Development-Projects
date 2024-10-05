import { useState } from "react"
import "./Menu.css"
import { Link } from "react-router-dom"
export default function Menu() {

    const [selectedMenu,setSelectedMenu] = useState(0);
    const [isProfileDropDownOpen,setIsProfileDropDownPpen] = useState(false);

    let handleMenuClick = (index)=>{
        setSelectedMenu(index);
    }

    let handleProfileClick = ()=>{
        setIsProfileDropDownPpen(!isProfileDropDownOpen);
    }



    return (
        <div className="container-fluid m-1 d-flex justify-content-between">
            <div className="kiteogo">
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg" className="img-fluid kiteLogo mt-2" alt="" />
            </div>
            <div className="menubar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={(selectedMenu === 0)?"nav-link active highlightElement":"nav-link active"} aria-current="page" to="/" onClick={()=>handleMenuClick(0)}>Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={(selectedMenu === 1)?"nav-link active highlightElement":"nav-link active"} to="/orders" onClick={()=>handleMenuClick(1)}>Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={(selectedMenu === 2)?"nav-link active highlightElement":"nav-link active"} to="/holdings" onClick={()=>handleMenuClick(2)}>Holdings</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className={(selectedMenu === 3)?"nav-link active highlightElement":"nav-link active"} to="/positions" onClick={()=>handleMenuClick(3)}>Positions</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className={(selectedMenu === 4)?"nav-link active highlightElement":"nav-link active"} to="/funds" onClick={()=>handleMenuClick(4)}>Funds</Link>
                                </li>
                                <li className="nav-item">
                                <Link className={(selectedMenu === 5)?"nav-link active highlightElement":"nav-link active"} to="/charts" onClick={()=>handleMenuClick(5)}>Charts</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}