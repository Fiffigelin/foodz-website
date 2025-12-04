type OrderButtonProps = {
	className?: string;
	text?: string;
}
const PrimaryButton = ({className="", text="ORDER NOW"}: OrderButtonProps) => {
	const length = className.includes("w-");
	const importedClass = length ? className : className + "w-[137px]";

	return <button
          className={`
					${importedClass}
          h-11
          bg-[#04b90b]
          rounded-[10px]
          text-white
          text-base
          font-extrabold
          font-mono
          cursor-pointer`}
        >
          {text}
        </button>
};

export default PrimaryButton;
