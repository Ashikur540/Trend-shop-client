import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export const PopulerCategories = () => {
    return (
        <section id='populer-categories' className='w-full px-4 container py-12 lg:py-20 my-10'>
            <motion.h3 className="text-3xl md:text-4xl font-medium tracking-normal text-slate-900 text-center my-4 md:my-12"
                initial={{ y: -100, opacity: 0, }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{
                    delay: 0.2,
                    x: { type: 'spring', stiffness: 60, },
                    opacity: { duration: 1.6 },
                    ease: 'easeIn',
                    duration: 1
                }} >
                <span className="text-accent">Populer</span>  categories this Week
            </motion.h3>
            <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1 */}
                <motion.div to={`/products/men's clothing`} className="group relative block bg-black transition-all ease-linear duration-300 overflow-hidden"
                    initial={{ x: -100, opacity: 0, }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60, },
                        opacity: { duration: 1.6 },
                        ease: 'easeIn',
                        duration: 1
                    }}>
                    <Link to={`/products/men's clothing`}>
                        <img
                            alt="Mens clothing"
                            src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50  "
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                #20% OFF
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Men's clothing</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Dressing for Success: A Guide to Men's Professional Attire.

                                    </p>
                                    <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                        DISCOUNT CODE - VATR3920
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
                {/* 1 */}
                <motion.div to="/products/women's clothing" className="group relative block bg-black"
                    initial={{ x: 100, opacity: 0, }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60, },
                        opacity: { duration: 1.6 },
                        ease: 'easeIn',
                        duration: 1
                    }}>
                    <Link to="/products/women's clothing">
                        <img
                            alt="Women's clothing"
                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                #30% OFF
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Women's clothing</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Dressing for Success: A Guide to Men's Professional Attire.

                                    </p>
                                    <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                        DISCOUNT CODE - VATR3920
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
                {/* 1 */}
                <motion.div className="group relative block bg-black w-full md:col-span-2"
                    initial={{ y: 90, opacity: 0, }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60, },
                        opacity: { duration: 1.6 },
                        ease: 'easeIn',
                        duration: 1
                    }}>
                    <Link to="/products/jewelery">
                        <img
                            alt="Ladies' jewelry"
                            src="https://images.pexels.com/photos/792760/pexels-photo-792760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                #20% OFF
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Ladies' jewelry</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Dressing for Success: A Guide to Men's Professional Attire.

                                    </p>
                                    <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                        DISCOUNT CODE - TTR3920
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>


            </div>
        </section>
    )
}
