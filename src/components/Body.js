// 55 minutes

import ResturentCard, { withPromotedlabel } from "./ResturentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("body render");
  let topRated = () => {
    const filteredList = listOfResturent.filter(
      (res) => res.info.avgRating > 4.2
    );
    console.log(filteredList);
    setFilteredResturent(filteredList);
  };

  // State variable - super paowerful variable
  const [listOfResturent, setListOfResturent] = useState(null);
  const [filteredResturent, setFilteredResturent] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantcardPromoted = withPromotedlabel(ResturentCard);

  // it's a basic array desturcturing
  // const arr = useState(resList);
  // const [listOfResturent, setListOfResturent] = arr;
  // const listOfResturent = arr[0];
  // const setListOfResturent = arr[1];

  console.log(listOfResturent);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfResturent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  // conditional Reddering - Rendering on the basis of condition is known as conditional rendering
  // if (listOfResturent.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        looks like you are offline!, please check your internet connection
      </h1>
    );

  if (!listOfResturent) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restruant cards and update the UI
              // searchText
              console.log(searchText);
              const filteredResturent = listOfResturent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredResturent);
              setFilteredResturent(filteredResturent);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={topRated}
          >
            Top rated Resturent
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredResturent.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              {
                /* if the restaurant is promoted then add a promoted label to it*/
                res.info.aggregatedDiscountInfoV3.header ? (
                  <RestaurantcardPromoted resData={res} />
                ) : (
                  <ResturentCard resData={res} />
                )
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
