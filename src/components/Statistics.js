import PropTypes from 'prop-types';
import './Statistics.css';
//import StatData from './StatData';

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

// function  Statistics ({ items }) {
//     return (
//         <ul className="stat-list">
//             {items.map(item => (
//                 <li className="item" key={item.id}>
//                     <StatData
//                     label = {item.label}
//                     percentage = {item.percentage}
//                     />
//                 </li>
//             ))}
//         </ul>
//     )
// };

// Statistics.propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//       }),
//     ),
// };
