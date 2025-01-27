import { useState } from "react";
import { data } from "../data/data.js";

export default function Food() {
  // setting state of food
  const [food, setFood] = useState(data);

  //   filter food with type
  const filterFood = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   filter food with price
  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <>
      <section className="mt-9 w-[95%] mx-auto">
        {/* title */}
        <h2 className="text-2xl font-bold text-orange-600 text-center">
          Top Rated Menu Items
        </h2>
        <div className="lg:flex justify-between lg:w-[800px]">
          {/* filter by type */}
          <div className="mt-2">
            <p className="text-gray-700 font-bold mb-2">Filter Type</p>
            {/* filter buttons */}
            <div className="flex justify-between max-w-[370px] lg:w-[400px]">
              <button
                onClick={() => {
                  setFood(data);
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => {
                  filterFood("burger");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                Burgers
              </button>
              <button
                onClick={() => {
                  filterFood("pizza");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                Pizza
              </button>
              <button
                onClick={() => {
                  filterFood("salad");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                Salads
              </button>
              <button
                onClick={() => {
                  filterFood("chicken");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                Chicken
              </button>
            </div>
          </div>

          {/* filter by price */}
          <div className="mt-2">
            <p className="text-gray-700 font-bold mb-2">Filter Price</p>
            {/* filter buttons */}
            <div className="flex justify-between max-w-[280px] lg:w-[290px]">
              <button
                onClick={() => {
                  filterPrice("$");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                $
              </button>
              <button
                onClick={() => {
                  filterPrice("$$");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                $$
              </button>
              <button
                onClick={() => {
                  filterPrice("$$$");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                $$$
              </button>
              <button
                onClick={() => {
                  filterPrice("$$$$");
                }}
                className="text-[13px] text-orange-600 cursor-pointer bg-white border-orange-400 border rounded-xl py-0.5 px-4 hover:bg-orange-600 hover:text-white"
              >
                $$$$
              </button>
            </div>
          </div>
        </div>

        {/* food cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {food.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-xl shadow-2xl hover:scale-105 transition duration-200"
              >
                <img
                  className="rounded-xl h-[200px] w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex justify-between px-3 py-2">
                  <p className="text-[13px] max-sm:text-[11px] max-sm:font-bold font-bold">
                    {item.name}
                  </p>
                  <p className="text-[13px] max-sm:text-[11px] max-sm:font-bold bg-orange-600 rounded-xl text-white px-1">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
