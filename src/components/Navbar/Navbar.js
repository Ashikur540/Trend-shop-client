import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../Assets/Photos/trend-shop-low-resolution-logo-color-on-transparent-background.png';
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const allLinks = [
        { url: '/', name: 'Home' },
        { url: '/products', name: 'Products' },
        { url: '/blogs', name: 'Blogs' },
        { url: '/contact', name: 'Contact' },
    ]

    // console.log(isScrolled);

    window.onscroll = () => {
        // console.log(window.pageYOffset); /*defines the scroll offset */
        const value = window.pageYOffset;
        setIsScrolled(value === 0 ? false : true);
        return () => window.onscroll = null;

    }
    // console.log(isScrolled);


    return (
        <div className={`z-10 px-4 w-full fixed py-5 mx-auto  md:px-24 lg:px-32 bg-gradient-to-t from-transparent to-gray-400 transition duration-300 ease-linear ${isScrolled && 'bg-white/75 bg-blur-xl'}
        `}>
            <div className="relative flex items-center justify-between mx-auto w-full">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img src={logo} alt="logo" className="w-[20%]" />

                </Link>
                <ul className=" items-center hidden space-x-8 lg:flex">
                    {
                        allLinks.map((link, i) =>
                        (<li key={i}>
                            <NavLink
                                to={link.url}
                                aria-label="Our product"
                                title="Our product"
                                className={({ isActive }) => isActive ? 'text-accent font-bold' : `font-normal tracking-wide text-gray-700 transition-colors duration-700 hover:text-purple-accent-400`}
                            >
                                {link.name}
                            </NavLink>
                        </li>))
                    }

                    <li>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary hover:bg-[#0080C0] focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full transform ease-linear duration-1000">
                            <div className="p-5 bg-white/80 border rounded shadow-sm  backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-4 ">
                                    <div>
                                        {/* logo */}
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img src={logo} alt="logo" className="w-[20%]" />

                                        </Link>
                                    </div>
                                    <div>
                                        {/* hamberger button  */}
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-800" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {
                                            allLinks.map((link, i) =>
                                            (<li key={i}>
                                                <NavLink
                                                    to={link.url}
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className={({ isActive }) => isActive ? 'text-accent font-bold' : `font-medium tracking-wide text-gray-700 transition-colors duration-700 hover:text-purple-accent-400`}
                                                >
                                                    {link.name}
                                                </NavLink>
                                            </li>))
                                        }

                                        <li>
                                            <Link
                                                to="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary hover:bg-[hsl(190,100%,19%)] focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};