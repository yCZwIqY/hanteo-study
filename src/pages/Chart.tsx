import styles from './Chart.module.css';
import ListContainer from '../components/list/ListContainer.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartItem from '../components/chart/ChartItem.tsx';

export interface ChartItemData {
  id: number;
  rangking: number;
  singer: string;
  songTitle: string;
}

const Chart = () => {
  const [items, setItems] = useState<ChartItemData[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(1);

  useEffect(() => {
    fetchNextPage();
  }, []);

  const fetchNextPage = async () => {
    console.log('fetchNextPage');
    if (nextPage === null) return;

    const { data } = await axios.get(`/api/chart?page=${nextPage}`);
    setItems(prev => [...prev, ...data.items]);
    setNextPage(data.nextPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>콘텐츠 큐레이션 제목</div>
      <ListContainer fetchNextPage={fetchNextPage} nextPage={nextPage}>
        {items.map(it => (
          <ChartItem key={it.id} {...it} />
        ))}
      </ListContainer>
    </div>
  );
};

export default Chart;
