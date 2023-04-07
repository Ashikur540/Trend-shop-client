import React from 'react'
// import sale from '../../Assets/Photos/summer.png'
export const Sale = () => {
    return (
        <section id='summer-sale' className='w-full px-4 container py-12 lg:py-20 my-10'>
            <div
                className="relative max-w-7xl overflow-hidden object-cover bg-cover bg-[100%] bg-no-repeat mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1564463836257-f028d0ff4446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="w-full max-h-[500px] object-cover " alt='summer_sale' />

                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-20">

                </div>
                <div
                    className="absolute bottom-0 left-[8%] right-0 max-w-3xl z-10 top-[30%] sm:top-[50%] md:top-[50%] ">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-50">
                        New Summer <span className="leading-relaxed text-[rgb(245,132,87)]">collection</span>
                    </h2>

                    <button className="rounded-none  text-sm px-5 py-4 text-center text-[#FF965C] bg-white hover:bg-[#eeeceb]  font-medium flex justify-between items-center gap-8">Shop Now
                        <span>
                            <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3536 4.35356C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464468C20.9763 0.269206 20.6597 0.269206 20.4645 0.464468C20.2692 0.65973 20.2692 0.976313 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53554C20.6597 7.7308 20.9763 7.7308 21.1716 7.53554L24.3536 4.35356ZM-4.37114e-08 4.5L24 4.5L24 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="black" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </section>
    )
}
