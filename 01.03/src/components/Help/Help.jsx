import { Slider } from '../Slider/Slider';
import './help.scss';

export const Help = () => {
  return (
    <div className='help' id='help'>
      <h2 className='help-title'>
        If you want to help us, you can choose a free mongrel pet or donate for
        their maintenance and treatment
      </h2>
      <Slider />
    </div>
  );
};
