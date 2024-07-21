import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './SkeletonCalendar.module.css';

export const SkeletonCalendar = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton
        className={css.item}
        containerClassName={css.list}
        count={31}
        circle={true}
      />
    </SkeletonTheme>
  );
};
