import { useParams } from 'react-router-dom';
import { ArrangeForm } from '../components/ArrangeForm/ArrangeForm';

export const ArrangePage = () => {
  const params = useParams();
  console.log(params);

  return <ArrangeForm id={params.id} pet={params.pet} />;
};
