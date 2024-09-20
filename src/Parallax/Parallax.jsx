import "./Parallax.scss"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import planets from './planets.png';
import sun from './sun.png';
import { useTheme } from "../common/ThemeContext";

const Parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yText= useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yBg= useTransform(scrollYProgress, [0,1], ["0%", "100%"])

  const {theme, toggleTheme } = useTheme();

  return (
    <div className="parallax" 
    ref={ref}
    style={{
        background:
        theme === "dark" ?
        type === "services"
        ? "linear-gradient(180deg, #222, #1a1a28, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #222, #2C2E3D, #393D4F, #474C61, #505064, #222)"
        //light
        :type === "services"
        ? "linear-gradient(180deg, #FFFFFF, #D0D6F0, #A8B8D9, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #FFFFFF, #DDE0EB, #A3A7B6, #111132, #505064)" ,
    }}>
       
        <motion.h1 style={{y: yText}}>{type==="services" ? "My Projects 🚀" : " My Skills 💪🏼"}</motion.h1>
        <div className="mountains"></div>
        <motion.div
  className="planets"
  style={{
    y: yBg,
    backgroundImage: `url(${type === "services" ? planets : sun})`
  }}
></motion.div>

        <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax