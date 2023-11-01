import React, { FC } from 'react'
import styles from './blogPost.module.scss'
import Button from '@/components/button/Button'
import Image from 'next/image'
import Link from 'next/link'

type BlogPostProps = {
  src: string
  alt: string
  href: string
  index: number
  title: string
  content?: string
  date?: string
}

const BlogPost: FC<BlogPostProps> = ({ src, alt, href, index, title, content, date }) => {

  const articleStyle = (index === 1) ? styles.first : ''

  return (
    <figure className={`${styles.article} ${articleStyle}`}>

      <div className={styles.imgContainer}>
        <Image src={src} alt={alt} fill={true} sizes='30vw' />
        <Button color="bleu" href={href}>Lire l'article</Button>
      </div>
      <div className={styles.text}>
        <p className={styles.date}>{date}</p>
        <Link href={href}><h3>{title}</h3></Link>
        <p className={styles.content}>{content}</p>
      </div>

    </figure>
  )
}

export default BlogPost