export function Desktop() {
  return (
    <div className="relative ">
      <img className="absolute h-[630px] z-0" src="/desktop/blueBg.png" alt="" />

      <div className="flex-col max-w-[1320px] mx-auto relative z-10">
        <div className="flex h-[100px] w-full">
          <img src="/desktop/logo.svg" className=" ml-2 w-32" alt="" />
          <button className="btn flex mt-6 ml-32 btn-outline w-44 h-12 text-lg font-medium border-2 rounded-lg text-white">
            <span>
              <img src="/desktop/location.svg" />
            </span>
            Location
            <span className="ml-8">
              <img src="/desktop/downArrow.svg" />
            </span>
          </button>
          <div className="flex h-8 ml-auto mr-2 mt-8 space-x-4">
            <div className=" font-semibold text-lg text-white">
              Become a Consultant
            </div>
            <img src="/desktop/notification.svg" />
            <img src="/desktop/message.svg" />
            <img src="/desktop/profileIcon.svg" />
            <img className="h-6 mt-1" src="/desktop/balance.svg" />
            <img className="h-2 mt-3" src="/desktop/downArrow.svg" />
          </div>
        </div>

        <div className="flex-col">
          <div className=" text-white text-3xl mt-12 ml-2 font-semibold ">
            Guiding Your{" "}
            <span className=" font-[sacramento] text-5xl">
              {" "}
              Path to Success
            </span>
          </div>
          <div className=" text-white text-3xl ml-2 font-semibold ">
            Expert Consultation at Your Service
          </div>

          <div className="w-[705px] h-[50px] bg-white ml-2 rounded-xl mt-6">
            <input className=" w-full border-0 h-full focus:none focus:outline-0 p-4 " placeholder="Search anything here..." />
            <div className="w-[148] h-[44] bg-[#1F4EA1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
