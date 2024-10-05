import "./UniverseComponent.css"

export default function UniverseComponent({ img, description }) {

    let imagePath = "media/images/" + img;
    return (

        <div className="container ms-5 me-5 ps-5 pe-5 mb-5 pb-5 mt-3">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <img src={imagePath} className="img-fluid m-3 symbol" alt="..." />
                <p className="text-center text-muted justifyCenter">
                    {description}
                </p>
            </div>

        </div>
    )
}