import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {}, []);
  // if no dependency array => useEffect is called on every render
  // if the dependency array is empty => the useeffect is called on initial render and just once
  // if the dependency is on [btnNameReact] then useEffect is called everytime [btnNameReact] get changes
  const loginLogout = () => {
    if (btnNameReact == "Login") {
      setBtnNameReact("Logout");
    } else {
      setBtnNameReact("Login");
    }
    console.log(btnName);
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // subscribing to the store using the Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-3 py-3 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <Link to="/">
          <img className="w-64" src={LOGO_URL} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <button onClick={loginLogout} className="login">
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
