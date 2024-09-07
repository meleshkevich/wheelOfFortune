import React from 'react';
import { useGlobalContext } from '../context';

const WinSliceSelect = () => {
  const { winSliceId, setWinSliceId, spinningWheelSliceList } =
    useGlobalContext();
  return (
    <label>
      Win №:
      <select
        value={winSliceId}
        onChange={(e) => setWinSliceId(e.target.value)}
      >
        {spinningWheelSliceList.map((slice) => {
          const { id, text } = slice;
          return (
            <option key={id} value={id}>
              {text}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default WinSliceSelect;
