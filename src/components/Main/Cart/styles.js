import styled from "styled-components";

const StyledCard = styled.article`
    background-color: #333434;
    width: 25%;
`;

const CartTitle = styled.h2`
    color: #ffffff;
`;

const SubTitleCart = styled.h3`
    color: #ffffff;
`;

const ProductsInCart = styled.section`
    background-color: #0a2237;
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0 50px;
`;

const StateCart =  styled.div`
    color: #ffffff;
`;

export {StyledCard, CartTitle, SubTitleCart, ProductsInCart, StateCart};