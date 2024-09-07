import { ANIMATION_START, ANIMATION_STOP } from './actions';

const reducer = (state, action) => {
  if (action.type === ANIMATION_START) {
    const wheel = document.getElementById('wheel');
    const pointer = document.getElementById('spinningWheelPanel-pointer');
    wheel.classList.remove('dial-spinning');
    wheel.classList.remove('dial-stop');
    pointer.classList.remove('spinningWheelPanel-pointer-animate');
    wheel.classList.add('dial-spinning');
    return { ...state };
  }

  if (action.type === ANIMATION_STOP) {
    console.log('ANIMATION_STOP');

    //TODO: correctly import calculateWheelSlices() func

    // const pointer = document.getElementById('spinningWheelPanel-pointer');
    // const wheel = document.getElementById('wheel');
    // const { sliceAngle } = calculateWheelSlices();

    // const halfSlice = (sliceAngle / 2) * 0.9;
    // const decelerateSmoothAngle = Math.floor(
    //   Math.random() * (2 * halfSlice + 1) - halfSlice
    // );

    // const calculatedWinSlice =
    //   (winSliceId - (90 / sliceAngle + 1)) * sliceAngle;
    // const decelerateWinAngle =
    //   1080 - calculatedWinSlice + decelerateSmoothAngle;

    // const style = document.createElement('style');
    // document.head.appendChild(style);
    // const styleSheet = style.sheet;

    // const decelerate = `
    //   @keyframes decelerate {
    //     from { transform: rotate(0); }
    //     to { transform: rotate(${decelerateWinAngle}deg); }
    //   }
    // `;

    // styleSheet.insertRule(decelerate, 0);
    // pointer.classList.add('spinningWheelPanel-pointer-animate');
    // wheel.classList.add('dial-stop');
    return { ...state };
  }

  throw new Error(`no matchning action type ${action.type}`);
};

export default reducer;
