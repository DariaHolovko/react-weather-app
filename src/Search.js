import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <div className="search-engine">
      <form>
        <input type="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
