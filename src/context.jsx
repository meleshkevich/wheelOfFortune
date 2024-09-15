import {
  useContext,
  useReducer,
  useEffect,
  useState,
  createContext,
} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [spinningWheelSliceList, setSpinningWheelSliceList] = useState([
    { id: 1, text: 'Slice 1' },
    { id: 2, text: 'Slice 2' },
    { id: 3, text: 'Slice 3' },
    { id: 4, text: 'Slice 4' },
    { id: 5, text: 'Slice 5' },
    { id: 6, text: 'Slice 6' },
    { id: 7, text: 'Slice 7' },
    { id: 8, text: 'Slice 8' },
    { id: 9, text: 'Slice 9' },
    { id: 10, text: 'Slice 10' },
    { id: 11, text: 'Slice 11' },
    { id: 12, text: 'Slice 12' },
    { id: 13, text: 'Slice 13' },
    { id: 14, text: 'Slice 14' },
  ]);

  const [winSliceId, setWinSliceId] = useState(7);
  const [amountOfSlices, setAmountOfSlices] = useState(10);
  const [spinningWheelHtml, setSpinningWheelHtml] = useState('');

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
