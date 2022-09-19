
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../App';
import { closeBarImg } from '../../../assets';
import { DarkModeToggle } from '../../DarkModeToggle';
import styles from './style.module.css';

interface IProps {
  onClose: () => void;
}

export const NavBar = ({onClose}:IProps) => {
  const {isDark, setIsDark} = useContext(Context);

  const handleOnChange = () => {
    if(isDark){
      setIsDark(false);
    } else {
      setIsDark(true)
    }}

  return (
    <div className={isDark ? styles.navBarDark : styles.navBar}>
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
            <DarkModeToggle inputChecked={isDark} onChange={handleOnChange}/>
          </div>
        </div>
      </nav>
    </div>
  )
};