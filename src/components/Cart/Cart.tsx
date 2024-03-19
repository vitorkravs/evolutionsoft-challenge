import "./styles.scss";

import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div id="cart">
      <div id="cart-items-container">
        <div className="card-items">
          <p>X-Salada</p>
          <p>R$ 12.99</p>
        </div>
        <div className="card-items">
          <p>X-Bacon</p>
          <p>R$ 22.50</p>
        </div>
        <div className="card-items">
          <p>X-frango</p>
          <p>R$ 18.99</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
