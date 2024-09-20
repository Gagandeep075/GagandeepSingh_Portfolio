import "./Portfolio.scss"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Netflix Clone",
        img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
        desc:" A <strong>Netflix clone</strong> built with <strong>HTML, CSS, JavaScript, React, Redux, MongoDB, and Tailwind CSS</strong> offers a fully functional streaming platform. It features a sleek, responsive UI with movie categories, thumbnails, and search functionality. <strong>Redux</strong> manages state, while <strong>MongoDB</strong> handles user authentication and login.The app makes secure API calls to retrieve movie data, delivering an experience similar to Netflix.",
        link: "https://netlfix-clone-gagan-2.netlify.app"
    },
    {
        id: 2,
        title: "Apple Clone",
        img: "https://patentlyapple.typepad.com/.a/6a0120a5580826970c02c8d39dd4a0200b-800wi",
        desc: `The <strong>Apple website clone</strong> is a front-end project built using <strong>HTML, CSS, JavaScript, React, Tailwind CSS, and GSAP</strong>. It includes three pages: <strong>iPhone</strong>, <strong>iPad</strong>, and <strong>Apple Vision Pro</strong>, styled to replicate Apple's sleek design. React powers dynamic rendering and smooth navigation, while Tailwind ensures responsiveness. GSAP adds smooth, scroll-triggered animations for an interactive user experience. Please Click on <strong>Learn More</strong> button to see other pages`,
        link: "https://apple-clone-gagan.netlify.app"
        
    }
]

const Single = ({item}) => {
    const ref = useRef();

    
    const {scrollYProgress} = useScroll({
        target: ref,
        
    });

    const Y = useTransform(scrollYProgress, [0,1], [-400, 400]);
    return (
    <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
            <img src={item.img} ref={ref} />
            </div>
            <motion.div style={{y: Y}} className="textContainer">
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                <button><a href={item.link} target="_blank">See Demo</a></button>
            </motion.div>
            </div>
        </div>
    </section>);
}

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio