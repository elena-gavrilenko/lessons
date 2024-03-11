import './select.scss';

export const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
