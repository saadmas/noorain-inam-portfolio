import Image from 'next/image';
import styles from './PrimaryArt.module.css';

const PrimaryArt = () => {
  const size = 400;

  return (
    <div>
      <Image
        src="/images/woman-lying-art.jpg"
        height={size}
        width={size}
        alt="Artwork of woman lying down"
        quality={100}
        priority
        className={styles.primaryArtImage}
      />
    </div>
  );
};

export default PrimaryArt;
