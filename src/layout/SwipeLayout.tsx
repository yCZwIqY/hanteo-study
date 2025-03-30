import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import type { Swiper as SwiperClass } from 'swiper/types';

interface SwipeLayoutProps {
  children: ReactNode;
  prevPath?: string;
  prevElement?: ReactNode;
  nextPath?: string;
  nextElement?: ReactNode;
}

const SwipeLayout = ({
  children,
  prevPath,
  prevElement,
  nextPath,
  nextElement,
}: SwipeLayoutProps) => {
  const navigate = useNavigate();
  const initialSlide = prevPath ? 1 : 0;
  const onChangeSlide = (swipe: SwiperClass) => {
    const { activeIndex } = swipe;
    if (activeIndex === initialSlide) return;

    if (prevPath && activeIndex === 0) {
      navigate(prevPath);
    } else if (nextPath) {
      navigate(nextPath);
    }
  };

  return (
    <Swiper
      initialSlide={initialSlide}
      style={{
        flex: 1,
        width: '100%',
      }}
      slidesPerView={1}
      onTransitionEnd={onChangeSlide}
    >
      {prevPath && <SwiperSlide>{prevElement}</SwiperSlide>}
      <SwiperSlide>{children}</SwiperSlide>
      {nextPath && <SwiperSlide>{nextElement}</SwiperSlide>}
    </Swiper>
  );
};

export default SwipeLayout;
