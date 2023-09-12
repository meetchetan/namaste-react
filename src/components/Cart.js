import { useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between w-6/12 m-auto align-middle">
        <h1 className="p-2 m-2 text-3xl font-bold">Cart</h1>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
          Clear Cart 🗑️
        </button>
      </div>
      <div className="w-6/12 m-auto">
      {cartItems.length === 0 && <h1 className="m-5 text-2xl">Cart is Empty! Please add some items to the cart</h1>}
        <CartItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
