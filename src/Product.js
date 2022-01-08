import React from "react";
import img1 from "./images/realmenarzo.jpeg";
import "./Product.css";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import { useStateValue } from "./StateProvider";
import Wobble from "react-reveal/Wobble";
function Product({ id, title, image, price, cut_price, saving, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket);
  const addtoBasket = () => {
    //dispatch data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        saving: saving,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <Zoom>
          <p className="product__title">{title}</p>
        </Zoom>
        <p className="product__price">
          <Roll>
            <small className="rupees__symbol">₹</small>
            <strong>{price}</strong>
          </Roll>
          <small className="rupees__symbol2">₹</small>
          <strong className="cut_price">{cut_price}</strong>

          <small className="product__saving">{saving}</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <Wobble>
        <img src={image} />
      </Wobble>
      <button className="product__button" onClick={addtoBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
