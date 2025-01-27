import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { AiFillTags } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

import { FaWallet } from "react-icons/fa";
export default function Navbar() {
  // control the slider
  const [nav, setNav] = useState(true);

  // control the scroll in the body
  function bodyScroll() {
    nav
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  }

  useEffect(() => {
    bodyScroll();
  }, [nav]);

  return (
    <>
      <nav className="max-w-[95%] h-16 mx-auto mt-2">
        <div className=" flex items-center justify-between">
          {/* left side */}
          <div className="flex items-center">
            {/* slider icon */}
            <div className="p-2">
              <AiOutlineMenu
                className="max-sm:text-[20px] sm:text-[25px] cursor-pointer"
                onClick={() => {
                  setNav(false);
                  bodyScroll()
                }}
              />
            </div>
            <div className="sm:p-2">
              <h1 className="max-sm:text-[18px] sm:text-[18px] md:text-3xl lg:text-4xl">
                Best <span className="font-bold">Eats</span>
              </h1>
            </div>
            <div className="max-sm:hidden flex h-10 items-center bg-gray-300 rounded-full px-1 text-[12px]">
              <p className="bg-black text-white rounded-full px-2 py-2 outline-2 outline-black">
                Delivery
              </p>
              <p className="p-2">Pickup</p>
            </div>
          </div>
          {/* slider */}
          <nav
            className={
              !nav
                ? "bg-white h-screen w-[200px] absolute top-0 left-0 z-30 duration-400"
                : "bg-white h-screen w-[200px] absolute top-0 left-[-100%] z-30 duration-500 ease-in-out"
            }
          >
            <div className="flex items-center justify-between p-3 bg-slate-100/50 relative top-0">
              <h1 className="text-[20px]">
                Best <span className="font-bold">Eats</span>
              </h1>
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => {
                  setNav(true);
                  bodyScroll()
                }}
              />
            </div>
            <ul className="mt-4">
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <TbTruckDelivery size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Orders
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2  ml-2 p-2 text-[15px]">
                <MdFavorite size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Favorites
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <FaWallet size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Wallet
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <IoIosHelpCircle size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Help
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <AiFillTags size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Promotions
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <BsFillSaveFill size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Best Ones
                </a>
              </li>
              <li className="flex items-center gap-x-4 mb-2 ml-2 p-2 text-[15px]">
                <FaUserFriends size={25} />
                <a href="#" className="hover:underline underline-offset-4">
                  Invite Friends
                </a>
              </li>
            </ul>
          </nav>
          {/* overlay */}
          {!nav ? (
            <div
              className="bg-black/80 snap-none z-20 h-full w-full absolute left-0 top-0"
              onClick={() => {
                setNav(true);
                bodyScroll()
              }}
            ></div>
          ) : null}
          {/* right side */}
          <div className="flex items-center gap-x-2">
            {/* Search input */}
            <div className="flex max-sm:w-[230px] sm:w-[280px] md:w-[350px] lg:w-[500px] items-center bg-gray-300 rounded-4xl p-1">
              <IoIosSearch className="mr-3 ml-2" />
              <input
                type="text"
                placeholder="Search Foods"
                className="focus:bg-transparent outline-none"
              />
            </div>
            <button className="bg-black text-white p-2 flex items-center justify-between text-[14px] font-semibold w-[70px] rounded-full max-sm:hidden">
              <IoMdCart className="text-[18px]" />
              Cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
