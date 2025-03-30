import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styles from './Banner.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BannerSlide from './BannerSlide.tsx';

export interface BannerSlideItem {
  id?: string;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  linkLabel: string;
  link: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<BannerSlideItem[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/banners');
      setBanners(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        initialSlide={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {banners.map(it => (
          <SwiperSlide key={it.id}>
            <BannerSlide {...it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
