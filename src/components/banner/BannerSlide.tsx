import { Link } from 'react-router';
import styles from './BannerSlide.module.css';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import Tag from '../tag/Tag.tsx';
import { BannerSlideItem } from './Banner.tsx';
dayjs.extend(isBetween);

const BannerSlide = ({ imageUrl, title, startDate, endDate, linkLabel, link }: BannerSlideItem) => {
  const isProgress = dayjs().isBetween(startDate, endDate, 'day', '[]');

  const getDateRange = () =>
    `${dayjs(startDate).format('YYYY-MM-DD')}~${dayjs(endDate).format('YYYY-MM-DD')}`;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.title}>{title}</div>
          <Link className={styles.link} to={link} target="_blank">
            {linkLabel}
          </Link>
        </div>
        <div className={styles.date}>{getDateRange()}</div>
      </div>
      {isProgress && (
        <div className={styles.tag}>
          <Tag>진행 중</Tag>
        </div>
      )}
    </div>
  );
};

export default BannerSlide;
