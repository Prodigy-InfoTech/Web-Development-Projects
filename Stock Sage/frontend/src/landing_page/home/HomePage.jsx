import Hero from "./Hero.jsx"
import Awards from "./Awards.jsx"
import Stats from "./Stats.jsx"
import Pricing from "./Pricing.jsx"
import Education from "./Education.jsx"
import OpenAccount from "../OpenAccount.jsx"
import NavBar from "../NavBar.jsx"
import Footer from "../Footer.jsx"


export default function HomePage(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
        
    )
}