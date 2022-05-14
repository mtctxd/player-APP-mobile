import React from 'react';

const PlayButton = ({ image, style, alt }) => (
  <img src={image} alt={alt} className={style} />
);

export default PlayButton;
