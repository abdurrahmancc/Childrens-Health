import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="text-uppercase home-title fw-bolded text-center">
        I am helping the child of needy people.
      </h1>

      <div class="input-group mb-3 search-input  mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-primary" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
