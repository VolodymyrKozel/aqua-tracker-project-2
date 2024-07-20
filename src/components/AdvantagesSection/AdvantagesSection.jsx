import ModalReusable from '../shared/ModalReusable/ModalReusable';
import css from './AdvantagesSection.module.css';
import * as images from './images';
import pictureData from './data/pictures.json';
import Picture from '../shared/Picture/Picture';
import {
  pic1,
  pic1_2x,
  pic2,
  pic2_2x,
  pic3,
  pic3_2x,
} from './images/pictureSmall';
import List from '../shared/List/List';

function AdvantagesSection() {
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
      {/* <ModalReusable className={css.modal} isOpenProp={true} closebtn={true}>
        <h1>Modal</h1>
        <p>some content</p>
      </ModalReusable> */}
      {/* <List className={css.listImages}>
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
        <p>Our happy customers</p>
        <div>
          <p>Habit drive</p>
          <p>View statistics</p>
          <p>Personal rate setting</p>
        </div>
      </List> */}
    </section>
  );
}

export default AdvantagesSection;
