import { useState } from 'react';
import { openBarImg } from '../../../assets';
import { Time } from '../../Time';
import { UserCard } from '../../User';
import { NavBar } from '../NavBar';
import styles from './style.module.css';

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBarVisible(true);

  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  

  return (
    <div>
      <nav className={styles.header}>
        <button className={styles.button} onClick={openNavBar}>
          <img src={openBarImg} alt="menu" className={styles.menuButton} />
        </button>
        <div className={styles.menuCardQTime}>
          <UserCard UserName={"Sergei Mishyn"} /> 
          <Time/>
        </div>

      </nav>
      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </div>
  )
};


