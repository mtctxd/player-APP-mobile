import React from 'react';

import style from './IconTargetable.module.scss';

const IconTargetable = ({ children, handler, zIndex }) => {
  return (
    <div className={style.container}>
      <div onClick={handler} className={style.aria} style={{ zIndex }}></div>
      {children}
    </div>
  );
};

export default IconTargetable;
