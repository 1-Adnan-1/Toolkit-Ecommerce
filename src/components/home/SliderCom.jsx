import React from "react";
import Slider from "react-slick";

const SliderCom = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-[#FAFAFA] p-6">
          <div className="">
            <div className="text-3xl font-bold ">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              repellendus accusamus sint earum illo corrupti illum iste ratione
              iusto ipsa aspernatur magnam at, dolorem totam itaque error cumque
              dicta quibusdam.
            </div>
            <div className=" flex items-center justify-center bg-gray-200  hover:bg-blue-600 hover:text-white  rounded-full cursor-pointer text-xl transition w-[200px] h-10 mt-4">
              İncele
            </div>
          </div>

          <img src="/ayakkabı-1.jpeg" alt="" />
        </div>
        <div className="!flex items-center bg-[#F2F2F2] p-6">
          <div className="">
            <div className="text-3xl font-bold ">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              repellendus accusamus sint earum illo corrupti illum iste ratione
              iusto ipsa aspernatur magnam at, dolorem totam itaque error cumque
              dicta quibusdam.
            </div>
            <div className=" flex items-center justify-center bg-gray-200   hover:bg-blue-600 hover:text-white rounded-full cursor-pointer text-xl w-[200px] transition h-10 mt-4">
              İncele
            </div>
          </div>

          <img src="/ayakkabı-2.jpeg" alt="" />
        </div>

        <div className="!flex items-center bg-[#FFFFFF] p-6">
          <div className="">
            <div className="text-3xl font-bold ">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              repellendus accusamus sint earum illo corrupti illum iste ratione
              iusto ipsa aspernatur magnam at, dolorem totam itaque error cumque
              dicta quibusdam.
            </div>
            <div className=" flex items-center justify-center bg-gray-200  hover:bg-blue-600 hover:text-white transition rounded-full cursor-pointer text-xl w-[200px]  h-10  mt-4">
              İncele
            </div>
          </div>
          <img src="/ayakkabı-4.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCom;
