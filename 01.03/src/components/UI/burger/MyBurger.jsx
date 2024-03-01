import './myburger.scss';
export const MyBurger = ({ onClick }) => {
  //   const listClasses = ['myBurger'];
  //   if (menuVisible) {
  //     listClasses.push('active');
  //   }
  const handleToggle = (event) => {
    // event.target.type == myBurger;
    console.log(event.currentTarget.classList.contains('active'));
    const menuVisible = event.currentTarget.classList.toggle('active');
    onClick(menuVisible);
  };
  return (
    <div className='myBurger' onClick={handleToggle}>
      <div className='myBurger-line'></div>
      <div className='myBurger-line'></div>
      <div className='myBurger-line'></div>
    </div>
  );
};
