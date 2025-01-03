import { removeProductFromCart } from "../../../state/shop.slice";
import { ProductImageContainer } from "../MainArticle/Product/styles";
import { CartTitle, StateCart, ProductsInCart, StyledCard, SubTitleCart } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  let productsInCart = useSelector((state) => state.shop.shop.cart);

  if(!Array.isArray(productsInCart)) {
    productsInCart = [];
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProductFromCart(productId))
  }

  return (
    <StyledCard>
      <CartTitle>Carrito</CartTitle>
      <SubTitleCart>Objetos en carrito:</SubTitleCart>
      <ProductsInCart>
        {productsInCart.length === 0 ? (
          <StateCart>No hay productos en carrito</StateCart>
        ) : (
          productsInCart.map((product, index) => (
            <StateCart key={index}>
              <ProductImageContainer image={product.image}/>
              <h4>{product.title}</h4>              
              <p><b>Precio: </b>{product.price}</p>  
              <button onClick={()=> handleRemoveFromCart((product.id))}>Eliminar</button>
            </StateCart>
          ))
        )}
      </ProductsInCart>
    </StyledCard>
  );
};

export default Cart;
