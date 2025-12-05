import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiBowlFood } from "react-icons/pi";

type MealCardProps = {
  title: string;
  text: string;
  icon: string;
  white?: boolean;
}

function MealCard({title, text, icon, white=false}: MealCardProps) {
  const getIcon = (type: string): JSX.Element => {
    switch(type) {
      case "Arrow":
        return <HiOutlineArrowUpTray className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      
      case "Meal":
        return <PiBowlFood className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />

      case "Truck":
        return <HiOutlineTruck className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      
      default:
        return <span>Undefined</span>
    }
  }
  return (
    <div 
    className={`
    rounded-2xl flex flex-col
    justify-center items-center
    text-center aspect-square p-2 gap-8
    ${white && "bg-white shadow-lg"}`}
    >
      <div
      className="
      rounded-full bg-white
      p-8 shadow-md
      "
      >
        {getIcon(icon)}
      </div>

      <div>
        <h1
        className="
        font-(family-name:--font-header) text-xl
        font-light
        ">
          {title}
        </h1>
        <p className="m-0.5">{text}</p>
      </div>
    </div>
  );
}

export default MealCard;