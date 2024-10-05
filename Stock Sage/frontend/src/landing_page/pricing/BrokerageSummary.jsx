import Brokerage from "./Brokerage"

export default function BrokerageSummary(){
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-4">
                    <Brokerage heading="Free equity delivery" description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage." img="pricing0.svg"/>
                    </div>
                <div className="col-md-4"><Brokerage heading="Intraday and F&O trades"
                description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
                img="intradayTrades.svg"/></div>
                <div className="col-md-4"><Brokerage heading="Free direct MF" description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
                img="pricing0.svg"/></div>
            </div>
            <hr />
        </div>
            
    )
}