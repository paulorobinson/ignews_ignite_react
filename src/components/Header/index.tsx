import Image from 'next/image';

import styles from './styles.module.scss';

import logo from '../../medias/images/logo.svg';
import { SignInButton } from '../SignInButton';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};