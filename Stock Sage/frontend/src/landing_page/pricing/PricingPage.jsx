import Hero from "./Hero.jsx";
import NavBar from "../NavBar.jsx"
import Footer from "../Footer.jsx"
import BrokerageSummary from "./BrokerageSummary.jsx";
import OpenAccount from "../OpenAccount.jsx"

export default function PricingPage(){
    return(
        <>
        <NavBar/>
        <Hero/>        
        <BrokerageSummary/>
        <OpenAccount/>
        <Footer/>
        </>
    )
}