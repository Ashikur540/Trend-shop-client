import React from 'react'
import Slider from 'react-slick'

export const Brands = () => {
    const imgs = [
        { src: 'https://www.svgrepo.com/show/303605/zara-logo.svg', name: 'zara' },
        { src: 'https://www.svgrepo.com/show/305958/dior.svg', name: 'dior' },
        { src: 'https://www.svgrepo.com/show/303252/chanel-2-logo.svg', name: 'channel' },
        { src: 'https://www.svgrepo.com/show/330039/bata.svg', name: 'bata' },
        { src: 'https://www.svgrepo.com/show/443275/brand-nike.svg', name: 'nike' },
        { src: 'https://www.svgrepo.com/show/303462/versace-medusa-2-logo.svg', name: 'Calvin Klein' },
        { src: 'https://www.svgrepo.com/show/303646/burberry-3-logo.svg', name: 'Burberry' },

    ]
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }
    return (

        <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40 bg-gray-100 dark:bg-gray-800">
            <div className="container relative z-[1] m-auto px-6 md:px-12">
                <div className="m-auto text-center md:w-8/12 lg:w-6/12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Our heroes <span className="text-[#FF965C]">contribute</span> to the development of tailus
                    </h2>
                </div>
                <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
                    {/* <div className="flex flex-wrap justify-center gap-6">
                        {
                            imgs.map(img => <div
                                className="max-w-[150px] group rounded-xl   dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src={img.src}
                                    className="contrast-0 transition group-hover:contrast-100 w-full"

                                    alt={img.name}
                                />
                            </div>)
                        }
                    </div> */}
                    <Slider {...settings}>
                        {
                            imgs.map(img => <div
                                className="max-w-[150px] group rounded-xl   dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                            >
                                <img
                                    src={img.src}
                                    className="contrast-0 transition group-hover:contrast-100 w-full"

                                    alt={img.name}
                                />
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
