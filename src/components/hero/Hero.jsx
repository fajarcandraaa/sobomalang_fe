import React, { useRef } from 'react'
import { animate, motion, stagger, useScroll, useSpring, useTransform } from "framer-motion"
import "./Hero.css"
import Ourservices from '../ourservices/Ourservices';
import Destination from '../destination/Destination';

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

    const swipeLand=useTransform(scrollYProgress, [0,1], ["0%", "1%"])
    const swipeSea=useTransform(scrollYProgress, [0,1], ["74%", "-221%"])
    const swipeClouds=useTransform(scrollYProgress, [0,1], ["-100%", "350%"])
    const swipeMountain=useTransform(scrollYProgress, [0,1], ["74%", "-222%"])
    const swipeSun=useTransform(scrollYProgress, [0,1], ["90%", "-300%"])
    const swipeSky=useTransform(scrollYProgress, [0,1], ["74%", "-221%"])

    // const backgroundImage = item.id === 3 ? '#ececec' : '#ffffff';
    // let backgroundImage = ''
    // if (item.id == 3) {
    //     backgroundImage = '/assets/main_highway.png'
    // } text-[#c5c5c5] ffffff ececec
    

    return (
        <section id='singleContent'>
            <div className="h-[100%] overflow-y-hidden bg-custom-white">
                <div className="flex flex-col items-center mt-[1%] h-[100%] overflow-y-hidden">
                    {item.id == 2 ? (
                        <>
                                <Ourservices data={item}/>
                                <motion.div style={{ x: swipeLand }} className='serviceParallax1'></motion.div> 
                                <motion.div style={{ x: swipeSea }} className='serviceParallax2'></motion.div> 
                                <motion.div style={{ y: swipeMountain }} className='serviceParallax3'></motion.div> 
                                <div className='serviceParallax4'></div> 
                                <motion.div style={{ x: swipeSky }} className='serviceParallax5'></motion.div> 
                                <motion.div style={{ y: swipeSun }} className='serviceParallax6'></motion.div> 
                                <motion.div style={{ x: swipeClouds }} className='serviceParallax7'></motion.div> 
                        </>
                    ) : item.id == 3 ? (
                        <Destination data={item}/>
                        // <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"></div>
                    ) : (
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

    const xparallaxMountain2 = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    const xparallaxMountain1 = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    const xparallaxCar = useTransform(scrollYProgress, [0,1], ["0%", "-400%"])

    const yparallaxMountain2 = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const yparallaxLand2 = useTransform(scrollYProgress, [0,1], ["0%", "425%"])
    const yparallaxLand1 = useTransform(scrollYProgress, [0,1], ["0%", "525%"])
    const yparallaxBottomPlan = useTransform(scrollYProgress, [0,1], ["0%", "555%"])
    const yparallaxTopPlan = useTransform(scrollYProgress, [0,1], ["0%", "-200%"])
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "-325%"])
    const yMountain5 = useTransform(scrollYProgress, [0,1], ["12%", "500%"])
    const yMountain4 = useTransform(scrollYProgress, [0,1], ["12%", "400%"])
    const yMountain3 = useTransform(scrollYProgress, [0,1], ["12%", "300%"])
    const yMountain2 = useTransform(scrollYProgress, [0,1], ["12%", "200%"])
    const yMountain1 = useTransform(scrollYProgress, [0,1], ["12%", "150%"])

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
            y: -20,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        },
    };

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-50%",
            transition: {
                repeat: Infinity,
                repeatType:"mirror",
                duration: 50,
            },
        },
    };

    return (
        <div className="sobomalang_container relative w-auto" ref={ref}>
            <div className="bgHero ticky top-0 left-0 pt-13 text-orange-400 text-4xl">
                {/* <div className='bgHero'></div> */}
                <motion.div style={{ x: yText, y: yText }} className='titleParallax flex flex-col ml-24 h-[100vh] absolute w-[100%]'>
                    <img className='logo1 mt-[5%]' src='/assets/hero_logo_1.png'/>
                    <span className='font-jockey text-[#646464] text-xl -mt-1'>Mau city tour seru, perjalanan nyaman, atau sewa mobil yang fleksibel?  Kami punya semuanya! <br/> 
                    Jelajahi Malang dengan cara Anda bersama agency tour & travel terbaik di kota</span>
                    <motion.img src='/swipe-up.png' className='pr-[95%] scrollUp mt-5' initial={{ y: "50%" }} variants={textVariants} animate="scrollButton"/>                    
                </motion.div>
                <motion.div style={{ y: yparallaxMountain2, x: xparallaxMountain2}} className='parallaxMountain2'></motion.div>
                <motion.div style={{ x: xparallaxMountain1}} className='parallaxMountain1'></motion.div>
                <motion.div style={{ y: yparallaxLand2 }} className='parallaxLand2'></motion.div>
                <motion.div style={{ y: yparallaxLand1 }} className='parallaxLand1'></motion.div>
                <motion.div style={{ x: xparallaxCar }} className='parallaxHuman2'></motion.div>
                <motion.div style={{ y: yparallaxBottomPlan }} className='parallaxBottomPlant'></motion.div>
                <motion.div style={{ x: xparallaxCar }} className='parallaxCar'></motion.div>
                <motion.div style={{ x: xparallaxMountain1}} className='parallaxTree1'></motion.div>
                <motion.div style={{ y: yparallaxTopPlan }} className='parallaxTopPlant'></motion.div>
                <motion.div style={{ y: yparallaxLand1 }} className='parallaxHuman1'></motion.div>

                
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