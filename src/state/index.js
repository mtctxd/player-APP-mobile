import { proxy } from 'valtio';

const initialState = {
  isListActive: false,
  isMenuActive: false,
  isSongPlaying: false,
  toggleList: () => ({
    ...initialState,
    isMenuActive: (state.isMenuActive = false),
    isListActive: (!state.isListActive),
  }),
  toggleMenu: () => ({
    ...initialState,
    isMenuActive: (!state.isMenuActive),
    isListActive: (state.isListActive = false),
  }),
  turnOffAll: () => ({
    ...initialState,
    isMenuActive: false,
    isListActive: false,
  }),
  toggleSongPlaying: () => ({
      ...initialState,
      isSongPlaying: !initialState.isSongPlaying
  })
};

const state = proxy(initialState);

export default state;
