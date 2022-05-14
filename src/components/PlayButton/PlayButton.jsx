import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';

const PlayButton = ({ style }) => {
  const { isSongPlaying, toggleSongPlaying } = useSnapshot(state);

  return (
    <div className={style} onClick={() => toggleSongPlaying()}>
      <img
        src={
          isSongPlaying
            ? './assets/Play_active.png'
            : './assets/Play_inactive.png'
        }
        alt={''}
        className={style}
      />
    </div>
  );
};

export default PlayButton;
