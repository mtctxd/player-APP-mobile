import React from 'react';

import style from './TrackList.module.scss';
import songs from '../../data/songs.json';
import calculateDots from '../../features/calculateDots';

const TrackList = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
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
        <div className={style.text}>
          <div className={style.song}>Self Conscious</div>
          <div className={style.artist}>Kanye west</div>
        </div>
        <img
          src="./assets/Play_inactive.png"
          alt="playInactive"
          className={style.play}
        />
      </div>
      <div className={style.mainPart}>
        <ul className={style.list}>
          {songs.map((songItem, index) => (
            <li className={style.list__item} key={songItem.name}>
              <div className={style.number}>{`${index + 1}.`}</div>
              <div className={style.name}>
                <span className={style.songName}>
                {songItem.name}
                </span>
                <span className={style.dots}>........................................................</span>
              </div>
              <div className={style.duration}>{songItem.duration}</div>
            </li>
          ))}
        </ul>
        <div className={style.list__button}>shuffle play</div>
        <div className={style.list__next}>
          <svg
            width="29"
            height="16"
            viewBox="0 0 29 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7065 15.9576C14.2601 16.0551 13.7973 15.9472 13.4756 15.6251L0.38541 2.51819C-0.144333 1.98768 -0.09367 1.07395 0.498133 0.48136C1.08991 -0.111168 2.00254 -0.161952 2.5324 0.368496L14.7443 12.5961L26.5315 0.934048C27.048 0.423056 27.9375 0.471984 28.5144 1.04269C29.0912 1.61346 29.1407 2.49358 28.6242 3.00456L15.8645 15.6289C15.561 15.9291 15.1286 16.0362 14.7065 15.9576Z"
              fill="#0FD65A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackList;
