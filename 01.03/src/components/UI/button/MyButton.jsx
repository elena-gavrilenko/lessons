import './mybutton.scss';

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className='myBtn'>
      {children}
    </button>
  );
};
