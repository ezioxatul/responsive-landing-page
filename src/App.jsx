function App() {
  return (
    <>
      <div className="relative w-full">
        {/* Text - Positioned Above the Image */}
        <div className="absolute inset-x-0 top-4 text-center text-white font-medium text-base z-10">
          <div className=" flex justify-center space-x-2">
            <img src="/mobile/discount.svg" alt=""></img>
            <div>Get 40% off on your first order</div>{" "}
          </div>
        </div>

        {/* Background Image */}
        <img className="w-full z-0" src="/mobile/topvector.svg" alt="" />
      </div>

      <div className=" w-full mt-2 flex justify-center">
        <div className="flex justify-center gap-2 p-3 rounded-md active:shadow-lg mx-4  shadow-md bg-white w-full max-w-md">
          <img src="/mobile/search.svg" />
          <img src="/mobile/line.svg" />
          <input
            type="text"
            placeholder="Search consultants here..."
            className="flex-1 bg-transparent font-medium text-base  outline-none text-gray-600 placeholder-gray-400"
          />
          <img src="/mobile/mic.svg" />
        </div>
      </div>

      <div className="flex mt-2 mx-4 space-x-10">
        <div className=" font-medium text-[10px]  ">
          #103, Park View Street, Plot No.57, Chandigarh, 160007
        </div>
        <div className=" font-semibold underline text-[#204EA2] text-[10px]  ">
          Change
        </div>
      </div>

      <div className="flex-col ">





        <div className=" relative w-full ">
          <div>
            <div className="absolute flex inset-x-0 top-4 text-center text-white font-medium text-base z-10">
              <div>Immigration Consultants</div>
              <img src="/mobile/immigrationImage.svg" alt="" />
            </div>
          </div>

          <img className="w-full z-0" src="/mobile/immigration.svg" alt="" />
        </div>





      </div>
    </>
  );
}

export default App;
