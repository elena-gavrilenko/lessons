import './myselect.scss';

export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className='mySelect'
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value=''>{defaultValue}</option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          // selected={option === 'All breeds' ? true : false}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
