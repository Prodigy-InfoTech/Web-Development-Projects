export default function Hero() {
    return (
        <>
            <div className="container mt-5 pb-3 d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-muted p-3">Technology</h1>
                <div className="text-muted p-3 pb-4">
                    <h4 className="font-weight-normal">Sleek, modern, and intuitive trading platforms</h4>
                </div>
                <div className="text-muted mt-2">
                    Check out our &nbsp;
                    <a className="link-opacity-100" style={{ "textDecoration": "None" }} href="#">investment Offerings <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <hr />
            </div>
            <div className="container"><hr /></div>

        </>
    )
}