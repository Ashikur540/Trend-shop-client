import React from 'react'
import { Link } from 'react-router-dom'

export const PCard = ({ product }) => {
    const { title, price, category, description, image, rating, id } = product
    return (
        <Link to={`/products/${id}`} className="w-full max-w-sm shadow-md mx-4 max-h-[500px] my-4 overflow-hidden transition-shadow duration-700">
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

                    <span className="bg-[rgba(241,205,186,0.66)] text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-none dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.rate}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <button className="text-white bg-[accent] hover:bg-[accent] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center ">Add to cart</button>
                </div>
            </div>
        </Link>



    )
}
