import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        <li className={s.item} style={{ backgroundColor: '#4ec6f6' }}>
          <span className={s.label}>{stats[0].label}</span>
          <span className={s.percentage}>{stats[0].percentage}</span>
        </li>
        <li className={s.item} style={{ backgroundColor: '#a33df3' }}>
          <span className={s.label}>{stats[1].label}</span>
          <span className={s.percentage}>{stats[1].percentage}</span>
        </li>
        <li className={s.item} style={{ backgroundColor: '#e64c66' }}>
          <span className={s.label}>{stats[2].label}</span>
          <span className={s.percentage}>{stats[2].percentage}</span>
        </li>
        <li className={s.item} style={{ backgroundColor: '#22b8c5' }}>
          <span className={s.label}>{stats[3].label}</span>
          <span className={s.percentage}>{stats[3].percentage}</span>
        </li>
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
