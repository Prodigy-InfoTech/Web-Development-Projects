export default function RightSection({ heading, description, link1, link2, pic1, pic2, img }) {
    const imagePath = "media/images/" + img;
    return (
        <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="row ">
            <div className="col-md-6  d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h1 className="text-muted ms-5 me-5 pe-5 ps-5 ">{heading}</h1>
                    <p className="text-muted mt-3 ms-5 me-5  ps-5 lineSpacing">
                        {description}
                    </p>
                    <div className="mt-3 ms-5 me-5 pe-5 ps-5">
                        {
                           link1 && ( <a className="link-opacity-100 me-5" style={{ "textDecoration": "None" }} href="#">Try Demo <i className="fa-solid fa-arrow-right"></i></a> )
                        }

                        {
                            link2 && (<a className="link-opacity-100" style={{ "textDecoration": "None" }} href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>)
                        }
                        
                    </div>
                    <div className="mt-4 ms-5 me-5 pe-5 ps-5">
                        {
                            pic1 && (<img src="media/images/googlePlayBadge.svg" className="img-fluid me-4 badges" alt="..." />)
                        }
                        
                        {
                            pic2 && (<img src="media/images/appstoreBadge.svg" className="img-fluid me-4 badges" alt="..." />)
                        }
                    </div>

                </div>

            </div>
            <div className="col-md-6 ">
                {img && <img src={imagePath} className="img-fluid  me-5 pe-5 w-5 h-10 " alt="..." />}
            </div>
        </div>
    </div>
    )
}