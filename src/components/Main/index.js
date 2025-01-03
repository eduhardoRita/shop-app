import ShoppingSection from "./MainArticle";
import { SecondaryTitle, StyledItemContaineir } from "./styles";

const ItemContainer = () => {
    return (
        <StyledItemContaineir>
            <SecondaryTitle>Aqui encontraras diferentes productos</SecondaryTitle>
            <ShoppingSection />
        </StyledItemContaineir>
    )
}

export default ItemContainer;