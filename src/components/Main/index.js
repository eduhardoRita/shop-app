import ShoppingSection from "./MainArticle";
import { SecondaryTitle, StyledItemContaineir } from "./styles";

const ItemContainer = () => {
    return (
        <StyledItemContaineir>
            <SecondaryTitle>Selecciona tu juego favorito</SecondaryTitle>
            <ShoppingSection />
        </StyledItemContaineir>
    )
}

export default ItemContainer;