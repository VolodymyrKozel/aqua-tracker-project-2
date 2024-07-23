import css from './AdvantagesSection.module.css';
import * as images from './images';
import pictureData from './data/pictures.json';
import Picture from '../shared/Picture/Picture';
import Icon from '../shared/Icon/Icon';
import {
  pic1,
  pic1_2x,
  pic2,
  pic2_2x,
  pic3,
  pic3_2x,
} from './images/pictureSmall';
import List from '../shared/List/List';
import { useTranslation } from 'react-i18next';

function AdvantagesSection() {
  const { t } = useTranslation();

  const data = pictureData.map(item => ({
    ...item,
    urlMobile: images[item.urlMobile],
    urlMobile2x: images[item.urlMobile2x],
    urlTablet: images[item.urlTablet],
    urlTablet2x: images[item.urlTablet2x],
    urlDesktop: images[item.urlDesktop],
    urlDesktop2x: images[item.urlDesktop2x],
  }));

  return (
    <section className={css.container}>
      {data.map(item => (
        <Picture
          key={item.id}
          className={css.picture}
          urlMobile={item.urlMobile}
          urlMobile2x={item.urlMobile2x}
          urlTablet={item.urlTablet}
          urlTablet2x={item.urlTablet2x}
          urlDesktop={item.urlDesktop}
          urlDesktop2x={item.urlDesktop2x}
          width={item.width}
          height={item.height}
          alt={item.alt}
        />
      ))}
      <div className={css.advertising}>
        <div className={css.customer_box}>
          <List className={css.listImages}>
            <li className={css.images}>
              <img
                srcSet={`${pic1} 1x, ${pic1_2x} 2x`}
                src={`${pic1}`}
                alt="user avatar"
                className={css.pic}
              />
            </li>
            <li className={css.images}>
              <img
                srcSet={`${pic2} 1x, ${pic2_2x} 2x`}
                src={`${pic2}`}
                alt="user avatar"
                className={css.pic}
              />
            </li>
            <li className={css.images}>
              <img
                srcSet={`${pic3} 1x, ${pic3_2x} 2x`}
                src={`${pic3}`}
                alt="user avatar"
                className={css.pic}
              />
            </li>
          </List>
          <p className={css.customer_text}>
            {`${t('advantagesSection.Our')} `}
            <span>{`${t('advantagesSection.happy')} `}</span>
            {t('advantagesSection.customers')}
          </p>
        </div>
      </div>
      <div className={css.statistic}>
        <button className={css.habit}>
          <Icon
            className={css.icon_ellips}
            id="icon-ellipse"
            width="8"
            height="8"
          />
          <p className={css.habit_text}>{t('advantagesSection.habit')}</p>
        </button>
        <button className={css.view_statistic}>
          {t('advantagesSection.statistics')}
        </button>
        <button className={css.rate}>{t('advantagesSection.rate')}</button>
      </div>
    </section>
  );
}

export default AdvantagesSection;
