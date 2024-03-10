import './modal.scss';

export const Modal = ({
  active,
  setActive,
  url,
  name,
  weight: { metric },
  affection_level = null,
  height: { metric: heightmetric } = {},
  child_friendly = null,
  bred_for = null,
  temperament,
  life_span,
}) => {
  const handleClose = () => {
    setActive(false);
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  });
  return (
    <div
      className={active ? 'modal modal_active' : 'modal'}
      onClick={handleClose}
    >
      <div
        className='modal-content content'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='content-closeButton' onClick={handleClose}>
          &#10006;
        </button>
        <div className='content-modalImg'>
          <img className='content-img' src={url} alt='pet' />
        </div>
        <div className='content-modalInfo modalInfo'>
          <h2 className='modalInfo-breed'> {name}</h2>
          <div className='modalInfo-feature'>
            <span>weight:</span> {metric} kg
          </div>
          {heightmetric && (
            <div className='modalInfo-feature'>
              <span>height:</span> {heightmetric} sm
            </div>
          )}
          {affection_level && (
            <div className='modalInfo-feature'>
              <span>affection_level:</span> {affection_level}
            </div>
          )}
          {child_friendly && (
            <div className='modalInfo-feature'>
              <span>child_friendly:</span> {child_friendly}
            </div>
          )}
          {bred_for && (
            <div className='modalInfo-feature'>
              <span>bred_for:</span> {bred_for}
            </div>
          )}
          <div className='modalInfo-feature'>
            <span>temperament:</span> {temperament}
          </div>
          <div className='modalInfo-feature'>
            <span>life span:</span> {life_span}
          </div>
        </div>
      </div>
    </div>
  );
};
