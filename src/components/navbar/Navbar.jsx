"use client"

import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image className={styles.logo} src="/img/EP-logo-DEF-carre.png" fill alt='Logo' />
          </Link>
        </div>
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
              <img id="search-loupe" src="img/search-2903.svg" />
              <form action="#">
                <input id="search" type="search" />
              </form>
            </Link>
            <Link href="/cart" className={styles.cartIcon}>
              <img src="img/bags-1999.svg" />
              <span>1</span>
            </Link>
            <Link href="" onClick={() => {
              console.log("user");
            }}>
              <img src="img/circle-user.svg" />
            </Link>
            <a>
              <img src="img/france.png" />
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