import React from 'react'
import styles from './herrobanner.module.scss'
import Button from '@/components/button/Button'

const Herobanner = () => {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.cardCat}>
        <p className={styles.title}>Les précieuses</p>
        <Button color="bleu-transp" href='/products'>Voir les produits</Button>
      </div>
      <div className={styles.cardCat}>
        <p className={styles.title}>Les impertinantes</p>
        <Button color="bleu-transp" href='/products'>Voir les produits</Button>
      </div>
      <div className={styles.cardCat}>
        <p className={styles.title}>Les uniques</p>
        <Button color="bleu-transp" href='/products'>Voir les produits</Button>
      </div>
      <div className={styles.cardCat}>
        <p className={styles.title}>Les colorées</p>
        <Button color="bleu-transp" href='/products'>Voir les produits</Button>
      </div>
    </header>
  )
}

export default Herobanner