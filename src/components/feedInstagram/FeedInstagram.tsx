import React from 'react'
import styles from './feedInstagram.module.scss'
import Button from '../button/Button'
import Image from 'next/image'

const FeedInstagram = () => {
  return (
    <div className={styles.feedInstagram}>
      <div className={styles.logo_insta}>
        <img src="./img/instagram-icon.svg" alt="Création de Bijoux" />
      </div>
      <div className={styles.img_insta}>
        <div className={styles.imgContainer}>
          <Image src="/img/products/CollierBlancFeuilles.jpg" alt="Création de Bijoux" fill={true} />
        </div>
        <Button
          color='rouge'
          href='#'
        >
          Voir sur instagram
        </Button>
      </div>
      <div className={styles.img_insta}>
        <div className={styles.imgContainer}>
          <Image src="/img/products/BouquetRose.jpg" alt="Création de Bijoux" fill={true} />
        </div>
        <Button
          color='rouge'
          href='#'
        >
          Voir sur instagram
        </Button>
      </div>
      <div className={styles.img_insta}>
        <div className={styles.imgContainer}>
          <Image src="/img/products/MultiplesRoses.jpg" alt="Création de Bijoux" fill={true} />
        </div>
        <Button
          color='rouge'
          href='#'
        >
          Voir sur instagram
        </Button>
      </div>
      <div className={styles.img_insta}>
        <div className={styles.imgContainer}>
          <Image src="/img/products/CollierPerleSable.jpg" alt="Création de Bijoux" fill={true} />
        </div>
        <Button
          color='rouge'
          href='#'
        >
          Voir sur instagram
        </Button>
      </div>

    </div>
  )
}

export default FeedInstagram