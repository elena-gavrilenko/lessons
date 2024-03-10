import { Slider } from '../Slider/Slider';
import './help.scss';

export const Help = () => {
  return (
    <div className="help" id="help">
      <h2 className="help-title">
        Двери в наш мир всегда открыты для вас и ваших будущих питомцев. Давайте
        вместе создадим новую историю полной радости и взаимной заботы.
      </h2>
      <Slider />
    </div>
  );
};
