import styles from './HeroStyles.module.css';
import heroImg from '../../assets/IMG_2937.png';
import sun from '../../assets/sun.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/Resume (5).pdf';
import {useTheme} from '../../common/ThemeContext';
import moon from '../../assets/moon.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    return (
        <section id='hero'>
            <div className={styles.colorModeContainer}>
                <img src={heroImg} alt="Profile picture of Andrew Ting" className={styles.hero} />
                <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>Andrew<br />Ting</h1>
                <h2>Computer Science Major at Boston University</h2>
                <span>
                    <a href="httpstwitter.com" target='_blank'><img src={twitterIcon} alt="Twitter icon" /></a>
                    <a href="https://github.com/a-ting-26" target='_blank'><img src={githubIcon} alt="github icon" /></a>
                    <a href="https://www.linkedin.com/in/andrew-ting1/" target='_blank'><img src={linkedinIcon} alt="linkedin icon" /></a>
                </span>
                <p>Minoring in data science and interests in machine learning and full stack development.</p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero;