export function Desktop() {
  return (
    <div className="relative ">
      <img
        className="absolute h-[630px] z-0"
        src="/desktop/blueBg.png"
        alt=""
      />

      {/* Navbar Section */}
      <div className="relative z-10">
        <div className="flex h-[100px]  max-w-[1320px] mx-auto">
          <img src="/desktop/logo.svg" className=" ml-2 w-32" alt="" />
          <button className="btn flex mt-6 ml-32 btn-outline w-48 h-12 text-lg font-medium border-2 rounded-lg text-white">
            <span>
              <img src="/desktop/location.svg" />
            </span>
            Location
            <span className="ml-12">
              <img src="/desktop/downArrow.svg" />
            </span>
          </button>
          <div className="flex h-8 ml-auto mr-2 mt-8 space-x-4">
            <div className=" font-semibold text-lg text-white">
              Become a Consultant
            </div>
            <img src="/desktop/notification.svg" />
            <img src="/desktop/message.svg" />
            <img className=" h-12 -mt-2" src="/desktop/profileIcon.svg" />
            <img className="h-6 mt-1" src="/desktop/balance.svg" />
            <img className="h-2 mt-3" src="/desktop/downArrow.svg" />
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <div className="flex space-x-24 max-w-[1320px] mx-auto  ">
        <div className="flex-col ml-2  relative z-10">
          <div className="flex-col mt-32">
            <div className=" text-white text-3xl   font-semibold ">
              Guiding Your{" "}
              <span className=" font-[sacramento] text-5xl">
                {" "}
                Path to Success
              </span>
            </div>
            <div className=" text-white text-3xl  font-semibold ">
              Expert Consultation at Your Service
            </div>

            <div className="w-[705px] h-[50px] bg-white  rounded-xl mt-6">
              <input
                className=" w-full border-0 h-full focus:none focus:outline-0 p-4 "
                placeholder="Search anything here..."
              />
              <div className="w-[148] h-[44] bg-[#1F4EA1]"></div>
            </div>

            <div className=" text-white flex mt-2">
              <span className=" mt-1 mr-2">
                <img src=" /desktop/recent.svg" />
              </span>
              Recent Searchs : Institutes in Mohali, Study Buddies, IELTS
            </div>

            <div className=" text-white   flex mt-36">
              <span className=" -mt-2 mr-2">
                <img className=" h-12" src=" /desktop/consultantIcon.svg" />
              </span>
              <div className=" -mt-2 mr-4 w-56">
                {" "}
                500+ Registered Educational Consultants
              </div>

              <span className=" -mt-2 mr-2">
                <img className=" h-12" src=" /desktop/instituteIcon.svg" />
              </span>
              <div className="w-48 -mt-1">
                500+ Registered Training Institutes
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className=" flex">
          <img
            src="/desktop/heroImage.png"
            className="w-[380px] mt-2.5 h-[520px] absolute z-10 "
            alt=""
          />
          <div className=" relative z-20 text-white mt-auto -mb-2 ml-80  text-base font-bold">
            <span className="font-semibold"> Diego,</span> Student
          </div>
        </div>
      </div>
    </div>
  );
}
