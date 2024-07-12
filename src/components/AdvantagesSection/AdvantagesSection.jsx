import ModalReusable from '../shared/ModalReusable/ModalReusable';
import css from './AdvantagesSection.module.css';
import * as images from './images';
import pictureData from './data/pictures.json';
import Picture from '../shared/Picture/Picture';

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
      <ModalReusable className={css.modal} isOpenProp={true} closebtn={true}>
        <h1>Modal</h1>
        <p>some content</p>
      </ModalReusable>
    </section>
  );
}

export default AdvantagesSection;
