import LeftBar from "./LeftBar.jsx"
import Menu from "./Menu.jsx"
import "./TopBar.css"
export default function TopBar(){
    return(
        <>
        <div className="container-fluid sticky-top whiteBackgroud">
            <div className="row">
                <div className="col-md-4 border">
                <LeftBar/>
                </div>
                <div className="col-md-8 border">
                <Menu/>
                </div>
            </div>
        </div>        
        </>
    )
}