import "./Portfolio.scss"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Netflix Clone",
        img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
        desc: `
        <ul>
            <li>A <strong>Netflix clone</strong> built with the following technologies:</li>
            <ul>
                <li><strong>HTML, CSS, JavaScript, React, Redux, MongoDB, Tailwind CSS</strong></li>
            </ul>
            <li>Features:</li>
            <ul>
                <li><strong>Sleek, responsive UI</strong> with movie categories, thumbnails, and search functionality.</li>
                <li><strong>Redux</strong> for state management.</li>
                <li><strong>MongoDB</strong> handles user authentication and login.</li>
                <li><strong>Secure API calls</strong> to retrieve movie data, mimicking Netflix's experience.</li>
            </ul>
        </ul>`,
        link: "https://netlfix-clone-gagan-2.netlify.app"
    },
    {
        id: 2,
        title: "Apple Clone",
        img: "https://patentlyapple.typepad.com/.a/6a0120a5580826970c02c8d39dd4a0200b-800wi",
        desc: `
        <ul>
            <li>An <strong>Apple website clone</strong> created using:</li>
            <ul>
                <li><strong>HTML, CSS, JavaScript, React, Tailwind CSS, GSAP</strong></li>
            </ul>
            <li>Key components:</li>
            <ul>
                <li>Three pages: <strong>iPhone, iPad, and Apple Vision Pro</strong>.</li>
                <li><strong>React</strong> powers dynamic rendering and smooth navigation.</li>
                <li><strong>Tailwind CSS</strong> ensures responsiveness and style consistency.</li>
                <li><strong>GSAP</strong> adds smooth, scroll-triggered animations for an interactive experience.</li>
            </ul>
        </ul>`,
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
