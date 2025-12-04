import { AiFillFire } from "react-icons/ai";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { Dish } from "../../data/dishes";
import PrimaryButton from "../primary-button/primary-button";

type CardProps = {
  item: Dish
  focus: boolean
  visibleSlides: number
  isMobile: boolean
}
function Card({ item, focus, visibleSlides, isMobile }: CardProps) {
  let className;
  if(isMobile || !focus) {
    className="h-40 scale-y-100 opacity-80"
  } else {
    className="h-60 scale-y-110 opacity-100"
  }

  return (
    <div
      key={item.id}
      className={`m-2 px-2 flex-none snap-child md:m-0 ${visibleSlides === 1 ? "w-full" : "w-1/3"}`}>
      <div
        className={`
          bg-white rounded-2xl shadow-[0px_4px_14px_rgba(149,157,165,0.2)] 
          flex flex-col gap-1 justify-center items-center 
          transition-all duration-500 w-full h-auto p-4 
          ${className}`}
      >
        {/* Dish image */}
        <img
          src={item.image}
          alt={item.title}
          className={`${focus ? "w-[80%]" : "w-[50%]"} object-cover justify-center`}
        />

        {/* Header */}
        <div className="flex justify-between w-full items-center mt-2">
          <h1 className="text-lg font-bold truncate">{item.title}</h1>
          <div className="flex items-center gap-1 border border-green-500 rounded-lg px-2 py-1">
            <AiFillFire size={20} className="text-green-500" />
            <p className="text-green-500 font-bold text-sm m-0">02:21:11</p>
          </div>
        </div>

        <div className={`${!focus && !isMobile && "hidden"} w-full mt-2 flex flex-col gap-2`}>
          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <FaStar size={16} className="text-green-500" />
              <FaStar size={16} className="text-green-500" />
              <FaStar size={16} className="text-green-500" />
              <FaStarHalfStroke size={16} className="text-green-500" />
              <FaRegStar size={16} className="text-green-500" />
            </div>
            <p className="text-gray-600 text-sm m-0">214 reviews</p>
          </div>
          {/* Flavor / preferences */}
          <div className="text-left">
            <p className="text-gray-600 text-xs m-0">Excellent flavor for your preference with:</p>
            <ul className="list-none pl-3 mt-1">
              {item.preferences.map((flavor, index) => (
                <li key={index} className="text-gray-600 text-xs whitespace-nowrap">
                  {flavor}
                </li>
              ))}
            </ul>
          </div>
        </div>
                      
        {/* Footer / Order */}
        <div className="flex justify-between items-center w-full mt-auto gap-4">
          <p className="text-green-500 font-title text-2xl m-0">${item.cost}</p>
          <PrimaryButton className="w-[120px]" />
        </div>
      </div>
    </div>
  );
}

export default Card;