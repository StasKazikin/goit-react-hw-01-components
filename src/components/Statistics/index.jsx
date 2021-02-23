import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function randomColor (min, max) {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
};

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.item} style={{ backgroundColor: randomColor(0, 255) }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
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
