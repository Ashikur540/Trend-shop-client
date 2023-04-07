import React from 'react'
import { PopulerCategories } from '../components/Populer Categories/PopulerCategories'
import { PopulerProducts } from '../components/POpuler products/PopulerProducts'
import { Sale } from '../components/Summer Sale/Sale'
import { Banner } from './Banner/Banner'

export const Home = () => {
    return (
        <>
            <Banner />
            <PopulerCategories />
            <PopulerProducts />
            <Sale />
        </>
    )
}
