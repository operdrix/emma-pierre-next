import React from 'react'
import styles from './todayProducts.module.scss'
import Link from 'next/link'
import TodayProductCard from './todayProductCard/TodayProductCard'

const TodayProducts = () => {
  return (
    <div className={styles.todayProducts}>
      <div className={styles.productsHeader}>
        <h2>Produits du moment</h2>
        <Link href="/products">Voir plus</Link>
      </div>
      <div className={styles.productsCards}>
        <TodayProductCard
          cardSize='big'
          href='/products/1'
          src='/img/products/CollierAlexandra.jpg'
          alt='Création de Bijoux'
          productName='Collier Alexandra'
          productPrice='49.3€'
        />
        <TodayProductCard
          cardSize='small'
          href='/products/2'
          src='/img/products/CollierBlancFeuilles.jpg'
          alt='Création de Bijoux'
          productName='Collier Blanc Feuille'
          productPrice='49.3€' />
        <TodayProductCard
          cardSize='small'
          href='/products/3'
          src='/img/products/BouclesRose.jpg'
          alt='Création de Bijoux'
          productName='Boucles Roses'
          productPrice='49.3€' />
        <TodayProductCard
          cardSize='small'
          href='/products/4'
          src='/img/products/CollierPerleNoirOr.jpg'
          alt='Création de Bijoux'
          productName='Collier Perle Noir Or'
          productPrice='49.3€' />
      </div>
    </div>
  )
}

export default TodayProducts