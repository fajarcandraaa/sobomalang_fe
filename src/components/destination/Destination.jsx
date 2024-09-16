import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animate, motion, stagger, useScroll, useSpring, useTransform } from "framer-motion"

// Carousel items
const carouselItems = [
  {
    id: 1,
    desc: '"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Morbi Placerat Magna Velit ......"',
    path: 'https://media.suara.com/pictures/653x366/2022/09/08/63764-pemandangan-kota-malang-instagramcomchristianjazzy.jpg',
  },
  {
    id: 2,
    desc: '"Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam......"',
    path: 'https://asset.kompas.com/crops/RcfH4n4zGlLWlTa3WEY1_W0FCN8=/0x15:1127x766/1200x800/data/photo/2024/02/06/65c2215a58cfa.jpg',
  },
  {
    id: 3,
    desc: '"Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur......"',
    path: 'https://radarlombok.co.id/wp-content/uploads/2022/03/IMG20220318145730-scaled-e1647612591357.jpg',
  },
];

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
      style={{ left: '-40px' }}
    >
      &lt;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
      style={{ right: '-40px' }}
    >
      &gt;
    </button>
  );
};

const ImageCarousel = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '20px',
    swipe: true, // Enable swipe
    touchMove: true, // Enable touch movement
    swipeToSlide: true, // Enable swiping to slide
  };

  const { scrollYProgress } = useScroll();
  const scaleDestinationText = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div className='w-full h-full justify-center items-center overflow-y-hidden flex flex-col'>
      <div 
          className="text-center py-8 overflow-y-hidden bg-transparent overflow-x-hidden w-full flex-1 relative"
      >
          <motion.h2 
            className="text-2xl font-inder text-[#096477]"
            style={{
                scale: scaleDestinationText,
            }}
          >{data.title}</motion.h2>
          <motion.h1 
            className="text-6xl font-inder font-bold text-black mt-10"
            style={{
              scale: scaleDestinationText,
          }}
          >{data.desc}</motion.h1>
      </div>
      <div className="relative w-[80%] h-[35rem] mt-16">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="px-2">
              <div className="relative h-[100%] flex flex-col shadow-md overflow-hidden rounded-2xl">
                  <motion.div 
                      className="w-full h-[30rem] flex items-center justify-center overflow-hidden"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                  >
                      <img
                      src={item.path}
                      alt="Landscape"
                      className="object-cover w-full h-full" // Ensure images cover the container
                      />
                      <div className="absolute bottom-0 mr-5 ml-5 mb-5 rounded-lg bg-custom-white p-5 text-gray-800 bg-opacity-70">
                          <p className="font-bold text-lg mb-2">{item.desc}</p>
                      </div>
                  </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
