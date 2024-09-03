import React, { useRef } from 'react'
import { animate, motion, stagger, useScroll, useSpring, useTransform } from "framer-motion"
import "./Hero.css"

const items = [
    {
        id: 1,
        title: "",
        desc: ""
    },
    {
        id: 2,
        title: "OUR SERVICES PACKEGE",
        desc: "CHECKOUT OUR PACKAGES"
    },
    {
        id: 3,
        title: "Management & Maintenance System",
        desc: "We provide manage & maintenance services to ensure the smooth operation and security of our clients' systems."
    },
    {
        id: 4,
        title: "IT Consulting",
        desc: "We offer IT consulting services to help our clients select and implement the right technological solutions."
    },
];


const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1],[-200, 200]);

    return (
        <section id='singleContent'>
            <div className="bg-white">
                {/* Header Section */}
                <div className="text-center py-8 bg-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                    <h1 className="text-4xl font-extrabold text-black mt-4">{item.desc}</h1>
                </div>

                {/* City Tour Package Section */}
                <div className="flex flex-col items-center p-8">
                    {item.id == 2 ? (
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    
                            <img 
                                src="https://via.placeholder.com/400x300" 
                                alt="City Tour" 
                                className="w-full md:w-1/2 object-cover"
                            />

                            <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">CITY TOUR</h3>
                                <p className="text-gray-600 mb-4">
                                JELAJAHI KEINDAHAN KOTA MALANG DALAM SATU HARI.
                                CITY TOUR KAMI SIAP MEMBAWA ANDA KE TEMPAT-TEMPAT IKONIK DAN TERSEMBUNYI
                                YANG SAYANG UNTUK DILEWATKAN.
                                </p>
                                <div className="text-lg font-bold text-gray-800">
                                Start From: <span className="text-blue-500">Rp 200.000</span>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"></div>
                    )}
                    
                </div>
            </div>
            {/* <div className="flex items-center justify-center w-full h-full overflow-hidden">
                <div className="max-w-[1366px] h-full m-auto flex items-center justify-center gap-[30px]">
                    <div className="flex-1 h-[60%]" ref={ref}>
                        <img className='h-[100%] w-[100%] object-cover' src={`${import.meta.env.BASE_URL}/`+item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 style={{ y }}>{item.title}</h2>
                        <p>{item.desc}</p>
                    </motion.div>
                </div>
            </div> */}
        </section>
    )
}

const Hero = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "-250%"])
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "225%"])
    const yMountain5 = useTransform(scrollYProgress, [0,1], ["12%", "500%"])
    const yMountain4 = useTransform(scrollYProgress, [0,1], ["12%", "400%"])
    const yMountain3 = useTransform(scrollYProgress, [0,1], ["12%", "300%"])
    const yMountain2 = useTransform(scrollYProgress, [0,1], ["12%", "200%"])
    const yMountain1 = useTransform(scrollYProgress, [0,1], ["10%", "150%"])

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton:{
            opacity: 0,
            y: 20,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        },
    };

    return (
        <div className="relative w-auto" ref={ref}>
            <div className="sticky top-0 left-0 pt-13 text-center text-orange-400 text-4xl">
                <motion.div style={{ x: yText }} className='titleParallax flex flex-col items-center h-[100vh] absolute w-[100%]'>
                    {/* <h1 className='font-jockey'>Let's <span className='text-[#015B6F] font-jockey'>Travel</span></h1> */}
                    <img className='logo1 mt-[20%]' src='/assets/hero_logo_1.png'/>
                    <span className='font-jockey text-[#646464] text-xl -mt-9'>Mau city tour seru, perjalanan nyaman, atau sewa mobil yang fleksibel?  Kami punya semuanya! <br/> 
                    Jelajahi Malang dengan cara Anda bersama agency tour & travel terbaik di kota</span>
                    <motion.img src='/swipe-up.png' className='scrollUp mt-0' initial={{ y: "50%" }} variants={textVariants} animate="scrollButton"/>
                    {/* <button className="mt-5 bg-gray-200 text-[#646464] text-xl font-jockey opacity-90 py-2 px-6 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
                    book now
                    </button> */}
                </motion.div>
                <motion.div style={{ y: yBg }} className='skyParallax'></motion.div>
                <motion.div style={{ y: yMountain5 }} className='mountain5'></motion.div>
                <motion.div style={{ y: yMountain4 }} className='mountain4'></motion.div>
                <motion.div style={{ y: yMountain3 }} className='mountain3'></motion.div>
                <motion.div style={{ y: yMountain2 }} className='mountain2'></motion.div>
                <motion.div style={{ y: yMountain1 }} className='mountain1'></motion.div>

                
            </div>
            {/* <Hero/> */}
            {items.map((item) => (
                // <Single key={item.id} title={item.title} desc={item.desc} />
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Hero