export const calculateWheelSlices = (numberOfSlices) => {
  const diameter = 365; // Hardcoded for dev
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

export const calculatedSliceAngle = {};

export const calculateSliceAngle = (numberOfSlices) => {
  calculatedSliceAngle.angle = 360 / numberOfSlices;
  return 360 / numberOfSlices;
};
