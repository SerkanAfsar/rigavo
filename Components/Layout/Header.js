import React from 'react';
import styles from 'styles/Header/HeaderTop.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>Rigavo Web App</div>
                    <div className={styles.searchArea}>
                        <form>
                            <input type="text" placeholder='Kelime,ilan no veya mağaza adı ile ara...' />
                            <button type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </form>
                        <a href="#">Detaylı Arama</a>
                    </div>
                    <div className={styles.memberShip}>
                        <ul>
                            <li><a href="#">Giriş Yap</a></li>
                            <li><a href="#">Hesap Aç</a></li>
                        </ul>
                        <a className={styles.btnAdv}>Ücretsiz İlan Ver!</a>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;