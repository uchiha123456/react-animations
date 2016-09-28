// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const bounceOutUp: Animation = {
  '20%': {
    transform: translate3d(0, '-10px', 0)
  },
  '40%': {
    opacity: 1,
    transform: translate3d(0, '20px', 0)
  },
  '45%': {
    opacity: 1,
    transform: translate3d(0, '20px', 0)
  },
  to: {
    opacity: 0,
    transform: translate3d(0, '-2000px', 0)
  }
};

export default bounceOutUp;
