import PropTypes from 'prop-types';

export default function StatData({ label, percentage }) {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </div>
  );
}

StatData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
