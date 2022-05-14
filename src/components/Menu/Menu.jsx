import React from 'react';

import style from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
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

        <div className={style.menu}>
          <svg
            width="4"
            height="29"
            viewBox="0 0 4 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.99996 1.98435C3.99996 0.888444 3.10459 0 1.99996 0C0.895444 0 -3.6e-05 0.888444 -3.6e-05 1.98435C-3.6e-05 3.08032 0.895444 3.96874 1.99996 3.96874C3.10459 3.96874 3.99996 3.08032 3.99996 1.98435ZM1.99996 12.5C3.10459 12.5 3.99996 13.3955 3.99996 14.5C3.99996 15.6046 3.10459 16.5 1.99996 16.5C0.895444 16.5 -3.6e-05 15.6046 -3.6e-05 14.5C-3.6e-05 13.3955 0.895444 12.5 1.99996 12.5ZM1.99996 25.0312C3.10459 25.0312 3.99996 25.9196 3.99996 27.0156C3.99996 28.1116 3.10459 29 1.99996 29C0.895444 29 -3.6e-05 28.1116 -3.6e-05 27.0156C-3.6e-05 25.9196 0.895444 25.0312 1.99996 25.0312Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={style.main}>
        <img
          className={style.image}
          src="./assets/unreleased_cover.png"
          alt="unreleased"
        />
        <div className={style.song}>
          <div className={style.name}>Self Conscious</div>
          <div className={style.artist}>Kayne west</div>
        </div>
        <div className={style.dots}>...</div>
        <div className={style.actions}>
          <div className={style.action}>Add to playlist</div>
          <div className={style.action}>Show album</div>
          <div className={style.action}>Share with friends</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
