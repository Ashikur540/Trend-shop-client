import React from 'react'

import { Brands } from '../components/Brands/Brands'
import { PopulerCategories } from '../components/Populer Categories/PopulerCategories'
import { PopulerProducts } from '../components/POpuler products/PopulerProducts'
import { Sale } from '../components/Summer Sale/Sale'
import { Banner } from './Banner/Banner'
import { Blogs } from './Blogs/Blogs'

export const Home = () => {
    return (
        <>
            <Banner />
            <PopulerCategories />
            <PopulerProducts />
            <Sale />
            <Brands />
            <Blogs></Blogs>

        </>
    )
}
