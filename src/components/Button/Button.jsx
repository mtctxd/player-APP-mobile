import React from 'react';

import style from './Button.module.scss';

const Button = ({ children }) => {
  return <div className={style.button}>{children}</div>;
};

export default Button;
