import s from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
