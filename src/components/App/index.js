import React from "react";
import { MainContainer } from "./styles";
import Header from "../Header";
import ItemContainer from "../Main";
import Cart from "../Main/Cart";

const App = () => {
  return (
    <>
      <Header />
      <MainContainer >
        <ItemContainer />
        <Cart />
      </MainContainer>
    </>
  );
}

export default App;
