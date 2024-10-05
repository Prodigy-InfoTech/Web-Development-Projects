export default function Awards(){
    return(
        <div className="container p-3">
            <div className="row">
                <div className="col-md-6">
                <img src="/media/images/largestBroker.svg" className="img-fluid pb-4" alt="Largest Brokers"/>
                </div>
                <div className="col-md-6">
                    <h1>
                        Largest stock broker of India
                    </h1>
                    <p className="mt-4 mb-4">
                    That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <div className="row mt-3">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity and derivaties</p></li>
                                <li><p>Currency derivaties</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Government</p></li>
                            </ul>
                        </div>
                        <img src="/media/images/pressLogos.png" className="img-fluid mt-4 pt-3" alt="Largest Brokers"/>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}