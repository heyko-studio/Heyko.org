import React from 'react'
import styles from '../styles/Footer.module.css';

function Footer() {
    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <footer className={`${styles.footer} ${styles.footer_container}`}>
                <div className={styles.footer_line}>
                <li className={styles.footer_line}><a href="https://discord.gg/tKypaXn" className={`${styles.footer} ${styles.link}`}>Discord</a></li>
                <li className={styles.footer_line}><a href="https://twitter.com/heyko_studio" className={`${styles.footer} ${styles.link}`}>Twitter</a></li>
                <li className={styles.footer_line}><a href="https://utip.io/heykostudio/" className={`${styles.footer} ${styles.link}`}>Utip</a></li>
                <li className={styles.footer_line}><a href="https://www.youtube.com/channel/UCCqpR17M4B4zdmx2BcSW76Q" className={`${styles.footer} ${styles.link}`}>Youtube</a></li>
                <li className={styles.footer_line}><a href="/about" className={`${styles.footer} ${styles.link}`}>about</a></li>
                </div>
            </footer>
        </>
    )
}

export default Footer