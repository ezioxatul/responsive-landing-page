const cardData = [
    {
      imgSrc: "desktop/visaMasters.png",
      title: "Visa Masters",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
    {
      imgSrc: "desktop/grayMatters.png",
      title: "Gray Matters",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
    {
      imgSrc: "desktop/eliStones.png",
      title: "Eli Stones",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
    {
      imgSrc: "desktop/brills.png",
      title: "Brills Consultants",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
    {
      imgSrc: "desktop/redLeaf.png",
      title: "Red Leaf",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
    {
      imgSrc: "desktop/skyLine.png",
      title: "Sky Line ",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
    },
  ];
  
  const instituteData = [
    {
      imgSrc: "desktop/grayMatters2.png",
      title: "Gray Matters",
      description: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      imgSrc: "desktop/brills2.png",
      title: "Brills Institute",
      description: "SCO. 115, Main Market Sector 34, Chandigarh",
    },
    {
      imgSrc: "desktop/elli2.png",
      title: "Elli Institute",
      description: "SCO. 116, Main Market Sector 34, Chandigarh",
    },
    {
      imgSrc: "desktop/touchstone.png",
      title: "Touchstone",
      description: "SCO. 117, Main Market Sector 34, Chandigarh",
    },
    {
      imgSrc: "desktop/british.png",
      title: "British Institute",
      description: "SCO. 118, Main Market Sector 34, Chandigarh",
    },
    {
      imgSrc: "desktop/mantrin.png",
      title: "Mantrin Institute",
      description: "SCO. 119, Main Market Sector 34, Chandigarh",
    },
  ];
  
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
            <button className="btn flex mt-6 ml-32 btn-outline w-48 h-12 text-lg hover:bg-transparent font-medium border-2 rounded-lg text-white">
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
                <span className=" mt-1.5 mr-2">
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
  
        {/* Background Graphics */}
        <div className="absolute">
          <div>
            <img src="/desktop/graphicLU.svg" />
          </div>
  
          <div>
            <img src="/desktop/graphicLD.svg" />
          </div>
          <div>
            <img src="/desktop/graphicRD.svg" />
          </div>
        </div>
  
        <div className=" relative  ml-2 mx-auto mt-24">
          <div className=" flex w-[1320px] mx-auto h-[852px]">
            <div className="flex-col my-auto">
              <div className=" w-[292px] ">
                <div className=" text-[#1C4CA0] font-semibold text-[25px]">
                  Top Rated Consultants
                </div>
                <div className=" text-center font-medium text-base">
                  Our trusted partner in navigation the immigration journey
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <button className="btn w-[150px] h-[40px] bg-[#1C4CA0] text-white">
                  View All
                </button>
              </div>
            </div>
  
            <div className=" ml-16 grid grid-cols-3 gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="relative w-[318px] h-[416px] bg-white shadow-lg rounded-[10px] p-4 mb-4"
                >
                  {/* Image Container */}
                  <div className="absolute top-[10px] left-[10px] w-[298px] h-[200px] bg-gray-200 rounded-[10px] overflow-hidden">
                    <img
                      src={card.imgSrc}
                      alt="Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
  
                  {/* Title */}
                  <h2 className="absolute top-[230px] left-[10px] text-[22px] font-semibold text-[#282825]">
                    {card.title}
                  </h2>
  
                  {/* Rating Stars */}
                  <div className="absolute top-[265px] left-[10px] flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="/desktop/star.svg"
                        alt="Star"
                        className="w-[15px] h-[15px]"
                      />
                    ))}
                  </div>
  
                  {/* Description */}
                  <p className="absolute top-[290px] left-[10px] w-[250px] text-[16px] text-[#282825]">
                    {card.description}
                  </p>
  
                  {/* Divider */}
                  <hr className="absolute top-[350px] left-0 w-full border-[#B4B4B4] opacity-30" />
  
                  {/* Pricing and Button */}
                  <div className="absolute top-[370px] left-[10px] flex items-center justify-between w-[285px]">
                    <div className="w-[158px] h-[38px] bg-[#1C4CA0] shadow-lg rounded-[6px] flex items-center justify-center">
                      <span className="text-white text-[18px] font-semibold">
                        {card.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/desktop/messageCard.svg"
                        className="w-[15px] h-[14px] "
                      />
                      <span className="text-[#C6960C] text-[18px] font-semibold">
                        Message
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Institutes Section */}
          <div className=" flex w-[1320px] mx-auto h-[700px] mt-24">
            <div className=" mr-10 grid grid-cols-3 gap-4">
              {instituteData.map((institute, index) => (
                <div
                  key={index}
                  className="relative w-[310px] h-[340px] rounded-[10px] overflow-hidden"
                >
                  {/* Image */}
                  <div
                    className="absolute w-full h-full bg-cover"
                    style={{ backgroundImage: `url(${institute.imgSrc})` }}
                  ></div>
  
                  {/* Content */}
                  <div className="absolute bottom-4 left-[10px] p-2">
                    <h2 className="text-white font-montserrat font-bold text-[22px] leading-[27px] drop-shadow-lg">
                      {institute.title}
                    </h2>
                    <p className="text-white font-montserrat font-semibold text-[16px] leading-[20px] w-[264px] mt-1 drop-shadow-lg">
                      {institute.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-col my-auto">
              <div className=" w-[292px] text-center ">
                <div className=" text-[#1C4CA0] font-semibold text-[25px]">
                  Popular Institutes
                </div>
                <div className=" text-center font-medium text-base">
                  Our trusted partner in navigation the educational journey
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <button className="btn w-[150px] h-[40px] bg-[#1C4CA0] text-white">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }