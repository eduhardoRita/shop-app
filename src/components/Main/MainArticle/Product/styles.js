import styled from "styled-components";

const ProductImage = styled.img`
    width: 250px;
    height: 300px;
`;

const TitleProduct = styled.h4`
    color: #ffffff;
    font-size: 1.25rem;
`;

const CostProduct = styled.p`
    color: #ffffff;
    padding-bottom: 20px;
`;

const ButtonBuy = styled.button`
    background-color: green;
    color: aliceblue;
    width: 150px;
    text-align: center;
    border-radius: 15px;
    padding: 5px;
    margin: 0 auto;
    display: block;
`;

export {ProductImage, TitleProduct, CostProduct, ButtonBuy};