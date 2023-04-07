import React from 'react'
import { Link } from 'react-router-dom'

export const PCard = ({ product }) => {
    const { title, price, category, description, image, rating } = product
    return (
        <Link to="#" className="w-full max-w-sm shadow-md mx-4 max-h-[500px] my-4 overflow-hidden ">
            <figure className='p-1 overflow-hidden '>
                <img
                    alt={title}
                    src={image}
                    className="h-96 max-h-[420px] w-full object-cover  p-4 hover:scale-110 duration-500 ease-in-out border border-slate-100"
                />

            </figure>

            <div className="px-5 pb-5 pt-6">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title.length > 40 ? title.slice(0, 40) + '...' : title}</h5>

                <div className="flex items-center mt-2.5 mb-5">

                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.rate}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <span href="#" className="text-white bg-[#A67E5F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</span>
                </div>
            </div>
        </Link>

        // <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //     <Link href="#">
        //         <img className="p-8 rounded-t-lg" src={image} alt={title} />
        //     </Link>
        //     <div className="px-5 pb-5">
        //         <div href="#">
        //             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        //         </div>
        //         <div className="flex items-center mt-2.5 mb-5">

        //             <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.rate}</span>
        //         </div>
        //         <div className="flex items-center justify-between">
        //             <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        //             <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        //         </div>
        //     </div>
        // </div>


    )
}
