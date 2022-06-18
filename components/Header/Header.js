import styles from './Header.module.css';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  const iconSize = 29;
  const iconColor = 'black';

  const openInstagramProfile = () => {
    window.open('https://www.instagram.com/phoolsunga/', 'blank');
  };

  return (
    <header>
      <h1 className={styles.header}>Noorain Inam</h1>
      <div className={styles.buttonRow}>
        <AiOutlineInstagram size={iconSize} className={styles.icon} color={iconColor} onClick={openInstagramProfile} />
        <a href="mailto:nooraininam9@gmail.com">
          <AiOutlineMail size={iconSize} className={styles.icon} color={iconColor} />
        </a>
      </div>
    </header>
  );
};

export default Header;
