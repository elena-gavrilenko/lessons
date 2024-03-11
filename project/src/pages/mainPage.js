import { About } from '../components/About/About';
import { Footer } from '../components/Footer/Footer';
import { Help } from '../components/Help/Help';
import { Header } from '../components/Header/Header';
import { SomeFacts } from '../components/SomeFacts/SomeFacts';

export const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <SomeFacts />
      <Help />
      <Footer />
    </>
  );
};
