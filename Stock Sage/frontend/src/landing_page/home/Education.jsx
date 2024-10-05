export default function Education(){
    return (
        <>
        <div className="container p-2">
            <div className="row">
                <div className="col-md-6">
                <img src="/media/images/education.svg" className="img-fluid mb-3" alt="HeroImage"/>
                </div>

                <div className="col-md-6">
                    <div className="mb-5">
                        <br /> <br />
                        <h1 className="mb-4">Free and open market education</h1>
                        <div className="mb-3 text-muted">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </div>
                        <a className="link-opacity-100" style={{"textDecoration":"None"}} href="#">Varsity <i className="fa-solid fa-arrow-right"></i></a> 
                    </div>
                    <div>
                        <div className="mb-3 text-muted">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </div>
                        <a className="link-opacity-100" style={{"textDecoration":"None"}} href="#">Trading Q&A <i className="fa-solid fa-arrow-right"></i></a> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}