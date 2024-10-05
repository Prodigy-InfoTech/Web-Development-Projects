import "./Hero.css"

export default function Hero(){
    return(
        <>
        <div className="container d-flex flex-column mt-5 mb-5 pb-5 align-items-center justify-content-center">
            <h1 className="m-3 mt-4 mb-4 text-center ">Pricing</h1>
            <p className="mb-3 heroDescp text-muted ">
            Free equity investments and flat ₹20 intraday and F&O trades
            </p>
        </div>
        <div className="container mb-5">
        <hr/>
        </div>
        </>
    )
}