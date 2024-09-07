import { useGlobalContext } from '../context';
const ButtonGroup = () => {
  const { onStartAnimation, onStopAnimation } = useGlobalContext();
  return (
    <>
      <button type="button" className="btn" onClick={() => onStartAnimation()}>
        Start
      </button>
      <button type="button" className="btn" onClick={() => onStopAnimation()}>
        Stop
      </button>
    </>
  );
};

export default ButtonGroup;
