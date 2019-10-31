import React from "react";

const BASE_URL_IMAGE = "http://localhost:3001/";

function CommerceItem(props) {
  const { commerce } = props;
  console.log(commerce);
  const urlImage = `${BASE_URL_IMAGE}${commerce.commerceImage}`;
  console.log(urlImage);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={urlImage} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{commerce.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CommerceItem;
