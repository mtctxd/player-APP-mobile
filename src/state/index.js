import { proxy } from 'valtio';

const initialState = {
  isListActive: false,
  isMenuActive: false,
  toggleList: () => ({
    ...initialState,
    isMenuActive: (state.isMenuActive = false),
    isListActive: (state.isListActive = !state.isListActive),
  }),
  toggleMenu: () => ({
    ...initialState,
    isMenuActive: (state.isMenuActive = !state.isMenuActive),
    isListActive: (state.isListActive = false),
  }),
  turnOffAll: () => ({
    ...initialState,
    isMenuActive: false,
    isListActive: false,
  }),
};

const state = proxy(initialState);

export default state;
