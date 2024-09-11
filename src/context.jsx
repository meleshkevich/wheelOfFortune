import {
  useContext,
  useReducer,
  useEffect,
  useState,
  createContext,
} from 'react';
import reducer from './reducer';

import { ANIMATION_START, ANIMATION_STOP } from './actions';
const AppContext = createContext();

const initialState = {
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

  const onStartAnimation = () => {
    dispatch({ type: ANIMATION_START });
  };

  const onStopAnimation = () => {
    dispatch({ type: ANIMATION_STOP });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        spinningWheelSliceList,
        setSpinningWheelSliceList,
        winSliceId,
        setWinSliceId,
        amountOfSlices,
        setAmountOfSlices,
        spinningWheelHtml,
        setSpinningWheelHtml,
        onStartAnimation,
        onStopAnimation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
