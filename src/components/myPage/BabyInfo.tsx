import React, { useState } from "react";
import { TbPlus } from "react-icons/tb";
import BabyFormCard from "./BabyFormCard";

type BabyType = {
  id: number;
};

export default function BabyInfo() {
  const addBabyHandler = () => {
    setBabyList([...babyList, { id: babyList.length + 1 }]);
  };
  const tempBabyList = [{ id: 1 }];
  const [babyList, setBabyList] = useState(tempBabyList);
  return (
    <div>
      <div className="relative mb-12 pt-6 pb-12 bg-white text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="flex flex-col items-center justify-center">
          {babyList.map((baby: BabyType) => (
            <BabyFormCard key={baby.id} />
          ))}
        </div>
        <button
          onClick={addBabyHandler}
          type="button"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-full text-white bg-yellow-dark hover:bg-yellow-deepDark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <TbPlus size={40} />
        </button>
      </div>
    </div>
  );
}
