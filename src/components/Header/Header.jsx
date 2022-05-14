import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';
import IconTargetable from '../IconTargetable/IconTargetable';

import style from './Header.module.scss';

const Header = () => {
  const snapshot = useSnapshot(state);

  return (
    <div
      className={`${style.headerContainer} ${
        snapshot.isListActive || snapshot.isMenuActive ? style.faded : ''
      }`}
    >
      <div className={style.itemsContainer}>
        <div className={style.arrow}>
          <IconTargetable zIndex={5} handler={snapshot.turnOffAll}>
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0424175 14.7064C-0.0550593 14.26 0.0528693 13.7972 0.374944 13.4756L13.4818 0.385468C14.0124 -0.144333 14.926 -0.093612 15.5186 0.498191C16.1112 1.08999 16.1619 2.00259 15.6315 2.53237L3.40388 14.7443L15.066 26.5316C15.5769 27.048 15.528 27.9376 14.9573 28.5144C14.3865 29.0913 13.5064 29.1407 12.9955 28.6242L0.371072 15.8645C0.0707884 15.5609 -0.036214 15.1285 0.0424175 14.7064Z"
                fill="#0FD65A"
              />
            </svg>
          </IconTargetable>
        </div>
        <div className={style.album}>
          <div className={style.type}>Album</div>
          <div className={style.name}>Unreleased</div>
        </div>
        <div className={style.menu}>
          <IconTargetable zIndex={5} handler={snapshot.toggleMenu}>
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
          </IconTargetable>
        </div>
      </div>
    </div>
  );
};

export default Header;
