import "./Brokerage.css"
export default function Brokerage({img,heading,description}){
    let imagePath = "media/images/"+img;

    return(
        <div className="container mb-5 p-5 d-flex flex-column align-items-center justify-content-center">
            <img src={imagePath} className="img-fluid imgPrics" alt="..."></img>
            <h3 className=" text-center mb-3">
                {heading}
            </h3>
            <p className="text-muted justify">
                {description}
            </p>
        </div>
    )
}