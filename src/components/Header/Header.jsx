import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';

import style from './Header.module.scss';

const Header = () => {
  const snapshot = useSnapshot(state);

  return (
    <div
      className={`${style.headerContainer} ${
        snapshot.isListClicked || snapshot.isMenuClicked ? style.faded : ''
      }`}
    >
      <div className={style.itemsContainer}>
        <div className={style.arrow}>
          <svg
            width="16"
            height="38"
            viewBox="0 0 16 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.042421 19.0281C-0.0550559 18.4626 0.0528727 17.8765 0.374947 17.4691L13.4818 0.888254C14.0124 0.217172 14.926 0.281419 15.5186 1.03104C16.1112 1.78065 16.1619 2.93661 15.6315 3.60766L3.40389 19.0762L15.066 34.0067C15.5769 34.6608 15.528 35.7876 14.9573 36.5182C14.3865 37.2489 13.5064 37.3116 12.9955 36.6574L0.371075 20.495C0.0707918 20.1105 -0.0362106 19.5627 0.042421 19.0281Z"
              fill="#0FD65A"
            />
          </svg>
        </div>
        <div className={style.album}>
          <div className={style.type}>Album</div>
          <div className={style.name}>Unreleased</div>
        </div>
        <div className={style.menu}>
          <svg
            width="4"
            height="38"
            viewBox="0 0 4 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 2.91351C4 1.52536 3.10463 0.399994 2 0.399994C0.895484 0.399994 0 1.52536 0 2.91351C0 4.30173 0.895484 5.42706 2 5.42706C3.10463 5.42706 4 4.30173 4 2.91351ZM2 16.2334C3.10463 16.2334 4 17.3676 4 18.7667C4 20.1658 3.10463 21.3 2 21.3C0.895484 21.3 0 20.1658 0 18.7667C0 17.3676 0.895484 16.2334 2 16.2334ZM2 32.1062C3.10463 32.1062 4 33.2315 4 34.6198C4 36.008 3.10463 37.1333 2 37.1333C0.895484 37.1333 0 36.008 0 34.6198C0 33.2315 0.895484 32.1062 2 32.1062Z"
              fill="#0FD65A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
