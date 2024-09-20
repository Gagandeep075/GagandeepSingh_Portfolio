import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImage.png'
import CV from '../../assets/GAGANDEEP_SINGH_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkdinLight from '../../assets/linkedin-light.svg'
import linkdinDark from '../../assets/linkedin-dark.svg'

const Hero = () => {
    const {theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;

    return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero}
             src={heroImg}
              alt='The profile picture of Gagandeeep singh'
             />
            <img 
            className={styles.colorMode}
            src={themeIcon}
            alt='color mode icon'
            onClick={toggleTheme}
             />
        </div>
        <div className={styles.info}>
            <h1>Gagandeep <br/> Singh</h1>

            <h2>Frontend Developer</h2>
            <span>
                <a href='https://twitter.com/' target='_blank'>
                    <img src={twitterIcon} alt='twitter Icon' />
                </a>
                <a href='https://github.com/' target='_blank'>
                    <img src={githubIcon} alt='github Icon' />
                </a>

                <a href='https://linkdin.com/' target='_blank'>
                    <img src={linkdinIcon} alt='linkdin Icon' />
                </a>

            </span>

            <p className={styles.description}>
                With a passion for developing modern react apps for commercial businesses.
            </p>

            <a href={CV} download>
                <button className='hover' >
                    Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero