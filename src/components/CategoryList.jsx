import React from 'react'
import { Link } from 'react-router-dom'
import { imgs, categories } from '../../data'
import CategoryCard from './CategoryCard'

const [ imgCiencia, imgDeportes, imgFilosofia, imgGeografia, imgHistoria, imgLiteratura, imgTecnologia ] = imgs

const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
        {/* Category Link Ciencia */}
        <CategoryCard category={categories.ciencia} src={imgCiencia} alt={categories.ciencia} gradientColor='from-purple-500 to-pink-500' />

        {/* Category Link Deportes */}
        <CategoryCard category={categories.deportes} src={imgDeportes} alt={categories.deportes} gradientColor='from-lime-400 to-teal-700' />

        {/* Category Link Filosofia */}
        <CategoryCard category={categories.filosofia} src={imgFilosofia} alt={categories.filosofia} gradientColor='from-red-400 to-zinc-400' />

        {/* Category Link Geografia */}
        <CategoryCard category={categories.geografia} src={imgGeografia} alt={categories.geografia} gradientColor='from-cyan-200 to-lime-200' />

        {/* Category Link Historia */}
        <CategoryCard category={categories.historia} src={imgHistoria} alt={categories.historia} gradientColor='from-sky-300 to-indigo-900' />

        {/* Category Link literatura */}
        <CategoryCard category={categories.literatura} src={imgLiteratura} alt={categories.literatura} gradientColor='from-amber-400 to-emerald-600' />

        {/* Category Link Tecnologia */}
        <CategoryCard category={categories.tecnologia} src={imgTecnologia} alt={categories.tecnologia} gradientColor='from-violet-900 to-pink-500' />
    </div>
  )
}

export default CategoryList