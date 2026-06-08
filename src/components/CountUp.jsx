import { useCountUp } from '../hooks';

export default function CountUp({ target, decimals = 0, prefix = '', suffix = '', duration = 1800, className = '', style = {} }) {
  const [ref, value] = useCountUp(target, decimals, duration);
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value);
  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{display}{suffix}
    </span>
  );
}
