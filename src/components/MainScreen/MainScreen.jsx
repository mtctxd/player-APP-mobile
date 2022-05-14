import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPart from '../MainPart/MainPart';
import Menu from '../Menu/Menu';
import TrackList from '../TrackList/TrackList';

import style from './MainScreen.module.scss';

const MainScreen = () => {

  return (
    <div className={style.mainContainer}>
      <Header />
      <MainPart />
      <Footer />
      <TrackList />
      <Menu />
    </div>
  );
};

export default MainScreen;
