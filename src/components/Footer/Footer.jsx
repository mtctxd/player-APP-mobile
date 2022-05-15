import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';
import IconTargetable from '../IconTargetable/IconTargetable';

import style from './Footer.module.scss';

const Footer = () => {
  const snapshot = useSnapshot(state);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <div className={style.icon}>
        <IconTargetable handler={snapshot.toggleList}>
          <svg
            width="38"
            height="27"
            viewBox="0 0 38 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.99676 1.71883C0.99676 2.66167 1.78034 3.42937 2.74316 3.42937C3.70619 3.42937 4.48991 2.66167 4.48991 1.71883C4.48991 0.775918 3.70619 0.00858 2.74316 0.00858C1.78034 0.00858 0.99676 0.775918 0.99676 1.71883ZM12.1186 3.36076C11.1801 3.36076 10.4162 2.6124 10.4162 1.69294C10.4162 0.773474 11.1801 0.025168 12.1186 0.025168H35.3082C36.2467 0.025168 37.0101 0.773474 37.0101 1.69294C37.0101 2.6124 36.2467 3.36076 35.3082 3.36076H12.1186ZM10.4162 12.9936C10.4162 13.9131 11.1801 14.6615 12.1186 14.6615H35.3082C36.2467 14.6615 37.0101 13.9131 37.0101 12.9936C37.0101 12.0742 36.2467 11.3259 35.3082 11.3259H12.1186C11.1801 11.3259 10.4162 12.0742 10.4162 12.9936ZM10.4162 24.2952C10.4162 25.2146 11.1801 25.9629 12.1186 25.9629H35.3082C36.2467 25.9629 37.0101 25.2146 37.0101 24.2952C37.0101 23.3749 36.2467 22.6266 35.3082 22.6266H12.1186C11.1801 22.6266 10.4162 23.3749 10.4162 24.2952ZM2.74316 14.7041C1.7808 14.7041 0.997588 13.9365 0.997588 12.9936C0.997588 12.0508 1.7808 11.2839 2.74316 11.2839C3.70587 11.2839 4.48898 12.0508 4.48898 12.9936C4.48898 13.9365 3.70587 14.7041 2.74316 14.7041ZM0.99676 24.2944C0.99676 25.2372 1.78034 26.0049 2.74316 26.0049C3.70619 26.0049 4.48991 25.2372 4.48991 24.2944C4.48991 23.3515 3.70619 22.5846 2.74316 22.5846C1.78034 22.5846 0.99676 23.3515 0.99676 24.2944Z"
              fill="#0FD65A"
            />
          </svg>
        </IconTargetable>
      </div>
      <div className={style.song__info}>
        <div className={style.text}>
          <div className={style.next}>next</div>
          <div className={style.name}>Livin' In A Movi</div>
        </div>
        <div className={style.dots}>................................................................................................................................................</div>
      </div>
      <div className={style.duration}>3:27</div>
      </div>
    </div>
  );
};

export default Footer;
