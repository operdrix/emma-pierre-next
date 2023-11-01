import Image from 'next/image'
import styles from './page.module.scss'
import React from 'react'
import Herobanner from '@/components/herobanner/Herobanner'
import TodayProducts from '@/components/todayProducts/TodayProducts'
import Button from '@/components/button/Button'
import BlogPostsGallery from '@/components/blogPostsGallery/BlogPostsGallery'
import FeedInstagram from '@/components/feedInstagram/FeedInstagram'

export default function Home() {

  return (
    <>
      <Herobanner />
      <main className={styles.mainPage}>
        <article className={styles.texteIntro}>
          <h1>EMMA PIERRE Création</h1>
          <p>Bienvenue sur le site EMMA PIERRE, où l'art et la passion se rencontrent pour créer des pièces exceptionnelles qui transcendent le temps. Nous sommes ravis de vous présenter notre collection exquise de bijoux haut de gamme, minutieusement conçue avec les meilleurs matériaux et une attention particulière aux détails. Nous sommes convaincus que vous trouverez la pièce parfaite qui vous permettra de vous démarquer et de rayonner en toute occasion.</p>
        </article>

        <div className={styles.container}>
          <TodayProducts />
        </div>

        <article className={styles.propos}>
          <div className={styles.imagePropos}>
            <Image fill={true} src="/img/atelier.jpeg" alt="Création de Bijoux" />
          </div>
          <div className={styles.contenuPropos}>
            <h2>Qui sommes-nous ?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta commodo velit in tristique. Donec lacus ex, dignissim nec ultricies et, feugiat at felis. Fusce placerat neque eget elit pretium vestibulum a nec diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta commodo velit in tristique. Donec lacus ex, dignissim nec ultricies et, feugiat at felis. Fusce placerat neque eget elit pretium vestibulum a nec diam.</p>
            <Button color="bleu" href='/about'>En savoir plus</Button>
          </div>
        </article>

        <article className={styles.banniereDevis}>
          <h2>Demandez votre devis personnalisé</h2>
          <Button color="bleu" href='/contact'>Contactez-nous</Button>
        </article>

        <article className={styles.texteIntro}>
          <div className={styles.texteIntro}>
            <h2>Nous concevons également des bijoux sur-mesure</h2>
            <p>La créativité ne connaît pas de limites. Nous sommes fiers de concevoir des bijoux uniques et sur-mesure pour nos clients, en utilisant les meilleurs matériaux et en combinant notre savoir-faire avec leurs idées et préférences. Si vous cherchez à offrir un cadeau spécial à un être cher, ou si vous voulez vous faire plaisir en vous offrant un bijou unique, n'hésitez pas à nous contacter. Nous serons ravis de vous aider à créer quelque chose de beau et de précieux qui durera toute une vie.</p>
          </div>
        </article>

        <div className={styles.container}>
          <BlogPostsGallery title='Nos derniers articles de blog' nbPosts={3} />
        </div>
      </main>
      <FeedInstagram />
    </>
  )
}
