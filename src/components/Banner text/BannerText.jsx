import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { staggerChildren, wordAnimation } from '../../utilities/motions';
export const BannerText = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);
    return (
        <motion.h1 className="absolute  bottom-4 left-10 text-4xl md:text-7xl text-left font-bold leading-snug tracking-wide text-white transition-all ease-linear duration-[500ms]"
            style={{ x }} variants={staggerChildren}>
            {children.split(" ").map((word, idx) => (
                <div key={idx} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block overflow-hidden"
                        variants={wordAnimation}
                    >
                        {word + "\u00A0"}
                    </motion.span>
                </div>
            ))}

        </motion.h1>
    )
}

// {/* <motion.span variants={staggerChildren}>
//     {title.split(" ").map((word, idx) => (
//         <div key={idx} className="inline-block overflow-hidden">
//             <motion.span
//                 className="inline-block overflow-hidden"
//                 variants={wordAnimation}
//             >
//                 {word + "\u00A0"}
//             </motion.span>
//         </div>
//     ))}
// </motion.span> */}

export const BannerBottomText = ({ children }) => {
    return (
        <motion.h1 className=" text-4xl md:text-7xl text-left font-bold leading-snug tracking-wide text-slate-900"
            variants={staggerChildren}>
            {children.split(" ").map((word, idx) => (
                <div key={idx} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block overflow-hidden"
                        variants={wordAnimation}
                    >
                        {word + "\u00A0"}
                    </motion.span>
                </div>
            ))}

        </motion.h1>
    )
}

export const SectionHeaderText = ({ children }) => {
    return (
        <motion.h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
            variants={staggerChildren}>
            {children.split(" ").map((word, idx) => (
                <div key={idx} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block overflow-hidden"
                        variants={wordAnimation}
                    >
                        {word + "\u00A0"}
                    </motion.span>
                </div>
            ))}

        </motion.h2>
    )
}

