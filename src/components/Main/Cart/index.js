import { removeFromCart } from "../../../actions";
import { ProductImage } from "../MainArticle/Product/styles";
import { CartTitle, ProductsInCart, StateCart, StyledCard, SubTitleCart } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.products.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  return (
    <StyledCard>
      <CartTitle>Carrito</CartTitle>
      <SubTitleCart>Objetos en carrito:</SubTitleCart>
      <ProductsInCart>
        {productsInCart.length === 0 ? (
          <StateCart>No hay productos en carrito</StateCart>
        ) : (
          productsInCart.map((product) => (
            <StateCart key={product.id}>
              <ProductImage src={product.img}/>
              <h4>{product.nameGame}</h4>              
              <p><b>Precio: </b>{product.cost}</p>  
              <button onClick={()=> handleRemoveFromCart((product.id))}>Eliminar</button>
            </StateCart>
          ))
        )}
      </ProductsInCart>
    </StyledCard>
  );
};

export default Cart;
