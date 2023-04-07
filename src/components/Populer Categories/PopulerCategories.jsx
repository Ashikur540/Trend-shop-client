import React from 'react'
import { Link } from 'react-router-dom'

export const PopulerCategories = () => {
    return (
        <section id='populer-categories' className='w-full px-4 container py-12 lg:py-20 my-10'>
            <h3 className="text-3xl md:text-4xl font-medium tracking-normal text-slate-900 text-center my-4 md:my-12">
                Populer categories this Week
            </h3>
            <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1 */}
                <Link to="#" className="group relative block bg-black">
                    <img
                        alt="Developer"
                        src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
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
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    DISCOUNT CODE - VATR3920
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* 1 */}
                <Link to="#" className="group relative block bg-black">
                    <img
                        alt="Developer"
                        src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
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
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    DISCOUNT CODE - VATR3920
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* 1 */}
                <Link to="#" className="group relative block bg-black w-full md:col-span-2">
                    <img
                        alt="Developer"
                        src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
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
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    DISCOUNT CODE - VATR3920
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>


            </div>
        </section>
    )
}
