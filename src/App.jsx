import { useEffect, useState } from 'react';
import { useGlobalContext } from './context';
import ControlButtonsGroup from './components/ControlButtonsGroup';
import { calculateSliceAngle } from './utils';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import SelectorsGroup from './components/SelectorsGroup';

function App() {
  const {
    spinningWheelSliceList,
    amountOfSlices,
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
    <>
      <h2 className="title">Wheel of Fortune</h2>
      <Container>
        <Row className="wheel-container">
          <Col sm={4} className="wheel-control">
            <Stack gap={1}>
              <div className="p-2">
                <SelectorsGroup />
              </div>
              <div className="p-2">
                <ControlButtonsGroup />
              </div>
            </Stack>
          </Col>
          <Col sm={8} className="wheel-panel">
            <div>{spinningWheelHtml} </div>
            <div
              className="spinningWheelPanel-pointer"
              id="spinningWheelPanel-pointer"
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
