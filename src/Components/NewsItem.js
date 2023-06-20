import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
    <div className="text-center backgroundimage">
      <div className="my-3 backgroundimage"   >
        
        <div className="card backgroundimage" >
          <span
            className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 , }}
            
          >
            {source}
          </span>

          <img src={
              !imageUrl
                ? "https://i.pinimg.com/236x/15/5b/b9/155bb9e471357447041c7f8cffe076d2.jpg": imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"    >
            <h5 className="card-title" style={{color:"#e8475e"}}>{title}</h5>
            <p className="card-text" style={{color:"#e8475e"}} >
              
              {description}
              </p>
            <p className="card-text" >
              <strong>
              <small className="text" style={{color:"blue"}}>
                By {!author ? "Unkown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
              </strong>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewsItem;
