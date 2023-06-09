import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export const Blogs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pt-14">
            <div className="container px-6 py-10 mx-auto">
                <motion.h2 className="text-3xl font-semibold text-gray-800 capitalize md:text-4xl dark:text-white text-center"
                    initial={{ y: 60, opacity: 0, }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60, },
                        opacity: { duration: 1.6 },
                        ease: 'easeIn',
                        duration: 1
                    }}>
                    Our   <span className="text-accent">Latest</span> News & Blogs
                </motion.h2>


                <div className="grid grid-cols-1  gap-8 mt-8 md:mt-16 md:grid-cols-2">


                    <motion.div className="max-w-md mx-auto text-center lg:text-left row-span-2 bg-blog-banner bg-cover object-cover bg-no-repeat"
                        initial={{ x: -100, opacity: 0, }}
                        whileInView={{ x: 0, opacity: 100 }}
                        transition={{
                            delay: 0.2,
                            x: { type: 'spring', stiffness: 60, },
                            opacity: { duration: 1.6 },
                            ease: 'easeIn',
                            duration: 1
                        }}>
                        <header className=' w-full p-4 flex flex-col justify-start'>
                            <h2 className="text-2xl font-bold text-gray-900 ">Special ramadan week</h2>

                            <p className="mt-4 text-gray-500 w-full md:w-[60%] text-center md:text-left ">
                                Grab the best from our nearest outlet now!.no more ..
                            </p>
                            <Link
                                to="/products"
                                className=" px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring w-fit"
                            >
                                Shop All
                            </Link>
                        </header>



                    </motion.div>
                    <div className='gap-4'>
                        <motion.div className="lg:flex my-6"
                            initial={{ x: 100, opacity: 0, }}
                            whileInView={{ x: 0, opacity: 100 }}
                            transition={{
                                delay: 0.2,
                                x: { type: 'spring', stiffness: 60, },
                                opacity: { duration: 1.6 },
                                ease: 'easeIn',
                                duration: 1
                            }}>
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1535553786276-ba3c1681ad75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    The Top Fashion Trends for Spring 2023: Our Must-Have Picks
                                </a>

                                <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 march 2023</span>
                            </div>
                        </motion.div>

                        <motion.div className="lg:flex my-6"
                            initial={{ x: 100, opacity: 0, }}
                            whileInView={{ x: 0, opacity: 100 }}
                            transition={{
                                delay: 0.4,
                                x: { type: 'spring', stiffness: 60, },
                                opacity: { duration: 1.6 },
                                ease: 'easeIn',
                                duration: 1
                            }}>
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1580442386082-c682077d5c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Fashion Meets Function: Our Favorite Athleisure Pieces
                                </a>

                                <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 february 2019</span>
                            </div>
                        </motion.div>



                    </div>
                </div>
            </div>
        </section>
    )
}
