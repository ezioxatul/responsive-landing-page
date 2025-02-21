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
        <img className="w-full z-0" src="/mobile/topVector.png" alt="" />
      </div>

      <div className=" w-full mt-2 flex justify-center">
        <div className="flex justify-center gap-2 p-3 rounded-md active:shadow-lg mx-4  shadow-md bg-white w-full max-w-md">
          <img src="/mobile/search.svg" />
          <img src="/mobile/line.svg" />
          <input
            type="text"
            placeholder="Search consultants here..."
            className="flex-1 bg-transparent font-medium text-base text-gray-600 placeholder-gray-400 border-none outline-none focus:ring-0"
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

      <div className="flex-col mt-4 mx-4 ">
        <div className=" relative w-full ">
          <div>
            <div className="absolute flex inset-x-0  text-center text-white font-semibold text-base z-10">
              <div className=" flex-col mt-4 justify-center ml-14">
                <div>Immigration</div> <div>Consultants</div>
              </div>
              <img
                className=" mt-2 ml-12"
                src="/mobile/immigrationImage.svg"
                alt=""
              />
            </div>
          </div>

          <img
            className="w-full z-0"
            src="/mobile/immigrationVector.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex-col mt-4 mx-4 ">
        <div className=" relative w-full ">
          <div>
            <div className="absolute flex inset-x-0  text-center text-white font-semibold text-base z-10">
              <img
                className=" mt-3 ml-12"
                src="/mobile/ieltsImage.svg"
                alt=""
              />
              <div className=" flex text-left w-12 justify-start mt-4 ml-4">
                IELTS/TOEFL/PTE Institute
              </div>
            </div>
          </div>

          <img className="w-full z-0" src="/mobile/ieltsVector.svg" alt="" />
        </div>
      </div>

      <div className=" flex">
      <div className=" w-full mx-4 justify-center flex mt-5">
        <img src="/mobile/puzzle.png" />
      </div>
      </div>

      <div className="flex mt-5 font-semibold text-lg space-x-34 ml-6">
        <div className=" ">Live Consulants</div>
        <div className=" mt-1 text-[#B4B4B4] text-sm">See all</div>
      </div>

      <div className="carousel carousel-center rounded-box ml-2 max-w-md p-4 flex gap-2 overflow-x-auto">
  {/* Item 1 */}
  <div className="carousel-item w-60 flex-shrink-0">
    <div className="relative w-full">
      <div className="absolute flex-col space-y-56 text-white z-10 mt-4 ">
        <div className="text-right text-xs font-semibold ml-32 flex items-center justify-end">
          <div className="z-10 mr-2">$1/min</div>
          <div className="w-14 rounded-md h-6 bg-[#0234C1] absolute right-0"></div>
        </div>
        <div className="flex-col ml-2">
          <div className="text-base font-semibold">Study Buddies</div>
          <div className="flex space-x-24 text-xs font-medium">
            <div>
              Calls: <span className="text-sm font-semibold">300+</span>
            </div>
            <div className="flex space-x-1">
              <img className="w-4" src="/mobile/star.svg" />
              <div className="text-sm font-semibold">4.8</div>
            </div>
          </div>
        </div>
      </div>
      <img src="/mobile/studyBuddies.png" className="rounded-box w-full" />
    </div>
  </div>

  {/* Item 2 */}
  <div className="carousel-item w-60 flex-shrink-0">
    <div className="relative w-full">
      <div className="absolute flex-col space-y-56 text-white z-10 mt-4 ">
        <div className="text-right text-xs font-semibold ml-32 flex items-center justify-end">
          <div className="z-10 mr-2">$1/min</div>
          <div className="w-14 rounded-md h-6 bg-[#0234C1] absolute right-0"></div>
        </div>
        <div className="flex-col ml-2">
          <div className="text-base font-semibold">Grey Matters</div>
          <div className="flex space-x-24 text-xs font-medium">
            <div>
              Calls: <span className="text-sm font-semibold">300+</span>
            </div>
            <div className="flex space-x-1">
              <img className="w-4" src="/mobile/star.svg" />
              <div className="text-sm font-semibold">4.8</div>
            </div>
          </div>
        </div>
      </div>
      <img src="/mobile/greyMatters.png" className="rounded-box w-full" />
    </div>
  </div>

  {/* Item 3 */}
  <div className="carousel-item w-60 flex-shrink-0">
    <div className="relative w-full">
      <div className="absolute flex-col space-y-56 text-white z-10 mt-4 ">
        <div className="text-right text-xs font-semibold ml-32 flex items-center justify-end">
          <div className="z-10 mr-2">$1/min</div>
          <div className="w-14 rounded-md h-6 bg-[#0234C1] absolute right-0"></div>
        </div>
        <div className="flex-col ml-2">
          <div className="text-base font-semibold">Study Buddies</div>
          <div className="flex space-x-24 text-xs font-medium">
            <div>
              Calls: <span className="text-sm font-semibold">300+</span>
            </div>
            <div className="flex space-x-1">
              <img className="w-4" src="/mobile/star.svg" />
              <div className="text-sm font-semibold">4.8</div>
            </div>
          </div>
        </div>
      </div>
      <img src="/mobile/studyBuddies.png" className="rounded-box w-full" />
    </div>
  </div>
</div>

    </>
  );
}

export default App;
