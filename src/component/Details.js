import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./Movies";

const Details = () => {
  const rows = [];
  for (var i = 0; i < 10; i++) {
    rows.push(i);
    console.log(i);
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    // autoplay: true
  };

  return (
    <div className=" pt-[20px] overflow-hidden">
      <div className=" grid grid-cols-5  mx-[40px] h-[25rem] overflow-hidden  bg-black z-0 	">
        <div className="relative details-image-shadow p-[50px] col-span-2">
          <h4 className="uppercase  font-bold text-xs text-[#db882a]  ">
            subscriber
          </h4>
          <p className="text-3xl font-medium py-[10px]	">Marvel's Hit-Monkey</p>
          <div>
            <ul className="flex font-bold text-sm text-gray-600 ">
              <li className=" pr-[10px]">1 Season</li>
              <li className=" px-[10px] border-l-2 border-gray-600">
                {" "}
                10 Episod{" "}
              </li>
              <li className=" px-[10px] border-l-2 border-gray-600"> Action</li>
              <li className=" px-[10px] border-l-2 border-gray-600">
                {" "}
                U/A 16+
              </li>
              <li className=" px-[10px] border-l-2 border-gray-600">
                {" "}
                English
              </li>
              <li className=" px-[10px] border-l-2 border-gray-600"> Marvel</li>
            </ul>
          </div>
          <p className="mt-[10px] text-gray-400 font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            voluptatum aspernatur, quis laboriosam enim ratione accusantium
            nulla a autem sapiente.
          </p>
          <div className="absolute bottom-[7rem] flex justify-between items-end text-gray-300	">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>{" "}
              <div>
                <div className="font-bold"> Watch First Episode</div>
                <ul className="flex">
                  <li className=" pr-[10px] "> S1 E1</li>
                  <li className=" px-[10px] border-l-2 border-gray-600">
                    {" "}
                    26 Jan 2022
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute right-[-23rem] flex">
              <div className="px-[20px]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                <p className="uppercase font-bold text-xs pt-[5px] ">
                  watchlist
                </p>
              </div>
              <div className="px-[20px]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-share-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
                <p className="uppercase font-bold text-xs pt-[5px] ">Share</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 ">
          <img
            className="h-[]"
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4213/1104213-h-ab7b2f2aae5c"
            alt=""
          />
        </div>
      </div>

      <h4 className="py-[20px] text-xl font-bold mx-[40px] ">Episodes</h4>
      <Slider className="slider  mx-[20px]" {...settings}>
        {/* <div>
              <img  className="w-[100%] h-[100%] drop-shadow-lg" alt="M" src="/images/slider-badging.jpg"></img>
          </div> */}
        {rows.map((row, index) => (
          <div className=" px-[10px]  ">
            <div className="absolute bottom-1">

            <p className="flex z-10   px-[5px] items-center font-bold ">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
                >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>EP {index+1} - 26 JAN</p>
                </div>
            <img
              key={index}
              className={` z-0 rounded-[10px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-[1.16]     duration-300 z-10`}
              alt="M"
              src={`https://picsum.photos/630/357?random=${row}`}
            ></img>
          </div>
          
        ))}
      </Slider>
      <Movies />
    </div>
  );
};

export default Details;
