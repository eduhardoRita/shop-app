import styled from "styled-components";

const ProductContainer = styled.div`
    width: 19%;
    height: auto;
`;

const ProductImage = styled.img`
    width: 250px;
    height: 300px;
`;

const ProductImageContainer = ({ image }) => {
    return (
        <ProductImage src={image} />
    )
}

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

export {ProductContainer, ProductImage, ProductImageContainer, TitleProduct, CostProduct, ButtonBuy};