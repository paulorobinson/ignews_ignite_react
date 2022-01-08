import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

import logo from '../../medias/images/logo.svg';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
