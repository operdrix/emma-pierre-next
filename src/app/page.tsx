import Image from 'next/image'
import styles from './page.module.scss'
import React from 'react'
import Link from 'next/link'
import Button from '@/components/button/Button'

export default function Home() {

  const btnClick = () => {
    console.log('click')
  }
  return (
    <main className={styles.mainPage}>
      <div id={styles.heroBanner}>
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
      </div>

      <div className={styles.container}>
        <div className={styles.texteIntro}>
          <h1>EMMA PIERRE Création</h1>
          <p>Bienvenue sur le site EMMA PIERRE, où l'art et la passion se rencontrent pour créer des pièces exceptionnelles qui transcendent le temps. Nous sommes ravis de vous présenter notre collection exquise de bijoux haut de gamme, minutieusement conçue avec les meilleurs matériaux et une attention particulière aux détails. Nous sommes convaincus que vous trouverez la pièce parfaite qui vous permettra de vous démarquer et de rayonner en toute occasion.</p>
        </div>

        <div className={styles.products}>
          <div className={styles.productsHeader}>
            <h2>Produits du moment</h2>
            <Link href="/products" className="lien">Voir plus</Link>
          </div>
          <div className={styles.productsCards}>
            <div className={styles.bigCard}>
              <Link href='/products/1'>
                <img src="/img/products/CollierAlexandra.jpg" alt="Création de Bijoux" />
                <div className={styles.infos}>
                  <div>
                    <p>Collier Alexandra</p>
                  </div>
                  <div>
                    <p>49.3€</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.smallCard}>
              <Link href='/products/2'>
                <img src="/img/products/CollierBlancFeuilles.jpg" alt="Création de Bijoux" />
                <div className={styles.infos}>
                  <div>
                    <p>Collier Alexandra</p>
                  </div>
                  <div>
                    <p>49.3€</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.smallCard}>
              <Link href='/products/3'>
                <img src="/img/products/BouclesRose.jpg" alt="Création de Bijoux" />
                <div className={styles.infos}>
                  <div>
                    <p>Collier Alexandra</p>
                  </div>
                  <div>
                    <p>49.3€</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.smallCard}>
              <Link href='/products/4'>
                <img src="/img/products/CollierPerleNoirOr.jpg" alt="Création de Bijoux" />
                <div className={styles.infos}>
                  <div>
                    <p>Collier Alexandra</p>
                  </div>
                  <div>
                    <p>49.3€</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div id="propos">
          <div className="image_propos">
            <img src="assets/img/atelier.jpeg" alt="Création de Bijoux" />
          </div>
          <div className="contenu_propos">
            <h2>Qui sommes-nous ?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta commodo velit in tristique. Donec lacus ex, dignissim nec ultricies et, feugiat at felis. Fusce placerat neque eget elit pretium vestibulum a nec diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta commodo velit in tristique. Donec lacus ex, dignissim nec ultricies et, feugiat at felis. Fusce placerat neque eget elit pretium vestibulum a nec diam.</p>
            <a href="#" target="_blank">
              <div className="btn btn-bleu">
                En savoir plus
              </div>
            </a>
          </div>
        </div>

        <div id="banniere_devis">
          <div className="content">
            <h2>Demandez votre devis personnalisé</h2>
            <a href="#" target="_blank">
              <div className="btn btn-bleu">
                Contactez-nous
              </div>
            </a>
          </div>
          <div className="circle_2"></div>
          <div className="circle_2"></div>
        </div>

        <div id="texte_intro">
          <div className="chapo">
            <h2>Nos concevons également des bijoux sur-mesure</h2>
            <p className="lead">La créativité ne connaît pas de limites. Nous sommes fiers de concevoir des bijoux uniques et sur-mesure pour nos clients, en utilisant les meilleurs matériaux et en combinant notre savoir-faire avec leurs idées et préférences. Si vous cherchez à offrir un cadeau spécial à un être cher, ou si vous voulez vous faire plaisir en vous offrant un bijou unique, n'hésitez pas à nous contacter. Nous serons ravis de vous aider à créer quelque chose de beau et de précieux qui durera toute une vie.</p>
          </div>
        </div>

        <div id="articles">
          <div className="chapo">
            <h2>Nos derniers articles</h2>
            <a href="#" className="lien">Voir plus</a>
          </div>
          <div className="articles">
            <article className="big_card">
              <img src="assets/img/products/AtelierBague.jpg" alt="Création de Bijoux" />
              <h3>Des bijoux uniques</h3>
              <p>Des bijoux uniques pour une touche personnelle et originale à votre style. Portez quelque chose de spécial et de différent qui reflète votre personnalité et votre goût distinctif.</p>
              <a href="#" target="_blank">
                <div className="btn btn-bleu">Lire l'article</div>
              </a>
            </article>
            <article className="small_card">
              <img src="assets/img/products/BagueMiroir.jpg" alt="Création de Bijoux" />
              <h3>Visite de nos locaux</h3>
              <a href="#" target="_blank">
                <div className="btn btn-bleu">Lire l'article</div>
              </a>
            </article>
            <article className="small_card">
              <img src="assets/img/products/ModelBoucle.jpg" alt="Création de Bijoux" />
              <h3>Journée porte ouverte</h3>
              <a href="#" target="_blank">
                <div className="btn btn-bleu">Lire l'article</div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
