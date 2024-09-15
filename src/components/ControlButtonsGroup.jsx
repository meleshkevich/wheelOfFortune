import { useGlobalContext } from '../context';
import { calculatedSliceAngle } from '../utils';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ControlButtonsGroup = () => {
  const { winSliceId } = useGlobalContext();

  const onStartAnimation = () => {
    const wheel = document.getElementById('wheel');
    const pointer = document.getElementById('spinningWheelPanel-pointer');
    wheel.classList.remove('dial-spinning');
    wheel.classList.remove('dial-stop');
    pointer.classList.remove('spinningWheelPanel-pointer-animate');
    wheel.classList.add('dial-spinning');
  };
  const onStopAnimation = () => {
    const pointer = document.getElementById('spinningWheelPanel-pointer');
    const wheel = document.getElementById('wheel');
    const sliceAngle = calculatedSliceAngle.angle;
    const halfSlice = (sliceAngle / 2) * 0.9;
    const decelerateSmoothAngle = Math.floor(
      Math.random() * (2 * halfSlice + 1) - halfSlice
    );

    const calculatedWinSlice =
      (winSliceId - (90 / sliceAngle + 1)) * sliceAngle;
    const decelerateWinAngle =
      1080 - calculatedWinSlice + decelerateSmoothAngle;

    const root = document.documentElement;
    root.style.setProperty('--decelerateWinAngle', `${decelerateWinAngle}deg`);

    pointer.classList.add('spinningWheelPanel-pointer-animate');
    wheel.classList.add('dial-stop');
  };

  return (
    <>
      <ButtonGroup size="lg" className="mb-2" gap={3}>
        <Button onClick={() => onStartAnimation()}>Start</Button>
        <Button onClick={() => onStopAnimation()}>Stop</Button>
      </ButtonGroup>
    </>
  );
};

export default ControlButtonsGroup;
