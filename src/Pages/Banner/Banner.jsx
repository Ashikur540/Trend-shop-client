import React from 'react'
import { BannerBottom } from '../../components/Banner bottom/BannerBottom'

export const Banner = () => {
    return (
        <div className="w-full">
            <section id="banner" className=" relative bg-hero-image object-cover bg-cover bg-no-repeat h-[60vh] md:h-[72vh] max-h-full">
                <h1 className="absolute  bottom-4 left-10 text-4xl md:text-7xl text-left font-bold leading-snug tracking-wide text-white">
                    Ware Your Perfect
                </h1>

            </section>
            <BannerBottom />
        </div>
    )
}
