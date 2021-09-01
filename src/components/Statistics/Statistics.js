import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}

      <ul className="Statistics__stat--list">
        <li className="Statistics__item">
          <span className="Statistics__label">{stats[0].label}</span>
          <span className="Statistics__percentage">{stats[0].percentage}</span>
        </li>
        <li className="Statistics__item">
          <span className="Statistics__label">{stats[1].label}</span>
          <span className="Statistics__percentage">{stats[1].percentage}</span>
        </li>
        <li className="Statistics__item">
          <span className="Statistics__label">{stats[2].label}</span>
          <span className="Statistics__percentage">{stats[2].percentage}</span>
        </li>
        <li className="Statistics__item">
          <span className="Statistics__label">{stats[3].label}</span>
          <span className="Statistics__percentage">{stats[3].percentage}</span>
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
