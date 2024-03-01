import { forwardRef } from 'react';
import './myinput.scss';

export const MyInput = forwardRef(
  ({ validity, isDirty, label, ...props }, ref) => {
    const isErrorVisible = typeof validity === 'string' && isDirty;
    console.log(isErrorVisible);
    return (
      <div className="myInput">
        <label>
          <span className="myInput-hiddenLabel">{label}</span>
          <input
            className={`${
              props.className ? `${props.className} ` : ''
            } myInput-input${isErrorVisible ? ' myInput-input_invalid' : ''}`}
            ref={ref}
            {...props}
          />
        </label>
        <div
          className="myInput-error"
          {...(isErrorVisible ? { title: validity } : {})}
        >
          {isErrorVisible ? validity : ''}
        </div>
      </div>
    );
  }
);
