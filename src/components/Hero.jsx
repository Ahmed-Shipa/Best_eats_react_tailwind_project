export default function Hero() {
  return (
    <>
      <section
        className={
          "bg-[url('/src/assets/pexels-photo-1639562.webp')] bg-right bg-no-repeat bg-cover max-w-[95%] mx-auto h-[500px]  max-sm:h-[250px] max-sm:bg-left sm:bg-left md:h-[600px] lg:h-[650px]"
        }
      >
        <div className="absolute top-64 max-sm:top-40 max-sm:left-6 sm:left-12 md:top-80 md:left-20">
          <h2 className="text-white text-5xl max-sm:text-4xl lg:text-6xl capitalize font-bold mb-2">
            the <span className="text-amber-600">best</span>
          </h2>
          <h2 className="text-white text-5xl max-sm:text-4xl lg:text-6xl capitalize font-bold">
            <span className="text-amber-600">foods</span> delivered
          </h2>
        </div>
      </section>
    </>
  );
}
