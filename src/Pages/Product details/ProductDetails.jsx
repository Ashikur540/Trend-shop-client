import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
export const ProductDetails = () => {
    const productData = useLoaderData();
    const { category, description, image, price, rating, title } = (productData);


    return (

        <div className="relative mx-auto max-w-screen-xl px-4 lg:px-14 py-32">
            <div>
                <h1 className="text-2xl font-bold lg:text-3xl">Simple Clothes Basic Tee
                </h1>

                <p className="mt-1 text-sm text-gray-500">rating:🧡{rating?.rate}</p>
                <p className="mt-1 text-sm text-gray-500">views:✅{rating?.count}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                <div className="lg:col-span-3">
                    <div className="relative mt-4">
                        <figure className="overflow-hidden">
                            <img
                                alt={title}
                                src={image}
                                className="h-72 w-full rounded-xl object-cover lg:h-[540px] hover:scale-150 duration-1000"
                            />
                        </figure>

                        <div
                            className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                        >
                            <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>

                            <span className="ml-1.5 text-xs"> Hover to zoom </span>
                        </div>
                    </div>


                </div>

                <div className="lg:sticky lg:top-0">
                    <form className="space-y-4 lg:pt-8">

                        <div className="rounded border bg-gray-100 p-4">
                            <p className="text-sm">
                                <span className="block"> Pay as low as $3/mo with 0% APR. </span>

                                <Link to="/products" className="mt-1 inline-block underline"> Find out more </Link>
                            </p>
                        </div>

                        <div>
                            <p className="text-xl text-accent font-bold">${price}</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                        >
                            Add to cart
                        </button>


                    </form>
                </div>

                <div className="lg:col-span-3">
                    <div className="max-w-none">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )

}
