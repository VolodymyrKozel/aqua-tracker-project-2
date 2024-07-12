import ModalReusable from '../shared/ModalReusable/ModalReusable';
import css from './AdvantagesSection.module.css';
function AdvantagesSection() {
  return (
    <section className={css.container}>
      AdvantagesSection
      <ModalReusable className={css.modal} isOpenProp={true} closebtn={true}>
        <h1>Modal</h1>
        <p>some content</p>
      </ModalReusable>
    </section>
  );
}

export default AdvantagesSection;
