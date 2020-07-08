import React from "react";
import "./homepage.style.scss";
import Direcotry from "../../components/directory/directory.component";
function Homepage(props) {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <Direcotry />
    </div>
  );
}

export default Homepage;
