import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../../state';
import assets from '../../data/assets';
import style from './PlayButton.module.scss';

const PlayButton = ({ type }) => {
  const { isSongPlaying, toggleSongPlaying } = useSnapshot(state);

  return (
    <div
      className={`${style.container} ${
        type === 'small' ? `${style.small} ${style.smallContainer}` : ''
      }`}
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
              ? assets.play_active
              : assets.play_inactive
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
