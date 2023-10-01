import React, { FC, ReactNode } from 'react';
import Styles from './button.module.scss'
import Link from 'next/link';

type ButtonProps = {
  href: string
  color: 'bleu' | 'bleu-transp' | 'rouge'
  children: ReactNode
}
const Button: FC<ButtonProps> = ({ href, color, children }) => {

  const getColor = () => {
    switch (color) {
      case 'bleu':
        return Styles.btnBleu;
      case 'bleu-transp':
        return Styles.btnBleuTransp;
      case 'rouge':
        return Styles.btnRouge;
      default:
        return Styles.btnBleu;
    }
  };

  return (
    <Link
      className={getColor()}
      href={href}
    >
      {children}
    </Link>
  )
}

export default Button