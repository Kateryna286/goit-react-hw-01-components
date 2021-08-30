import PropTypes from 'prop-types';
//import StatData from './StatData';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}</span>
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
