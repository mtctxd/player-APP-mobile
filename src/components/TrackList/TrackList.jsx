import React, { useEffect } from 'react';
import { useSnapshot } from 'valtio';

import style from './TrackList.module.scss';
import songs from '../../data/songs.json';
import state from '../../state';
import PlayButton from '../PlayButton/PlayButton';
import IconTargetable from '../IconTargetable/IconTargetable';

const TrackList = () => {
  const snapshot = useSnapshot(state);

  return (
    <div
      className={`${style.listContainer} ${
        snapshot.isListActive ? style.active : ''
      }`}
    >
      <div className={style.header}>
        <div
          className={style.arrow}
          onClick={() => {
            snapshot.toggleList();
          }}
        >
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
        </div>
        <div className={style.text}>
          <div className={style.song}>Self Conscious</div>
          <div className={style.artist}>Kanye west</div>
        </div>
        <PlayButton type="small" />
      </div>
      <div className={style.mainPart}>
        <ul className={style.list}>
          {songs.map((songItem, index) => (
            <li className={style.list__item} key={songItem.name}>
              <div className={style.number}>{`${index + 1}.`}</div>
              <div className={style.name}>
                <span className={style.songName}>{songItem.name}</span>
                <span className={style.dots}>
                  ........................................................
                </span>
              </div>
              <div className={style.duration}>{songItem.duration}</div>
            </li>
          ))}
        </ul>
        <div className={style.list__button}>shuffle play</div>

        <IconTargetable handler={snapshot.toggleList}>
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
        </IconTargetable>
      </div>
    </div>
  );
};

export default TrackList;
