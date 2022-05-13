import React from 'react';

import style from './MainPart.module.scss';

const MainPart = () => {
  return (
    <div className={style.mainPartContainer}>
      <div className={style.slider}>
        <img
          className={style.mainImage}
          src="./assets/unreleased_cover.png"
          alt="unreleased"
        />
      </div>
      <div className={style.song}>
        <div className={style.name}>Self Conscious</div>
        <div className={style.artist}>Kanye West</div>
      </div>
      <div className={style.actions}></div>
      <div className={style.progress}></div>
      <div className={style.progressCanva}></div>
    </div>
  );
};

export default MainPart;
