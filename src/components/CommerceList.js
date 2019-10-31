import React, { useState, useEffect } from "react";
import { getCommerces } from "../repository/repository";
import { Link } from "react-router-dom";
import CommerceItem from "./CommerceItem";

const CommerceList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCommerces().then(response => {
      setData(response.result);
    });
  }, []);

  return (
    <div className=" container">
      <h3 className="card-title">List of Available Products</h3>
      <hr />
      <div class="row">
        <div class="col-sm">
          {data.map(commerce => (
            <CommerceItem commerce={commerce} key={commerce.commerceId} />
          ))}
        </div>
      </div>
      <hr />
      <Link to="/checkout">
        <button className="btn btn-success float-right">Checkout</button>
      </Link>
      <Link to="/cart">
        <button
          className="btn btn-primary float-right"
          style={{ marginRight: "10px" }}
        >
          View Cart
        </button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CommerceList;
