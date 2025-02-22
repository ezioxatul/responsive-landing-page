import { Desktop } from "./desktop";
import liveConsultants from "./assets/mobile/consultantData";
import popularInstitutes from "./assets/mobile/instituteData";
import latestBlogs from "./assets/mobile/blogData";



function App() {
  return (
    <>
      {/* Mobile View  */}

      <div className="block md:hidden">
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
          <div className=" ">Live Consultants</div>
          <div className=" mt-1 text-[#B4B4B4] text-sm">See all</div>
        </div>

        <div className="carousel carousel-center rounded-box ml-2 max-w-md p-4 flex gap-2 overflow-x-auto">
          {liveConsultants.map((consultant, index) => (
            <div key={index} className="carousel-item w-60 flex-shrink-0">
              <div className="relative w-full">
                <div className="absolute flex-col space-y-56 text-white z-10 mt-4 ">
                  <div className="text-right text-xs font-semibold ml-32 flex items-center justify-end">
                    <div className="z-10 mr-2">{consultant.price}</div>
                    <div className="w-14 rounded-md h-6 bg-[#0234C1] absolute right-0"></div>
                  </div>
                  <div className="flex-col ml-2">
                    <div className="text-base font-semibold">{consultant.name}</div>
                    <div className="flex space-x-24 text-xs font-medium">
                      <div>
                        Calls: <span className="text-sm font-semibold">{consultant.calls}</span>
                      </div>
                      <div className="flex space-x-1">
                        <img className="w-4" src="/mobile/star.svg" />
                        <div className="text-sm font-semibold">{consultant.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={consultant.image}
                  className="rounded-box w-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-5 font-semibold text-lg space-x-30 ml-6">
          <div className=" ">Popular Institutes</div>
          <div className=" mt-1 text-[#B4B4B4] text-sm">See all</div>
        </div>

        <div className="carousel carousel-center rounded-box ml-2 max-w-md p-4 flex gap-2 overflow-x-auto">
          {popularInstitutes.map((institute, index) => (
            <div key={index} className="carousel-item w-60 flex-shrink-0">
              <div className="relative w-full">
                <div className="absolute bottom-3 left-3 flex-col text-white z-10  ">
                  <div className="text-lg font-bold">{institute.name}</div>
                  <div className="text-md font-semibold">
                    {institute.address}
                  </div>
                </div>
                <img
                  src={institute.image}
                  className="rounded-box w-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-5 font-semibold text-lg space-x-42 ml-6">
          <div className=" ">Latest Blogs</div>
          <div className=" mt-1 text-[#B4B4B4] text-sm">See all</div>
        </div>

        <div className="carousel carousel-center pb-20 rounded-box ml-2 max-w-md p-4 flex gap-2 overflow-x-auto">
          {latestBlogs.map((blog, index) => (
            <div key={index} className="carousel-item w-72 flex-shrink-0">
              <div className=" h-34 w-72 space-x-2 flex justify-center p-1 items-center  shadow-md rounded-lg">
                <img src={blog.image} className=" w-1/2" />
                <div className="flex-col">
                  <div className=" font-semibold text-lg">{blog.title}</div>
                  <div className=" font-medium text-sm">
                    {blog.description}
                  </div>
                  <div className=" font-semibold flex mt-2 text-[#1DBF73] text-sm">
                    Read Blog
                    <span className="mt-2 ml-2">
                      <img src="/mobile/arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dock">
          {/* Home Button */}
          <button>
            <img src="mobile/home.svg" />
            <span className="dock-label font-medium text-xs text-[#979797]">
              Home
            </span>
          </button>

          {/* Search Button */}
          <button>
            <img src="mobile/application.svg" />
            <span className="dock-label font-medium text-xs text-[#979797]">
              Application
            </span>
          </button>

          {/* Profile Button */}
          <button>
            <img src="mobile/profile.svg" />
            <span className="dock-label font-medium text-xs text-[#979797]">
              Profile
            </span>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Desktop />
      </div>
    </>
  );
}

export default App;