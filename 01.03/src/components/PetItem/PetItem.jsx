import { Link, useNavigate, useParams } from 'react-router-dom';
import './petitem.scss';
import { ArrangePage } from '../../pages';
export const PetItem = ({ id, url, pet }) => {
  // const navigate = useNavigate();
  // console.log(navigate);
  console.log(url, pet);

  return (
    // <div className="petItem" onClick={() => navigate(`/:${id}`)}>
    // <Link
    //   className="petItem"
    //   to={{
    //     pathname: `/:${id}`,
    //     url: url,
    //   }}
    // >
    <Link className="petItem" to={`${pet}/${id}`}>
      <div className="petItem-imgWrapper">
        <img className="petItem-img" src={url} alt="pet" />
      </div>
      {/* <button className='petItem-btn'>Buy</button> */}
      <div className="petItem-tooltip">Contact breeders of this breed.</div>
    </Link>
  );
};
