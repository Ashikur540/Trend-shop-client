import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { FaderisingUp } from '../../utilities/motions';
import { BannerBottomText } from '../Banner text/BannerText';

export const BannerBottom = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

    return (
        <motion.section className='py-4 w-full  relative' initial="initial" animate="animate">
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between flex-wrap  gap-4 items-center px-8">
                <motion.div className="flex gap-8 items-center" style={{ x }} variants={FaderisingUp}>
                    {/* <h1 className=" text-4xl md:text-7xl text-left font-bold leading-snug tracking-wide text-slate-900">
                        Look
                    </h1> */}
                    <BannerBottomText>
                        Look
                    </BannerBottomText>

                    <div className="w-full md:w-1/2">
                        <p className="text-lg font-normal text-slate-700 tracking-wide">
                            Explore our hand-picked selection of must-have outfits and accessories
                        </p>
                    </div>
                </motion.div>
                <motion.button className="rounded-none w-full sm:w-full  max-w-full md:w-full lg:w-auto xl:w-auto  py-6 px-10 bg-black text-white font-medium flex justify-between items-center gap-8"

                >Save Changes
                    <span>
                        <svg width="21" height="22" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.4796 4.2466C30.6158 3.42944 30.0638 2.6566 29.2466 2.52041L15.9303 0.301023C15.1131 0.164831 14.3403 0.71686 14.2041 1.53402C14.0679 2.35117 14.6199 3.12401 15.4371 3.26021L27.2738 5.23299L25.301 17.0697C25.1648 17.8869 25.7169 18.6597 26.534 18.7959C27.3512 18.9321 28.124 18.3801 28.2602 17.5629L30.4796 4.2466ZM1.87186 25.2206L29.8719 5.2206L28.1281 2.7794L0.128143 22.7794L1.87186 25.2206Z" fill="white" />
                        </svg>

                    </span>
                </motion.button>
            </div>
        </motion.section>
    )
}
