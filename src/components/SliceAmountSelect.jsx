import React from 'react';
import { useGlobalContext } from '../context';

function SliceAmountSelect() {
  const { amountOfSlices, setAmountOfSlices, spinningWheelSliceList } =
    useGlobalContext();
  return (
    <label>
      Slices:
      <select
        value={amountOfSlices}
        onChange={(e) => setAmountOfSlices(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={12}>12</option>
        <option value={14}>14</option>
      </select>
    </label>
  );
}

export default SliceAmountSelect;
