import { RES_IMG } from "../utils/constants";

const ResturentCard = (props) => {
  const { resData } = props;
  // const ResturentCard = ({resName, cusine}) => {
  // destructuring const {resName, cusine} = props
  // and pass props
  // console.log(props)
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={RES_IMG + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating} Star</h5>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
    </div>
  );
};

// Higher order component

// Input -> RestaurentCard => RestaurantCardPromoted
export const withPromotedlabel = (ResturentCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
        <ResturentCard {...{ resData }}/>
      </div>
    )
  }
}

export default ResturentCard;
