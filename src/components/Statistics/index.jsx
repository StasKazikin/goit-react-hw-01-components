import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
