import React, { useState } from 'react';

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

const Ourservices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div id="boxService" className="z-10 bg-custom-white bg-opacity-60 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row h-[40rem] w-[100rem] relative">
        <div id="image" className="relative w-full md:w-1/2 h-full overflow-hidden p-10">
          <div className="relative w-full h-full transition-opacity duration-1000 ease-in-out ">
              {carouselItems.map((item, index) => (
              <div
                  key={item.id}
                  className="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
                  style={{
                  opacity: currentIndex === index ? 1 : 0,
                  }}
              >
                  <img
                  src={item.path}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  />
              </div>
              ))}
          </div>
        </div>
        <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 opacity-30 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
        &lt;
        </button>
        <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 opacity-30 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
        &gt;
        </button>
        <div id="description" className="p-6 md:w-1/2 flex flex-col items-center justify-center gap-5">
          <h3 className="text-4xl mb-2 font-inder text-[#096477]">
              {carouselItems[currentIndex].title}
          </h3>
          <p className="mb-4 text-center font-inder text-[#868686] text-xl">
              {carouselItems[currentIndex].desc}
          </p>
          <div className="text-lg text-gray-800 font-inder border border-[#096477] rounded-lg p-5">
            Start From: <br/>
            <span className="text-[#096477] font-inder">{carouselItems[currentIndex].price}</span>
          </div>
        </div>
    </div>
    // <section>
    // </section>
  );
};

export default Ourservices;
