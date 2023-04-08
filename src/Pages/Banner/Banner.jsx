import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { BannerBottom } from '../../components/Banner bottom/BannerBottom';
import { BannerText } from '../../components/Banner text/BannerText';
import { heroImagescaleUp } from '../../utilities/motions';
export const Banner = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);
    return (
        <motion.div className="w-full" initial="initial" animate="animate">
            <motion.section id="banner" className=" relative bg-hero-image object-cover bg-cover bg-no-repeat h-[60vh] md:h-[72vh] max-h-full" variants={heroImagescaleUp}>
                {/* <motion.h1 className="absolute  bottom-4 left-10 text-4xl md:text-7xl text-left font-bold leading-snug tracking-wide text-white transition-all ease-linear duration-[500ms]"
                    style={{ x }}>
                    Ware Your Perfect
                </motion.h1> */}
                <BannerText>
                    Ware Your Perfect
                </BannerText>

            </motion.section>
            <BannerBottom />
        </motion.div>
    )
}
