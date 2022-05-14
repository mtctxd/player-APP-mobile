import { proxy } from "valtio";

const initialState = {
    isListClicked: false,
    isMenuClicked: false,
    toggleList: () => ({
        ...initialState,
        isListClicked: state.isListClicked = !state.isListClicked
    }),
}

const state = proxy(
    initialState,
)

export default state;