import img1 from "../assets/photo-1613769049987-b31b641f25b1.avif";
import img2 from "../assets/photo-1544025162-d76694265947.avif";
import img3 from "../assets/photo-1559715745-e1b33a271c8f.avif";
export default function HeadlineCards() {
  return (
    <>
      <section className="py-12 max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card */}
        <div className="rounded-xl relative h-[170px] sm:max-md:h-[140px]">
          <div className="rounded-xl text-white absolute z-10 bg-black/50 w-full h-full">
            <p className="font-bold pt-4 pl-4 text-[20px] sm:max-md:text-[17px]">
              Sun's Out, BOGO's Out
            </p>
            <p className="pl-4 sm:max-md:text-[12px]">Through 8/26</p>
            <button className="bg-white text-black px-4 py-1 sm:max-md:px-2 sm:max-md:py-0 sm:max-md:text-[13px] mt-10 sm:max-md:mt-2 ml-4 rounded-xl hover:bg-black hover:text-white hover:ring-2 cursor-pointer duration-150">
              Order Now
            </button>
          </div>
          <img
            className="absolute rounded-xl object-cover h-[170px] sm:max-md:h-[140px] w-full"
            src={img1}
            alt=""
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative h-[170px] sm:max-md:h-[140px]">
          <div className="rounded-xl text-white absolute z-10 bg-black/50 w-full h-full">
            <p className="font-bold pt-4 pl-4 text-[20px] sm:max-md:text-[17px]">
              New Restaurants
            </p>
            <p className="pl-4 sm:max-md:text-[12px]">Added Daily</p>
            <button className="bg-white text-black px-4 py-1 sm:max-md:px-2 sm:max-md:py-0 sm:max-md:text-[13px] mt-10 sm:max-md:mt-2 ml-4 rounded-xl hover:bg-black hover:text-white hover:ring-2 cursor-pointer duration-150">
              Order Now
            </button>
          </div>
          <img
            className="absolute rounded-xl object-cover h-[170px] sm:max-md:h-[140px] w-full"
            src={img2}
            alt=""
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative h-[170px] sm:max-md:h-[140px]">
          <div className="rounded-xl text-white absolute z-10 bg-black/50 w-full h-full">
            <p className="font-bold pt-4 pl-4 text-[20px] sm:max-md:text-[17px]">
              We Deliver Desserts Too
            </p>
            <p className="pl-4 sm:max-md:text-[12px]">Tasty Treats</p>
            <button className="bg-white text-black px-4 py-1 sm:max-md:px-2 sm:max-md:py-0 sm:max-md:text-[13px] mt-10 sm:max-md:mt-2 ml-4 rounded-xl hover:bg-black hover:text-white hover:ring-2 cursor-pointer duration-150">
              Order Now
            </button>
          </div>
          <img
            className="absolute rounded-xl object-cover h-[170px] sm:max-md:h-[140px] w-full"
            src={img3}
            alt=""
          />
        </div>
      </section>
    </>
  );
}
