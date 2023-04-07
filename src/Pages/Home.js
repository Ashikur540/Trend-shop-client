import React from 'react'
import { PopulerCategories } from '../components/Populer Categories/PopulerCategories'
import { PopulerProducts } from '../components/POpuler products/PopulerProducts'
import { Banner } from './Banner/Banner'

export const Home = () => {
    return (
        <>
            <Banner />
            <PopulerCategories />
            <PopulerProducts />
        </>
    )
}
