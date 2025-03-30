import { Link, useLocation } from 'react-router';
import styles from './Header.module.css';

type MenuType = {
  id: number;
  path: string;
  label: string;
};
const menus: MenuType[] = [
  {
    id: 0,
    path: '/chart',
    label: '차트',
  },
  {
    id: 1,
    path: '/whook',
    label: 'Whook',
  },
  {
    id: 2,
    path: '/event',
    label: '이벤트',
  },
  {
    id: 3,
    path: '/news',
    label: '뉴스',
  },
  {
    id: 4,
    path: '/store',
    label: '스토어',
  },
  {
    id: 5,
    path: '/charger',
    label: '충전소',
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        {menus.map(({ id, path, label }: MenuType) => (
          <div className={styles.item} key={id}>
            <Link to={path} className={location.pathname === path ? styles.selected : ''}>
              {label}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
