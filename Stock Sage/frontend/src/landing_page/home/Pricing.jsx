export default function Pricing(){
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <div className="mb-3 text-muted">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </div>
                    <a className="link-opacity-100" style={{"textDecoration":"None"}} href="#">See our pricing <i className="fa-solid fa-arrow-right"></i></a> 
                </div>
                <div className="col-md-2"></div>

                <div className="col-md-5">
                    <div className="row text-center p-3">
                        <div className="col border p-3">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mb-3">₹20</h1>
                            <p>
                                Intraday F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}