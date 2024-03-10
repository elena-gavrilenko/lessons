import { useParams } from 'react-router-dom';
import { ArrangeForm } from '../components/ArrangeForm/ArrangeForm';
import { Wrapper } from '../components/wrapper/Wrapper';
import { Footer } from '../components/Footer/Footer';
export const ArrangePage = () => {
  const params = useParams();

  return (
    <>
      <Wrapper />
      <ArrangeForm id={params.id} pet={params.pet} />;
      <Footer />
    </>
  );
};
