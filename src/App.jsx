import { useEffect, useState } from 'react';
import { useGlobalContext } from './context';
import WinSliceSelect from './components/WinSliceSelect';
import SliceAmountSelect from './components/SliceAmountSelect';
import ButtonGroup from './components/ButtonGroup';

function App() {
  const {
    spinningWheelSliceList,
    setSpinningWheelSliceList,
    winSliceId,
    setWinSliceId,
    spinningWheelHtml,
    setSpinningWheelHtml,
  } = useGlobalContext();

  useEffect(() => {
    processSpinningWheelHtml();
  }, []);

  const calculateWheelSlices = () => {
    const diameter = 365; // Hardcoded for dev
    const numberOfSlices = spinningWheelSliceList.length;
    const sliceAngle = 360 / numberOfSlices;
    const radius = diameter / 2;
    const circumference = 6.283185307 * radius;
    const sliceHeight = circumference / numberOfSlices;
    const sliceOffset = sliceHeight / 2;
    const calculatedSliceHeight = sliceHeight / 2 + 4 + 'px';
    const sliceColor = '#095B8D'; // Hardcoded for dev

    return {
      diameter,
      numberOfSlices,
      sliceAngle,
      radius,
      circumference,
      sliceHeight,
      sliceOffset,
      calculatedSliceHeight,
      sliceColor,
    };
  };

  const processWheelSlices = () => {
    const { calculatedSliceHeight, radius } = calculateWheelSlices();
    const style = document.createElement('style');
    document.head.appendChild(style);
    const styleSheet = style.sheet;

    const sliceBefore = `.slice::before {border-width: 0 0 ${calculatedSliceHeight} ${radius}px;}`;
    const sliceAfter = `.slice::after {border-width: 0 ${radius}px ${calculatedSliceHeight} 0;}`;
    styleSheet.insertRule(sliceBefore, 0);
    styleSheet.insertRule(sliceAfter, 1);
  };

  const processSpinningWheelHtml = () => {
    console.log(spinningWheelSliceList, 'spinningWheelSliceList');
    const { diameter, sliceAngle, sliceHeight, sliceOffset } =
      calculateWheelSlices();

    const spinningWheelElements = spinningWheelSliceList.map((slice, i) => (
      <div
        key={slice.id}
        className="slice"
        id={`slice${i}`}
        style={{
          transform: `rotate(${i * sliceAngle}deg)`,
          height: `${sliceHeight}px`,
          top: `calc(50% - ${sliceOffset}px)`,
        }}
      >
        <div
          className="label"
          style={{
            lineHeight: `${sliceHeight}px`,
          }}
        >
          {slice.text}
        </div>
      </div>
    ));

    setSpinningWheelHtml(
      <div
        className="spinner-table"
        style={{ height: `${diameter - 2}px`, width: `${diameter - 2}px` }}
      >
        <div className="dial" id="wheel">
          {spinningWheelElements}
        </div>
      </div>
    );

    processWheelSlices();
  };

  const onStopAnimation = () => {
    console.log('stop animation');

    const pointer = document.getElementById('spinningWheelPanel-pointer');
    const wheel = document.getElementById('wheel');
    const { sliceAngle } = calculateWheelSlices();

    const halfSlice = (sliceAngle / 2) * 0.9;
    const decelerateSmoothAngle = Math.floor(
      Math.random() * (2 * halfSlice + 1) - halfSlice
    );

    const calculatedWinSlice =
      (winSliceId - (90 / sliceAngle + 1)) * sliceAngle;
    const decelerateWinAngle =
      1080 - calculatedWinSlice + decelerateSmoothAngle;

    const style = document.createElement('style');
    document.head.appendChild(style);
    const styleSheet = style.sheet;

    const decelerate = `
      @keyframes decelerate {
        from { transform: rotate(0); }
        to { transform: rotate(${decelerateWinAngle}deg); }
      }
    `;

    styleSheet.insertRule(decelerate, 0);
    pointer.classList.add('spinningWheelPanel-pointer-animate');
    wheel.classList.add('dial-stop');
  };

  return (
    <>
      <h2 className="title">Wheel of Fortune</h2>

      <div className="wheel-container">
        <div className="wheel-control">
          <SliceAmountSelect />
          <WinSliceSelect />
          <ButtonGroup />
        </div>

        <div className="wheel-panel">
          <div>{spinningWheelHtml} </div>
          <div
            className="spinningWheelPanel-pointer"
            id="spinningWheelPanel-pointer"
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
