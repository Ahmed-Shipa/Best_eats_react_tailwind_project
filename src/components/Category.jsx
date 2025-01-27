import { useState } from "react";
import { categories } from "../data/data.js";

export default function Category() {
  // control the categories
  const [foods, setFoods] = useState(categories);
  console.log(foods);

  return (
    <>
      <section className="mt-15 w-[95%] mx-auto mb-10 grid justify-center">
        {/* title */}
        <h2 className="text-2xl font-bold text-orange-600 text-center">
          Top Rated Menu Items
        </h2>

        {/* Categories cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4  sm:gap-x-16 md:gap-x-5  lg:gap-6 mt-4">
          {foods.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between w-[200px] md:w-[150px] md:h-[100px] lg:w-full h-[130px] lg:h-full px-10 py-3 md:px-5 items-center bg-gray-100 rounded-xl shadow-md"
              >
                <h2 className="text-[14px] font-bold">{item.name}</h2>
                <img className="w-[60px]" src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
