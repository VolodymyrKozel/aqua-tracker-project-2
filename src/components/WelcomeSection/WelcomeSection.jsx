import Button from 'components/Button/Button';
import css from './WelcomeSection.module.css';
function WelcomeSection() {
  return (
    <section className={css.container}>
      <p className={css.text}>Record daily water intake and track</p>
      <h1 className={css.title}>Water consumption tracker</h1>
      <Button variant="primary">Try tracker</Button>
      <Button variant="outline">Sign in</Button>
    </section>
  );
}

export default WelcomeSection;
