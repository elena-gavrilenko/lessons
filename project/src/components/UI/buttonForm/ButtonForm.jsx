import './buttonform.scss';

export const ButtonForm = ({ children, ...props }) => {
  return (
    <button {...props} className="formBtn">
      {children}
    </button>
  );
};
