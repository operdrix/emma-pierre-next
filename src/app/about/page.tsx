import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import FeedInstagram from '@/components/feedInstagram/FeedInstagram'

const About = () => {
  return (
    <>
      <main className={styles.about}>
        <nav className={styles.path}>
          <h3><Link href="/">Accueil </Link> {`>`} <Link href="/about">A propos </Link></h3>
        </nav>
        <div className={styles.banniere}>
          <div className={styles.rectangle}>
            <h1>Notre histoire</h1>
          </div>
        </div>
        <article className={styles.aboutUs}>
          <h2>Qui sommes nous ?</h2>
          <p>
            Bienvenue dans notre monde de bijoux raffinés, où chaque pierre est soigneusement sélectionnée pour
            sa beauté unique et
            ses propriétés exceptionnelles. Nous sommes une petite entreprise familiale qui crée des bijoux à
            partir de pierres
            précieuses, semi-précieuses et autres pierres uniques. Nous sommes fiers
            de proposer une
            sélection exquise de bijoux faits à la main qui captivent l&apos;œil et ravissent l&apos;âme.
          </p>
        </article>
        <article className={`${styles.texteImage} ${styles.droite}`}>
          <div className={styles.text}>
            <h2>Nous mettons à l’œuvre notre savoir faire</h2>
            <p>
              Chez Emma Pierre, nous croyons que chaque bijou raconte une histoire unique. Nous avons commencé
              notre
              entreprise en tant que passionnés des pierres précieuses et de l&apos;art de la bijouterie, et cette
              passion est restée
              ancrée dans chacune de nos créations. Nous croyons que les bijoux ne sont pas simplement des
              accessoires, mais qu&apos;ils
              ont le pouvoir de refléter la personnalité de celle qui les porte, de raconter une histoire ou
              de transmettre un
              message.
            </p>
            <p>
              C&apos;est pourquoi nous avons choisi de créer des bijoux qui inspirent la confiance en soi, la grâce
              et la beauté. Nos
              bijoux sont conçus pour être portés fièrement, pour faire tourner les têtes et pour faire
              étinceler les yeux. Avec notre
              attention particulière portée aux détails et à la qualité, vous pouvez être assuré que chaque
              pièce que vous achetez
              chez Emma Pierre sera un bijou intemporel qui vous suivra pour les années à venir.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/img/products/177249994_135493948551491_4508321744509230673_n.jpg" alt="image de collier" fill={true} sizes='30vw' />
          </div>
        </article>

        <div className={styles.banniere}>
          <div className={styles.rectangle}>
            <h1>L&apos;atelier</h1>
          </div>
        </div>

        <article className={`${styles.texteImage} ${styles.gauche}`}>

          <div className={styles.text}>
            <h2>Notre atelier</h2>
            <p>
              Notre atelier est le cœur de notre entreprise. En tant que gérante de la société, je travaille personnellement pour créer des bijoux qui captivent l&apos;œil et l&apos;imagination. Tout mon travail est réalisé à la main, depuis la sélection minutieuse des pierres jusqu&apos;à la finition des bijoux.
            </p>
            <p>
              Chez Emma Pierre, nous croyons que chaque bijou que nous créons est une œuvre d&apos;art unique. Nous travaillons en étroite collaboration avec nos clients pour créer des bijoux sur mesure qui correspondent à leurs goûts et leur personnalité. Nous sommes convaincus que nos bijoux vous feront vous sentir confiant, élégant et spécial, quel que soit l&apos;occasion.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/img/atelier.jpeg" alt="image diamant sous une loupe" fill={true} sizes='30vw' />
          </div>
        </article>
        <aside className={styles.citation}>
          <p>
            Les bijoux sont des œuvres d&apos;art que l&apos;on peut porter - ils doivent refléter la personnalité et l&apos;élégance de celui ou celle qui les porte.
          </p>
        </aside>
        <article className={`${styles.texteImage} ${styles.droite}`}>
          <div className={styles.text}>
            <h2>Votre satisfaction est notre priorité</h2>
            <p>
              Chez Emma Pierre, votre satisfaction est notre priorité absolue. Nous comprenons que chaque client est unique, c&apos;est pourquoi nous travaillons en étroite collaboration avec vous pour comprendre vos besoins et vos préférences en matière de bijoux. Nous nous engageons à offrir un service client exceptionnel et à vous fournir des bijoux de qualité supérieure qui répondent à vos attentes.
            </p>
            <p>
              Si, pour une raison quelconque, vous n&apos;êtes pas entièrement satisfait de votre achat, nous ferons tout notre possible pour rectifier la situation. Nous croyons en la satisfaction de nos clients à 100%, et nous nous engageons à créer des bijoux qui vous feront vous sentir exceptionnel à chaque fois que vous les portez.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/img/satisfaction.jpeg" alt="image de collier dans la main" fill={true} sizes='30vw' />
          </div>
        </article>
      </main>
      <FeedInstagram />
    </>
  )
}

export default About