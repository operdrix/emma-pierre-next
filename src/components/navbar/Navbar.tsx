"use client"

import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src="/img/EP-logo-DEF-carre.png" fill={true} sizes="30vw" alt='Logo' />
          </div>
        </Link>
        <div className={styles.navbarMenu}>
          <div className={styles.navbarLiens}>
            <Link className={styles.lienMenu} href="/products">
              Collections
            </Link>
            <Link className={styles.lienMenu} href="/about">
              À propos
            </Link>
            <Link className={styles.lienMenu} href="/blog">
              Blog
            </Link>
            <Link className={styles.lienMenu} href="/contact">
              Contact
            </Link>
          </div>
          <div className={styles.navbarIcons}>
            <Link className={styles.searchContainer} href='/search'>
              <div className={styles.imgcontainer}>
                <Image id="search-loupe" src="/img/search-2903.svg" fill={true} sizes='30vw' alt='loupe' />
              </div>
              <form action="#">
                <input id="search" type="search" />
              </form>
            </Link>
            <Link href="/cart" className={styles.cartIcon}>
              <div className={styles.imgcontainer}>
                <Image src="/img/bags-1999.svg" alt='cart' fill={true} sizes='30vw' />
              </div>
              <span>1</span>
            </Link>
            <Link href="" onClick={() => {
              console.log("user");
            }}>
              <div className={styles.imgcontainer}>
                <Image src="/img/circle-user.svg" alt='user' fill={true} sizes='30vw' />
              </div>
            </Link>
            <a>
              <div className={styles.imgcontainer}>
                <Image src="/img/france.png" alt='pays' fill={true} sizes='30vw' />
              </div>
            </a>

          </div>
        </div>
      </nav>
      <div className={styles.sousNav}>

      </div>
    </>
  )
}

export default Navbar