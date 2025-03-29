import Header from '../components/haeder/Header.tsx';
import { Outlet } from 'react-router';
import styles from './BaseLayout.module.css';
import Banner from '../components/banner/Banner.tsx';

const BaseLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Banner />
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
