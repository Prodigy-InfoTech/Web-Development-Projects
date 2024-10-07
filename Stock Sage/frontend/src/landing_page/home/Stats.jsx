export default function Stats(){
    return(
        <>
        <div className="container p-3">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mb-4">Trust with confidence</h1>
                        <div style={{"marginLeft":"30px"}}>
                            <h3 className="p-2">Customer-first always</h3>
                            <p className="p-2 text-muted" style={{"width":"80%"}}>
                            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>


                            <h3 className="p-2">No spam or gimmicks</h3>
                            <p className="p-2 text-muted" style={{"width":"80%"}}>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                            </p>

                            <h3 className="p-2">The Zerodha universe</h3>
                            <p className="p-2 text-muted" style={{"width":"80%"}}>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                            </p>

                            <h3 className="p-2">Do better with money</h3>
                            <p className="p-2 text-muted" style={{"width":"80%"}}>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                            </p>
                        </div>
                        
                    
                </div>
                <div className="col-md-6">
                    <img src="/media/images/ecosystem.png" className="img-fluid mb-3" alt="HeroImage"/>
                    <div className="text-center">
                        <a className="link-opacity-100 m-3" style={{"textDecoration":"None"}} href="#">Explore our products <i className="fa-solid fa-arrow-right"></i></a> 
                        <a className="link-opacity-100 m-3" href="#" style={{"textDecoration":"None"}}>Try Kite demo <i className ="fa-solid fa-arrow-right"></i></a> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}