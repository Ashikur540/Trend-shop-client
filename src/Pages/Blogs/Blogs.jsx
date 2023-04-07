import React from 'react'
import { Link } from 'react-router-dom'

export const Blogs = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h2 class="text-3xl font-semibold text-gray-800 capitalize md:text-4xl dark:text-white text-center">
                    Our Latest News & Blogs
                </h2>

                <div class="grid grid-cols-1  gap-8 mt-8 md:mt-16 md:grid-cols-2">


                    <div className="max-w-md mx-auto text-center lg:text-left row-span-2 bg-blog-banner bg-cover object-cover bg-no-repeat">
                        <header className=' w-full p-4 flex flex-col justify-start'>
                            <h2 className="text-2xl font-bold text-gray-900 ">Special ramadan week</h2>

                            <p className="mt-4 text-gray-500 w-full md:w-[60%] text-center md:text-left ">
                                Grab the best from our nearest outlet now!.no more ..
                            </p>
                            <Link
                                to="/"
                                className=" px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring w-fit"
                            >
                                Shop All
                            </Link>
                        </header>



                    </div>
                    <div className='gap-4'>
                        <div class="lg:flex my-6">
                            <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1535553786276-ba3c1681ad75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

                            <div class="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    The Top Fashion Trends for Spring 2023: Our Must-Have Picks
                                </a>

                                <span class="text-sm text-gray-500 dark:text-gray-300">On: 30 march 2023</span>
                            </div>
                        </div>

                        <div class="lg:flex my-6">
                            <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1580442386082-c682077d5c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />

                            <div class="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Fashion Meets Function: Our Favorite Athleisure Pieces
                                </a>

                                <span class="text-sm text-gray-500 dark:text-gray-300">On: 13 february 2019</span>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}
