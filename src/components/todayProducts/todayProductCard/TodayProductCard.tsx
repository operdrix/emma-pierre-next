import React, { FC } from 'react'
import styles from './todayProductCard.module.scss'
import Link from 'next/link'

type ProductCardProps = {
  cardSize: 'big' | 'small'
  href: string
  src: string
  alt: string
  productName: string
  productPrice: string
}

const TodayProductCard: FC<ProductCardProps> = ({ cardSize, href, src, alt, productName, productPrice }) => {

  const getCardSize = () => {
    switch (cardSize) {
      case 'big':
        return styles.bigCard;
      case 'small':
        return styles.smallCard;
      default:
        return styles.bigCard;
    }
  }

  return (
    <div className={getCardSize()}>
      <Link href={href}>
        <img src={src} alt={alt} />
        <div className={styles.infos}>
          <div>
            <p>{productName}</p>
          </div>
          <div>
            <p>{productPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TodayProductCard