import React from "react";
import { HomePageContainer } from "./homepage.styles";
import Direcotry from "../../components/directory/directory.component";
function Homepage(props) {
  return (
    <HomePageContainer>
      <h1>Home Page</h1>
      <Direcotry />
    </HomePageContainer>
  );
}

export default Homepage;
