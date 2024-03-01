// import App from '../components/App/App';
import { Header } from '../components/Header/Header';
import { About } from '../components/About/About';
import { PetsList } from '../components/PetsList/PetsList';
import { Help } from '../components/Help/Help';
import { Footer } from '../components/Footer/Footer';
export const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <PetsList />
      <Help />
      <Footer />
    </>
  );
};
