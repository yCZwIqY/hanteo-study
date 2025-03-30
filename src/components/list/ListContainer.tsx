import { ReactNode, useEffect, useRef } from 'react';

interface ListContainerProps {
  children: ReactNode;
  fetchNextPage: () => void;
  nextPage: number | null;
}
const ListContainer = ({ children, fetchNextPage, nextPage }: ListContainerProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (nextPage == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.3 },
    );

    if (observerRef.current && nextPage >= 2) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [nextPage, fetchNextPage]);

  return (
    <div>
      {children}
      <div style={{ width: '100%', height: '40px' }} ref={observerRef} />
    </div>
  );
};

export default ListContainer;
