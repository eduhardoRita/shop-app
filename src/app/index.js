import React from "react";
import { MainContainer } from "./styles";
import Header from "../components/Header";
import Cart from "../components/Main/Cart";
import ItemContainer from "../components/Main"

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
