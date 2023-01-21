import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component"
import '../products/products.styles.scss'

const ProductCard=({product})=>{
  const { addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

    const { name, price, imageUrl } = product;
    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button onClick={addProductToCart } button_Type='inverted' type="button">Add to card</Button>
      </div>
    );



}


export default ProductCard;