import React from 'react'

const PlayButton = ({image, style, alt}) => {

    console.log(style);
  return (
    <img src={image} alt={alt} className={style}/>
  )
}

export default PlayButton