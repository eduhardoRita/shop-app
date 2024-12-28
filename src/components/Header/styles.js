import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #1a1717;
`;

const MainTitle = styled.h1`
    width: 100%;
    font-family: "Bangers", system-ui, Arial, Helvetica, sans-serif;
    font-weight: 900;
    text-align: center;
    font-size: 6rem;
    color: #ffffff;
    margin: 20px;
    word-spacing: 3px;
    letter-spacing: 8px;
    text-shadow: -15px 0px 3px #36373c;
`;

export {StyledHeader, MainTitle};