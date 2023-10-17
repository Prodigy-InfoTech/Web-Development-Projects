import React from "react";

// export class NewsItem extends Component {
  // render() {

    // convert it into function based components
    const NewsItem = (props)=>{

    let{title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">

          {/*Use Badge */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0
            }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>

          <img src={!imageUrl?"https://www.bigtextrailerworld.com/content/mu-plugins/bttw-inventory-manager/assets/img/NoPhotoAvailable.png":imageUrl} className="card-img-top" alt="Not Available"/>
              <div className="card-body">
                <h5 className="card-title">{title?title:"Unknown"}...</h5>
                <p className="card-text"> {description}...</p>
                {/* Make date object and now u can use all js functions on it */}
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
              </div>
        </div>
      </div>
    );
  }
// }

export default NewsItem;
