import styles from './ChartItem.module.css';
import { ChartItemData } from '../../pages/Chart.tsx';

const ChartItem = ({ rangking, songTitle, singer }: ChartItemData) => {
  return (
    <div className={styles.container}>
      <div className={styles.box} />
      <div className={styles.info}>
        <span className={styles.title}>
          {rangking}위 {songTitle}
        </span>
        <div className={styles.content}>{singer}</div>
      </div>
    </div>
  );
};

export default ChartItem;
