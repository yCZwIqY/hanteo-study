import { ReactNode } from 'react';
import styles from './Tag.module.css';
interface Tag {
  active?: boolean;
  children: ReactNode | string;
}

const Tag = ({ active = true, children }: Tag) => {
  return <div className={`${styles.container} ${!active && styles.inactive}`}>{children}</div>;
};

export default Tag;
