import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animate, motion, stagger, useScroll, useSpring, useTransform } from "framer-motion"
// import "./Ourservices.css"

// Carousel items
const carouselItems = [
  {
    id: 1,
    title: 'City Tour',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    path: 'https://media.suara.com/pictures/653x366/2022/09/08/63764-pemandangan-kota-malang-instagramcomchristianjazzy.jpg',
    price: "Rp 200.000"
  },
  {
    id: 2,
    title: 'Rent',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    path: 'https://asset.kompas.com/crops/RcfH4n4zGlLWlTa3WEY1_W0FCN8=/0x15:1127x766/1200x800/data/photo/2024/02/06/65c2215a58cfa.jpg',
    price: "Rp 225.000"
  },
  {
    id: 3,
    title: 'Travel',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    path: 'https://radarlombok.co.id/wp-content/uploads/2022/03/IMG20220318145730-scaled-e1647612591357.jpg',
    price: "Rp 150.000"
  },
];

// Custom Left Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
      style={{ left: '-1rem' }} // Adjust positioning
    >
      &lt;
    </button>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
      style={{ right: '40rem' }} // Adjust positioning
    >
      &gt;
    </button>
  );
};

const Ourservices = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  const scaleText = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const scale = useTransform(scrollYProgress, [0, 1], [2, -1]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [85, -170]);


  // Slider settings with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <div className='w-full h-full overflow-y-hidden flex flex-col'>
      <div 
          className="text-center py-8 overflow-y-hidden overflow-x-hidden max-h-48 flex-1 relative"
      >
          <motion.h2 
            className="text-2xl font-inder text-[#096477]"
            style={{
                scale: scaleText,
            }}
          >{data.title}</motion.h2>
          <motion.h1 
            className="text-6xl font-inder font-bold text-black mt-10"
            style={{
              scale: scaleText,
          }}
          >{data.desc}</motion.h1>
      </div>
      <motion.div
        className="z-10  slider-container w-full h-[100rem] p-10 relative overflow-y-hidden flex-1"
       
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20,
        // }}
        // style={{
        //   scale: scaleText,
        //   // rotate: rotate,
        // }}
        >
        
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="slide-item">
              <div
                id="boxService"
                className="bg-white m-5 bg-opacity-40 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row h-[25rem] w-[50rem] relative"
                
              >
                <div id="image" className=" relative w-full md:w-1/2 h-full overflow-hidden p-10">
                  <img
                    src={item.path}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div id="description" className="p-6 md:w-1/2 flex flex-col items-center justify-center gap-5">
                  <h3 className="text-4xl mb-2 font-inder text-[#096477]">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-center font-inder text-[#868686] text-xl">
                    {item.desc}
                  </p>
                  <div className="text-lg text-gray-800 font-inder border border-[#096477] rounded-lg p-5">
                    Start From: <br />
                    <span className="text-[#096477] font-inder">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Ourservices;
