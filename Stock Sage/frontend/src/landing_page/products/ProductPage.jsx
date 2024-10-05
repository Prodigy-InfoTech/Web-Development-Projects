import NavBar from "../NavBar"
import Footer from "../Footer"
import Hero from "./Hero"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Universe from "./Universe"
import { Button } from "@mui/material"


export default function Productpage(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <LeftSection img={"kite.png"} 
        heading={"Kite"} 
        description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
         link1={true} 
         link2={true} 
         pic1={true} 
         pic2={true}
        />

        <RightSection
        heading={"Console"}
        description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
        link2={true}
        img={"console.png"}
        />


        <LeftSection
        heading={"Coin"}
        description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
        link1={true}
        pic1={true}
        pic2={true}
        img={"coin.png"}
        />


        <RightSection
        heading={"Kite Connect API"}
        description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        link1={true}
        img={"kiteconnect.png"}
        />


        <LeftSection
        heading={"Varsity mobile"}
        description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
        pic1={true}
        pic2={true}
        img={"varsity.png"}
        />

        <Universe/> 

        

        <Footer/>
        </>
    )
}