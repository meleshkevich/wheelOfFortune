import { useContext, useState, createContext, useEffect } from 'react';
import { calculateSliceAngle } from './utils';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [spinningWheelSliceList, setSpinningWheelSliceList] = useState([]);
  const [winSliceId, setWinSliceId] = useState(1);
  const [amountOfSlices, setAmountOfSlices] = useState(10);
  const [spinningWheelHtml, setSpinningWheelHtml] = useState('');

  //TODO: process  amountofSlices correctly!!!!

  useEffect(() => {
    processWheelSliceList(amountOfSlices);
  }, [amountOfSlices]);

  const processSliceAmountSelect = (sliceAmount) => {
    setAmountOfSlices(sliceAmount);
  };

  const processWheelSliceList = (amountOfSlices) => {
    const sliceList = [];
    for (let i = 1; i <= amountOfSlices; i++) {
      sliceList.push({
        id: i,
        text: `Slice ${i}`,
      });
    }
    setSpinningWheelSliceList(sliceList);
    processSpinningWheelHtml();
  };

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
    const { diameter, sliceAngle, sliceHeight, sliceOffset, numberOfSlices } =
      calculateWheelSlices();
    calculateSliceAngle(numberOfSlices);
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

  return (
    <AppContext.Provider
      value={{
        spinningWheelSliceList,
        setSpinningWheelSliceList,
        winSliceId,
        setWinSliceId,
        amountOfSlices,
        setAmountOfSlices,
        spinningWheelHtml,
        setSpinningWheelHtml,
        processSliceAmountSelect,
        processSpinningWheelHtml,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
