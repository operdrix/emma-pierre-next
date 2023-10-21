import React, { FC } from 'react'
import styles from './blogPostsGallery.module.scss'
import Link from 'next/link'
import BlogPost from './blogPost/BlogPost'

type BlogPostsGalleryProps = {
  title: string
  nbPosts?: number
}

/**
 * BlogPostsGallery
 * @description Composant pour afficher une galerie de posts de blog
 * @param {string} title - Titre de la galerie
 * @param {number} nbPosts - Nombre de posts à afficher
 * @returns {JSX.Element} - Élément JSX
 */
const BlogPostsGallery: FC<BlogPostsGalleryProps> = ({ title, nbPosts = 4 }) => {
  return (
    <article className={styles.blogPostsGallery}>
      <header>
        <h2>{title}</h2>
        <Link href="/blog">Voir plus</Link>
      </header>
      <div className={styles.blogPosts}>
        <BlogPost
          src='/img/products/AtelierBague.jpg'
          alt='Création de Bijoux'
          title='Des bijoux uniques'
          content="Des bijoux uniques pour une touche personnelle et originale à votre style. Portez quelque chose de spécial et de différent qui reflète votre personnalité et votre goût distinctif. [...]"
          href='#'
          index={1}
          date='12/05/2021'
        />
        <div className={styles.small}>
          <BlogPost
            src='/img/products/BagueMiroir.jpg'
            alt='Création de Bijoux'
            title='Visite de nos locaux'
            href='#'
            index={2}
            date='12/04/2021'
          />
          <BlogPost
            src='/img/products/ModelBoucle.jpg'
            alt='Création de Bijoux'
            title='Journée porte ouverte'
            href='#'
            index={3}
            date='12/03/2021'
          />
          <BlogPost
            src='/img/products/177249994_135493948551491_4508321744509230673_n.jpg'
            alt='Création de Bijoux'
            title='La beauté des couleurs'
            href='#'
            index={3}
            date='12/03/2021'
          />
        </div>
      </div>
    </article>
  )
}

export default BlogPostsGallery