import Header from '../components/haeder/Header.tsx';
import { Outlet } from 'react-router';
import styles from './BaseLayout.module.css';

const BaseLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
