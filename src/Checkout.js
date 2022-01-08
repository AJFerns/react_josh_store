import { imageListClasses } from "@mui/material";
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from 'react-flip-move';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/SUD_Dec/ILM/D35972372_INWLD_SUD_25th-31st-Dec_Graphics_ILM_PC_640x45._CB649592384_.jpg"
          alt="checkout_image"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                saving={item.saving}
                rating={item.rating}
              />
            
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
