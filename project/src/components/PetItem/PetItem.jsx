import { Link } from 'react-router-dom';
import './petitem.scss';

export const PetItem = ({ id, url, pet }) => {
  return (
    <Link className="petItem" to={`${pet}/${id}`}>
      <div className="petItem-imgWrapper">
        <img className="petItem-img" src={url} alt="pet" />
      </div>
      <div className="petItem-tooltip">
        Свяжитесь с заводчиками этой породы.
      </div>
    </Link>
  );
};
