import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import style from './SkillStyles.module.css';
import checkMarkIcon from '../assets/checkmark-dark.svg';
import SkillList from '../common/SkillList';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

function Skills() {
  const ref = useRef();
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 800);

  // Effect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= 800); // Update state based on screen size
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <section ref={ref} id='skills' className={style.container}>
      <h1 className='sectionTitle'>Skills</h1>
      {isScreenLarge ? (
        <>
          <motion.div className={style.skillList} variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
          </motion.div>
          <hr />
          <motion.div className={style.skillList} variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Vue" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          </motion.div>
          <hr />
          <motion.div className={style.skillList} variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Webpack" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
          </motion.div>
        </>
      ) : (
        <>
          <div className={style.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
          </div>
          <hr />
          <div className={style.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Vue" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          </div>
          <hr />
          <div className={style.skillList}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Webpack" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
          </div>
        </>
      )}
    </section>
  );
}

export default Skills;
