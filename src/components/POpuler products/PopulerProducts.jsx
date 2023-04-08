import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Slider from "react-slick";
import { PCard } from '../../components/Cards/Populer products/PCard';
export const PopulerProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 2224,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1424,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        <motion.section id='populer-products' className='w-full container py-12 lg:py-20 my-10 '
            initial={{ y: 100, opacity: 0, }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 60, },
                opacity: { duration: 1.6 },
                ease: 'easeIn',
                duration: 1
            }}>
            <motion.h3 className="text-3xl md:text-4xl font-medium tracking-normal text-slate-900 text-center my-4 md:my-12"
                initial={{ y: 70, opacity: 0, }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{
                    delay: 0.2,
                    x: { type: 'spring', stiffness: 60, },
                    opacity: { duration: 1.6 },
                    ease: 'easeIn',
                    duration: 1
                }}>
                <span className="text-accent">Populer</span>  products
            </motion.h3>
            <div className="w-full relative">
                <Slider {...settings}>
                    {
                        products?.filter(product => product.category !== 'electronics')
                            .filter(product => product?.rating?.rate > 4)
                            .map(product => <PCard product={product} key={product.id} />)
                    }
                </Slider>
            </div>

        </motion.section>
    )
}

const LeftArrow = ({ onClick }) => {
    return (
        <div className="absolute right-10 -top-24" onClick={onClick}>
            <div className="bg-slate-100 border border-[#9c8d81] shadow-md h-12 w-12  rounded-full grid place-items-center cursor-pointer">
                <MdOutlineArrowForwardIos />
            </div>
        </div>
    )
}
const RightArrow = ({ onClick }) => {
    return (
        <div className="absolute  right-24 -top-24" onClick={onClick}>
            <div className="bg-slate-100  shadow-md h-12 w-12 rounded-full grid place-items-center cursor-pointer">
                <MdOutlineArrowBackIos />
            </div>
        </div>
    )
}