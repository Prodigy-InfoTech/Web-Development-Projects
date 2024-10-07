import "./Team.css"

export default function Team() {
    return (
        <div className="container p-5 mb-5">
            <h1 className="text-center text-muted mb-5">People</h1>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <img src="/media/images/nithinKamath.jpg" className="img-fluid ceoPic" alt="ceoPic" />
                    <div className="text-muted mt-3" >
                        <h4>Nithin Kamath</h4>
                    </div>
                    <div className="text-muted mt-2">
                    Founder, CEO
                    </div>

                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-start lineSpacing">
                    <div className="text-muted mb-3">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </div>

                    <div className="text-muted mb-3">
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </div>

                    <div className="text-muted mb-3">
                    Playing basketball is his zen.
                    </div>

                    <div className="text-muted">
                    Connect on Homepage / TradingQnA / Twitter
                    </div>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )
}