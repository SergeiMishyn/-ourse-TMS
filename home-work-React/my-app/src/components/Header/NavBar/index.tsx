import { Link } from 'react-router-dom';
import { closeBarImg } from '../../../assets';
import { DarkModeToggle } from '../../DarkModeToggle';


import styles from './style.module.css';

interface IProps {
  onClose: () => void;
}

export const NavBar = ({onClose}:IProps) => {



  return (
    <div className={styles.navBar}>
      <nav className={styles.containerNavBar}>
        <div>
          <button onClick={onClose} className={styles.closeMenuButton}>
            <img src={closeBarImg} alt="menu" />
          </button>
        </div>
        <div className={styles.linksQDark}>
          <ul className={styles.ul}>
              <li>
                <Link to="/">All posts</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </ul>
          <div>
            <DarkModeToggle inputChecked={false} onChange={()=>{}}/>
          </div>
        </div>
      </nav>
    </div>
  )
};