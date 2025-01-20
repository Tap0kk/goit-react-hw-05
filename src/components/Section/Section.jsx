import s from './Section.module.css';

const Section = ({ children, title, isError }) => {
  return (
    <section className={s.section}>
      {isError ? '' : <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
