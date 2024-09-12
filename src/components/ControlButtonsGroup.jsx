import { useGlobalContext } from '../context';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ControlButtonsGroup = () => {
  const { onStartAnimation, onStopAnimation } = useGlobalContext();
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
