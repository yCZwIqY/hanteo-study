import { ReactNode } from 'react';
import { Link } from 'react-router';
import styles from './BannerSlide.module.css';
import dayjs from 'dayjs';
interface BannerSlideProps {
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  stateTag?: ReactNode;
  linkLabel: string;
  link: string;
}

const BannerSlide = ({
  imageUrl,
  title,
  startDate,
  endDate,
  stateTag,
  linkLabel,
  link,
}: BannerSlideProps) => {
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
      <div className={styles.tag}>{stateTag}</div>
    </div>
  );
};

export default BannerSlide;
