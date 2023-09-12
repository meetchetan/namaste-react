import React from "react";
import { RES_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    // Dispach an action
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-20 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleDeleteItem(item)}
              >
                🗑️
              </button>
            </div>
            <img src={RES_IMG + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
