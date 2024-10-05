import UniverseComponent from "./UniverseComponent"
import { Button } from "@mui/material"

export default function Universe() {
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className=" d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-muted mb-4">The Zerodha Universe</h1>
                    <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>

           <div className="container d-flex align-items-center justify-content-center">
                <UniverseComponent img={"zerodhaFundhouse.png"} description={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals"}/>
                <UniverseComponent img={"sensibullLogo.svg"} description={"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."}/>
                <UniverseComponent img={"goldenpiLogo.png"} description={"Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more."}/>
           </div>

           <div className="container d-flex align-items-center justify-content-center">
                <UniverseComponent img={"streakLogo.png"} description={"Systematic trading platform that allows you to create and backtest strategies without coding."}/>
                <UniverseComponent img={"smallcaseLogo.png"} description={"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."}/>
                <UniverseComponent img={"dittoLogo.png"} description={"Personalized advice on life and health insurance. No spam and no mis-selling."}/>
           </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
            <Button variant="contained" className="mb-5" style={{"width":"35%","height":"50px"}}>Sign up for free</Button>
        </div>
        </>
    )
}