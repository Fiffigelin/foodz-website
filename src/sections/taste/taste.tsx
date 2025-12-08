import { useCallback, useState } from "react";
import { mealData, Meal, countryCodes } from "../../data/data";
import SingleSelect, { SingleSelectItem } from "../../components/single-select/single-select";
import TextInput from "../../components/text-input/text-input";
import TextHeader from "../../components/text/text-header";
import MultiSelect from "../../components/multi-select/multi-select";
import PhoneInput from "../../components/phone-input/phone-input";
import TextArea from "../../components/text-area/text-area";
import Paragraph from "../../components/text/paragraph";
import PrimaryButton from "../../components/primary-button/primary-button";

interface FormData {
  meals: Meal[];
  taste: string;
  name: string;
  telephone: string;
  address: string;
  payment: string;
  note: string;
  cost: number
}

const Payment: SingleSelectItem[] = [
  {
    id: 0,
    name: "Cash"
  },
  {
    id: 1,
    name: "Creditcard"
  },
  {
    id: 2,
    name: "Klarna"
  },
  {
    id: 3,
    name: "PayPal"
  },
];

function Taste() {
  const [inputData, setInputData] = useState<FormData>({
    meals: [],
    taste: "",
    name: "",
    telephone: "",
    address: "",
    payment: "",
    note: "",
    cost: 0.00
  });

  const meals: SingleSelectItem[] = mealData.map((meal, index) => ({
    id: meal.id ?? index,
    name: meal.title
  }))

  const handleForm = useCallback(
    <K extends keyof FormData>(property: K, value: FormData[K]) => {
      setInputData((prevState) => ({
        ...prevState,
        [property]: value,
      }));
    },
    []
  );

  const itemsToSingleItem = <T extends SingleSelectItem>(items: T[]): SingleSelectItem[] => {
    return items.map((item, index) => ({
      id: item.id ?? index,
      name: item.name,
    }));
  };

  const handleMeals = useCallback((selectedItems: SingleSelectItem[]) => {
    const selectedMeals = mealData.filter(m => selectedItems.some(item => item.id === m.id));
    handleForm("meals", selectedMeals);

    if (selectedMeals.length < 1) {
      handleForm("cost", 0.00);
    } else {
      const totalCost = selectedMeals.reduce((sum, meal) => sum + meal.cost, 0);
      handleForm("cost", totalCost);
    }
  }, [handleForm]);
  
  const handlePayments = useCallback((item: SingleSelectItem | null) => {
    handleForm("payment", item?.name ?? "");
  }, [handleForm]);

  return (
    <section className="
    min-h-screen w-full flex flex-col justify-evenly
    h-full mt-10 items-center">
      <div className="flex flex-col w-full text-center">
        <TextHeader text={"Get your the best"}/>
        <div className="flex gap-2 justify-center mb-2 xl:gap-4">
          <TextHeader text={"Taste"}/>
          <TextHeader text={"Now!"} color={"text-(--color-green)"}/>
        </div>
        <Paragraph className="text-lg w-[60%] self-center" text={"Best cooks & best delivery guys all at your service. Hot tasty food will reach you now in 30 minutes!"} color={"text-(--color-neutral)"}/>
      </div>

      <div className="flex my-4 w-full md:flex-row md:gap-2 lg:gap-4">
        <div className="flex flex-col gap-3 w-full flex-start lg:w-1/2">
            <p className="text-xl">What's Your Taste?</p>
            <p className="text-lg">Fill the form and let us know your taste.</p>

          <div className="flex flex-row justify-between mt-4">
            <p className="text-lg">Select your Meal</p>
            <p className="text-lg text-(--color-green) cursor-pointer">View menu</p>
          </div>
          <MultiSelect
            id="meals"
            items={itemsToSingleItem(meals)}
            placeholder="Select meals"
            value={inputData.meals.map(m => ({ id: m.id, name: m.title }))}
            onChange={handleMeals}
          />

          <div className="flex flex-col gap-2 lg:flex-row">
            <TextInput id={"name"} label={"Name"} placeholder="Name" onChange={(value) => {handleForm("name", value)}} value={inputData.name}/>
            <PhoneInput id={"telephone"} label={"Telephone"} items={countryCodes} placeholder="123 456 789" onChange={(value) => {handleForm("telephone", value)}} value={inputData.telephone}/>
          </div>

          <SingleSelect
            id="payment"
            items={itemsToSingleItem(Payment)}
            onChange={handlePayments}
            placeholder="Select Payment"
            label="Payment"
            className="lg:w-1/2"
            value={Payment.find(p => p.name === inputData.payment) || { id: -1, name: "" }}
          />

          <TextArea id={"note"} onChange={(value) => {handleForm("note", value)}} placeholder="More spicy, more sauce, ..." value={inputData.note} label="Note for us" />
          
          <div className="flex flex-row gap-2 text-lg">  
            <p>You will pay</p>
            <p className="text-(--color-green) font-black text-xl">${new Intl.NumberFormat('us-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(inputData.cost)}</p>
          </div>
          <PrimaryButton />
        </div>

        <div className="hidden lg:flex w-1/2 self-center justify-center">
          <img src="8247878_3870403.png" alt="Image by pikisuperstar on Freepik" className="w-2/3"/>
        </div>
      </div>
    </section>
  );
}

export default Taste;