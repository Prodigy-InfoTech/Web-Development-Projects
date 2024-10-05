import WatchList from "../WatchList/WatchList.jsx"
import { Route, Routes } from "react-router-dom";
import Summary from "../Summary/Summary.jsx";
import Orders from "../Orders/Orders.jsx";
import "./Dashboard.css"
import Holdings from "../Holdings/Holdings.jsx";
import Positions from "../Positions";
import Funds from "../Funds/Funds.jsx";
import { v4 as uuidv4 } from 'uuid';
import Charts from "../Charts/Charts.jsx";


export default function Dashboard() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-4 heightFull">
                    <WatchList />
                </div>

                <div className="col-md-8 border  ">
                    <Routes key = {uuidv4()}>
                        <Route key = {uuidv4()} path="/" element={<Summary />} />
                        <Route key = {uuidv4()} path="/orders" element={<Orders />} />
                        <Route key = {uuidv4()} path="/holdings" element={<Holdings />} />
                        {/* <Route key = {uuidv4()} path="/positions" element={<Positions />} /> */}
                        <Route key = {uuidv4()} path="/funds" element={<Funds />} />
                        <Route key = {uuidv4()} path="/charts" element={<Charts />} />
                        {/* <Route path="/apps" element={<Apps />} />    */}
                    </Routes>
                    
                </div>
            </div>
        </div>
    )
}