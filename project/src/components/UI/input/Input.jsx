import './input.scss';

export const Input = ({ validity, isDirty, label, ...props }) => {
  const isErrorVisible = typeof validity === 'string' && isDirty;
  return (
    <div className="formInput">
      <label>
        <span className="formInput-hiddenLabel">{label}</span>
        <input
          className={`${
            props.className ? `${props.className} ` : ''
          } formInput-input${isErrorVisible ? ' formInput-input_invalid' : ''}`}
          {...props}
        />
      </label>
      <div
        className="formInput-error"
        {...(isErrorVisible ? { title: validity } : {})}
      >
        {isErrorVisible ? validity : ''}
      </div>
    </div>
  );
};
