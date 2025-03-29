import BannerSlide from './BannerSlide.tsx';
import dayjs from 'dayjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styles from './Banner.module.css';
import Tag from '../tag/Tag.tsx';
const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <BannerSlide
            imageUrl={'https://picsum.photos/400/200'}
            title={'[M COUNTDOWN] 10월 2주차 엠카 글로벌 사전투표'}
            linkLabel={'투표하기'}
            link={'https://picsum.photos/'}
            startDate={dayjs('2025-02-01').toString()}
            endDate={dayjs('2025-05-01').toString()}
            stateTag={<Tag>진행 중</Tag>}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide
            imageUrl={'https://picsum.photos/400/200'}
            title={'[M COUNTDOWN] 10월 2주차 엠카 글로벌 사전투표'}
            linkLabel={'투표하기'}
            link={'https://picsum.photos/'}
            startDate={dayjs('2025-02-01').toString()}
            endDate={dayjs('2025-05-01').toString()}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide
            imageUrl={'https://picsum.photos/400/200'}
            title={'[M COUNTDOWN] 10월 2주차 엠카 글로벌 사전투표'}
            linkLabel={'투표하기'}
            link={'https://picsum.photos/'}
            startDate={dayjs('2025-02-01').toString()}
            endDate={dayjs('2025-05-01').toString()}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
