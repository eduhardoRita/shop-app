import { ButtonBuy, CostProduct, ProductContainer, ProductImageContainer, TitleProduct } from "./styles"
import ImageOfProductOne from "../../../../assets/game-one.webp"
import ImageOfProductTwo  from "../../../../assets/game-two.jpg"
import ImageOfProductThree from "../../../../assets/game-three.jpg"
import ImageOfProductFour from "../../../../assets/game-four.jpg"
import ImageOfProductFive from "../../../../assets/game-five.jpg"
import { useDispatch, useSelector } from "react-redux"
import { addCart, addProductToCart, fetchProductsOnScreen } from "../../../../state/shop.slice"
import { useEffect } from "react"
import { FAILED, IDLE, LOADING } from "../../../../state/status"

const Products = () => {
  const dispatch = useDispatch();    
  const products = useSelector((state) => state.shop.shop.products);
  const status = useSelector(state => state.shop.status)

    const productsOnScreen = [
      {
        id: 1,
        img: ImageOfProductOne,
        nameGame: "Grand Theft Auto",
        cost: "$107.38",
      },
      {
        id: 2,
        img: ImageOfProductTwo,
        nameGame: "Tekken 7",
        cost: "$143.97",
      },
      {
        id: 3,
        img: ImageOfProductThree,
        nameGame: "Call of Duty: Black Ops 2",
        cost: "$1610.46",
      },
      {
        id: 4,
        img: ImageOfProductFour,
        nameGame: "Mad Max",
        cost: "$51.11",
      },
      {
        id: 5,
        img: ImageOfProductFive,
        nameGame: "Skylines",
        cost: "$146.01",
      }
    ];

    useEffect(() => {
      status === IDLE && dispatch(fetchProductsOnScreen())
    }, [dispatch, status])

    const handleAddToCart = (product) => {
      dispatch(addProductToCart(product.id));
    };

    return (
      <>
        {products && products.map((product) => (
          <ProductContainer key={(product.id)}>
              <ProductImageContainer image={product.image} />
              <TitleProduct>{product.title}</TitleProduct>
              <CostProduct>Precio:{product.price}</CostProduct>
              <ButtonBuy onClick={() => handleAddToCart(product)}>Agregar</ButtonBuy>
          </ProductContainer>
        ))}

        {
          status === LOADING && <p>Cargando productos</p>
        }

        {
          status === FAILED && <p>Ha habido un error</p>
        }
      </>
    )
};


export default Products