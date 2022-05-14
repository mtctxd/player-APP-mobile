import { proxy } from 'valtio';

const initialState = {
  isListActive: false,
  isMenuActive: false,
  isSongPlaying: false,
  toggleList: () => ({
    ...initialState,
    isMenuActive: (state.isMenuActive = false),
    isListActive: (state.isListActive = !state.isListActive),
  }),
  toggleMenu: () => ({
    ...initialState,
    isMenuActive: !state.isMenuActive,
    isListActive: (state.isMenuActive = !state.isMenuActive),
  }),
  turnOffAll: () => ({
    ...initialState,
    isMenuActive: false,
    isListActive: false,
  }),
  toggleSongPlaying: () => ({
    ...initialState,
    isSongPlaying: (state.isSongPlaying = !state.isSongPlaying),
  }),
};

const state = proxy(initialState);

export default state;
