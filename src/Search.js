import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <div className="search-engine">
      <form>
        <input
          type="search"
          placeholder="Enter your city..."
          className="search-form"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}
