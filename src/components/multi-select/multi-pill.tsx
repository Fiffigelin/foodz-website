import { PiBowlFood } from "react-icons/pi";
import { SingleSelectItem } from "./multi-select";
import { MdClose } from "react-icons/md";

type PillProps = {
  item: SingleSelectItem;
  onDelete: (item: SingleSelectItem) => void;
    icon?: "Food";
}

function MultiPill({item, onDelete, icon}: PillProps) {
    const getIcon = (type: string | undefined): JSX.Element | null => {
      switch(type) {
        case "Food":
          return <PiBowlFood className="w-3 h-3 md:w-4 lg:w-4 lg:h-4" />
        
        default:
          return null
      }
    }

  return (
    <div
      key={item.id}
      className="flex items-center gap-1 bg-green-100 text-black rounded-full px-2 py-1 text-base"
    >
      {getIcon(icon)}
      {item.name}
      <button onClick={() => onDelete(item)} className="font-bold cursor-pointer">
        <MdClose className="w-3 h-3 lg:w-4 lg:h-4" />
      </button>
    </div>
  );
}

export default MultiPill;