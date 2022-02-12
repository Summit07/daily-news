import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    console.log("hello i am constructur");
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, more } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {title}...{" "}
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                style={{ left: "90%", zIndex: "1" }}
              >
                {more}
                <span class="visually-hidden">unread messages</span>
              </span>
              <span class="badge rounded-pill bg-success">Success</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {author ? author : "Unknow"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
