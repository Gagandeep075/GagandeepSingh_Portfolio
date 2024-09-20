import style from './SkillStyles.module.css'
import checkMarkIcon from '../assets/checkmark-dark.svg'
import SkillList from '../common/SkillList'
import { animate, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
      duration:  1,
      staggerChildren: 0.1,
    }
  }
}
function Skills() {
  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.section ref={ref} id='skills' className={style.container} variants={variants} initial="initial" 
    animate={isInView && "animate"}
    >
        <h1 className='sectionTitle'>Skills</h1>
        <motion.div className={style.skillList} variants={variants}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          <SkillList src={checkMarkIcon} skill="Node" />
          </motion.div>
          <hr />
          <motion.div className={style.skillList} variants={variants}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Angular" />
          <SkillList src={checkMarkIcon} skill="Vue" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          </motion.div>
          <hr/>
          <motion.div className={style.skillList} variants={variants}>
          <SkillList src={checkMarkIcon} skill="Redux" />
          <SkillList src={checkMarkIcon} skill="Webpack" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Jest" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          </motion.div>
    </motion.section>
  )
}

export default Skills