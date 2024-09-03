import React, { useRef } from 'react'
import { animate, motion, stagger, useScroll, useSpring, useTransform } from "framer-motion"
import "./Hero.css"
import Ourservices from '../ourservices/Ourservices';

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
        title: "UNCOVER PLACE",
        desc: "POPULAR DESTINATION"
    },
    {
        id: 4,
        title: "TESTIMONIALS",
        desc: "WHAT PEOPLE SAY ABOUT US"
    },
];


const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    const swipeLand=useTransform(scrollYProgress, [0,1], ["70%", "-221%"])
    const swipeSea=useTransform(scrollYProgress, [0,1], ["70%", "-221%"])
    const swipeClouds=useTransform(scrollYProgress, [0,1], ["-100%", "350%"])
    const swipeMountain=useTransform(scrollYProgress, [0,1], ["70%", "-222%"])
    const swipeSun=useTransform(scrollYProgress, [0,1], ["90%", "-300%"])
    const swipeSky=useTransform(scrollYProgress, [0,1], ["70%", "-221%"])
    

    return (
        <section id='singleContent'>
            <div className="h-[100%]">
                {/* Header Section */}
                <div className="text-center py-8">
                    <h2 className="text-2xl font-inder text-[#096477]">{item.title}</h2>
                    <h1 className="text-6xl font-inder font-bold text-black mt-10">{item.desc}</h1>
                </div>

                <div className="flex flex-col items-center mt-[1%] h-[100%]">
                    {item.id == 2 ? (
                        <>
                            <Ourservices/>
                            <motion.div style={{ x: swipeLand }} className='serviceParallax1'></motion.div> 
                            <motion.div style={{ x: swipeSea }} className='serviceParallax2'></motion.div> 
                            <motion.div style={{ y: swipeMountain }} className='serviceParallax3'></motion.div> 
                            <div className='serviceParallax4'></div> 
                            <motion.div style={{ x: swipeSky }} className='serviceParallax5'></motion.div> 
                            <motion.div style={{ y: swipeSun }} className='serviceParallax6'></motion.div> 
                            <motion.div style={{ x: swipeClouds }} className='serviceParallax7'></motion.div> 
                        </>
                    ):(
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"></div>
                    )}                   
                </div>
            </div>
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

    const sliderVariants = {
        initial: {
            x: -100,
        },
        animate: {
            x: "50%",
            transition: {
                repeat: Infinity,
                repeatType:"mirror",
                duration: 30,
            },
        },
    };

    return (
        <div className="relative w-auto" ref={ref}>
            <div className="sticky top-0 left-0 pt-13 text-center text-orange-400 text-4xl">
                <motion.div style={{ x: yText }} className='titleParallax flex flex-col items-center h-[100vh] absolute w-[100%]'>
                    <motion.img src='/assets/hotel_awan_1.png' className='absolute' variants={sliderVariants} initial="initial" animate="animate"/>
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