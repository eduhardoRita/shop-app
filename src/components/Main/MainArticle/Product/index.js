import { ButtonBuy, CostProduct, ProductImage, TitleProduct } from "./styles"
import ImageOfProductOne from "../../../../assets/game-one.webp"
import ImageOfProductTwo  from "../../../../assets/game-two.jpg"
import ImageOfProductThree from "../../../../assets/game-three.jpg"
import ImageOfProductFour from "../../../../assets/game-four.jpg"
import ImageOfProductFive from "../../../../assets/game-five.jpg"
import { useDispatch } from "react-redux"
import { addCart } from "../../../../state/shop.slice"

const Products = () => {
  const dispatch = useDispatch();    
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
      },
    ];

    const handleAddToCart = (product) => {
      dispatch(addCart(product));
    };

    return (
      <>
        {productsOnScreen.map((product) => (
          <div key={(product.id)}>
              <ProductImage src={product.img} />
              <TitleProduct>{product.nameGame}</TitleProduct>
              <CostProduct>Precio:{product.cost}</CostProduct>
              <ButtonBuy onClick={() => handleAddToCart(product)}>Agregar</ButtonBuy>
          </div>
        ))}
      </>
    )
};


export default Products