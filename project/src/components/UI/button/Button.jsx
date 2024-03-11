import './button.scss';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};
