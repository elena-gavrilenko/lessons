import './burger.scss';

export const Burger = ({ onClick, className }) => {
  const handleToggle = (event) => {
    const menuVisible = event.currentTarget.classList.toggle('active');
    onClick(menuVisible);
  };
  return (
    <div className={className} onClick={handleToggle}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};
