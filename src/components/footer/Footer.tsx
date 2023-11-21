import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.colFooter}>
        <h3>Besoin d&apos;aide</h3>
        <ul>
          <Link className={styles.lienMenu} href="/mentions#mentions">
            <li>Mentions légales</li>
          </Link>
          <Link className={styles.lienMenu} href="#">
            <li>Plan du site</li>
          </Link>
          <Link className={styles.lienMenu} href="/mentions#CGU">
            <li>CGU / CGV</li>
          </Link>
          <Link className={styles.lienMenu} href="/mentions#confidentialite">
            <li>Politique de confidentialité</li>
          </Link>
        </ul>
      </div>
      <div className={styles.colFooter}>
        <h3>À propos</h3>
        <ul>
          <li>SIREN / SIRET</li>
          <Link className={styles.lienMenu} href="/about">
            <li>Nous découvrir</li>
          </Link>
        </ul>

        <div className={styles.madeInFrance}>
          <p className={styles.drapeau}>
          </p>
          <p>Made In France</p>
        </div>
      </div>
      <div className={`${styles.colFooter} ${styles.social}`}>
        <h3>Réseaux</h3>
        <ul>

          <li>
            <Link href="https://www.instagram.com/emmapierrejewels/">
              <div className={styles.imgContainer}>
                <Image src="/img/instagram-93.svg" alt='Instagram' fill />
              </div>
            </Link>
          </li>
          <li>
            <Link href="mailto:jeneconnaispaslemail@emmapierre.fr">
              <div className={styles.imgContainer}>
                <Image src="/img/mail-5886.svg" alt='Mail' fill />
              </div>
            </Link>
          </li>

        </ul>
      </div>
    </footer>
  )
}

export default Footer