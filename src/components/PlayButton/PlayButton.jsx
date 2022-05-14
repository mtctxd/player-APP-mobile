import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';

import style from './PlayButton.module.scss';

const PlayButton = ({ type }) => {
  const { isSongPlaying, toggleSongPlaying } = useSnapshot(state);

  return (
    <div
      className={`${style.container} ${type === 'small' ? `${style.small} ${style.smallContainer}` : ''}`}
    >
      <div
        className={`${style.wrapper} ${
          type === 'small' ? `${style.small} ${style.smallWrapper}` : ''
        }`}
        style={
          type === 'small' && !isSongPlaying
            ? {
                display: 'flex',
                placeItems: 'center',
              }
            : {}
        }
      >
        <img
          onClick={() => toggleSongPlaying()}
          src={
            isSongPlaying
              ? './assets/Play_active.png'
              : './assets/Play_inactive.png'
          }
          alt={''}
          style={{
            height: type === 'small' && !isSongPlaying ? '66%' : '100%',
            lineHeight: '131px',
          }}
        />
      </div>
    </div>
  );
};

export default PlayButton;
