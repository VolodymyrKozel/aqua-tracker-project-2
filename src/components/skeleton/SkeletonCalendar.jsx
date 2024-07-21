import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './SkeletonCalendar.module.css';

export const SkeletonCalendar = () => {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton className={css.circle} count={3} />
        </p>
      </SkeletonTheme>
      <Skeleton count={31} circle={true} className={css.circle} />
    </>
  );
};
