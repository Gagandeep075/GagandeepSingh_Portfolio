import { useRef, useState } from "react";
import "./Contact.scss"
import {  motion, useInView } from "framer-motion"
import emailjs from '@emailjs/browser';


const variants = {
    initial: {
        y:500,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {
    const ref  = useRef();
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const isInView = useInView(ref, {margin: "-100px"});


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_68qedwo', 'template_g4tbroi', formRef.current, {
            publicKey: 'K4REycy-DKXiXSk9n',
          })
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
              setError(true);
            },
          );
      };

  return (
    <motion.div className="contact"
     variants={variants}
      initial="initial"
       whileInView="animate"
       ref={ref} >


        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>anshralhan8@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Brampton, Ontario, Canada</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+1 437 599 0777</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" 
            initial={{opacity: 1}} 
            whileInView={{opacity:0}}
             transition={{delay:3, duration:1}}>
                <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                    <motion.path
                    strokeWidth={0.2}
                    fill="none"
                    initial={{pathLength: 0}}
                    animate={isInView && {pathLength: 1}}
                    transition={{duration:3}}
                    d="M 28.189 16.504 h -1.666 c 0 -5.437 -4.422 -9.858 -9.856 -9.858 l -0.001
                     -1.664 C 23.021 4.979 28.189 10.149 28.189 16.504 Z M 16.666 7.856 L 16.665
                      9.52 c 3.853 0 6.983 3.133 6.981 6.983 l 1.666 -0.001 C 25.312 11.735 21.436
                       7.856 16.666 7.856 Z M 16.333 0 C 7.326 0 0 7.326 0 16.334 c 0 9.006 7.326
                        16.332 16.333 16.332 c 0.557 0 1.007 -0.45 1.007 -1.006 c 0 -0.559 -0.45
                         -1.01 -1.007 -1.01 c -7.896 0 -14.318 -6.424 -14.318 -14.316 c 0 -7.896
                          6.422 -14.319 14.318 -14.319 c 7.896 0 14.317 6.424 14.317 14.319 c 0
                           3.299 -1.756 6.568 -4.269 7.954 c -0.913 0.502 -1.903 0.751 -2.959 0.761 c 0.634 -0.377 1.183 -0.887 1.591 -1.529 c 0.08 -0.121 0.186 -0.228 0.238 -0.359 c 0.328 -0.789 0.357 -1.684 0.555 -2.518 c 0.243 -1.064 -4.658 -3.143 -5.084 -1.814 c -0.154 0.492 -0.39 2.048 -0.699 2.458 c -0.275 0.366 -0.953 0.192 -1.377 -0.168 c -1.117 -0.952 -2.364 -2.351 -3.458 -3.457 l 0.002 -0.001 c -0.028 -0.029 -0.062 -0.061 -0.092 -0.092 c -0.031 -0.029 -0.062 -0.062 -0.093 -0.092 v 0.002 c -1.106 -1.096 -2.506 -2.34 -3.457 -3.459 c -0.36 -0.424 -0.534 -1.102 -0.168 -1.377 c 0.41 -0.311 1.966 -0.543 2.458 -0.699 c 1.326 -0.424 -0.75 -5.328 -1.816 -5.084 c -0.832 0.195 -1.727 0.227 -2.516 0.553 c -0.134 0.057 -0.238 0.16 -0.359 0.24 c -2.799 1.774 -3.16 6.082 -0.428 9.292 c 1.041 1.228 2.127 2.416 3.245 3.576 l -0.006 0.004 c 0.031 0.031 0.063 0.06 0.095 0.09 c 0.03 0.031 0.059 0.062 0.088 0.095 l 0.006 -0.006 c 1.16 1.118 2.535 2.765 4.769 4.255 c 4.703 3.141 8.312 2.264 10.438 1.098 c 3.67 -2.021 5.312 -6.338 5.312 -9.719 C 32.666 7.326 25.339 0 16.333 0 Z" />
                    </svg>
            </motion.div>
            <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{opacity: 0}} 
            whileInView={{opacity:1}}
             transition={{delay:4, duration:1}}>
                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email" name="email" />
                <textarea rows={8}  placeholder="Message" name="message" />
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact



// path("M 15.1008 15.0272 L 15.6446 15.5437 V 15.5437 L 15.1008 15.0272 Z M 15.5562 14.5477 L 15.0124 14.0312 V 14.0312 L 15.5562 14.5477 Z M 17.9729 14.2123 L 17.5987 14.8623 H 17.5987 L 17.9729 14.2123 Z M 19.8834 15.312 L 19.5092 15.962 L 19.8834 15.312 Z M 20.4217 18.7584 L 20.9655 19.275 L 20.9655 19.2749 L 20.4217 18.7584 Z M 19.0012 20.254 L 18.4574 19.7375 L 19.0012 20.254 Z M 17.6763 20.9631 L 17.75 21.7095 L 17.6763 20.9631 Z M 7.8154 16.4752 L 8.3592 15.9587 L 7.8154 16.4752 Z M 3.75185 6.92574 C 3.72965 6.51212 3.37635 6.19481 2.96273 6.21701 C 2.54911 6.23921 2.23181 6.59252 2.25401 7.00613 L 3.75185 6.92574 Z M 9.19075 8.80507 L 9.73454 9.32159 L 9.19075 8.80507 Z M 9.47756 8.50311 L 10.0214 9.01963 L 9.47756 8.50311 Z M 9.63428 5.6931 L 10.2467 5.26012 L 9.63428 5.6931 Z M 8.3733 3.90961 L 7.7609 4.3426 V 4.3426 L 8.3733 3.90961 Z M 4.7177 3.09213 C 4.43244 3.39246 4.44465 3.86717 4.74498 4.15244 C 5.04531 4.4377 5.52002 4.42549 5.80529 4.12516 L 4.7177 3.09213 Z M 11.0632 13.0559 L 11.607 12.5394 L 11.0632 13.0559 Z M 10.6641 19.8123 C 11.0148 20.0327 11.4778 19.9271 11.6982 19.5764 C 11.9186 19.2257 11.8129 18.7627 11.4622 18.5423 L 10.6641 19.8123 Z M 15.113 20.0584 C 14.7076 19.9735 14.3101 20.2334 14.2252 20.6388 C 14.1403 21.0442 14.4001 21.4417 14.8056 21.5266 L 15.113 20.0584 Z M 15.6446 15.5437 L 16.1 15.0642 L 15.0124 14.0312 L 14.557 14.5107 L 15.6446 15.5437 Z M 17.5987 14.8623 L 19.5092 15.962 L 20.2575 14.662 L 18.347 13.5623 L 17.5987 14.8623 Z M 19.8779 18.2419 L 18.4574 19.7375 L 19.545 20.7705 L 20.9655 19.275 L 19.8779 18.2419 Z M 8.3592 15.9587 C 4.48307 11.8778 3.83289 8.43556 3.75185 6.92574 L 2.25401 7.00613 C 2.35326 8.85536 3.13844 12.6403 7.27161 16.9917 L 8.3592 15.9587 Z M 9.73454 9.32159 L 10.0214 9.01963 L 8.93377 7.9866 L 8.64695 8.28856 L 9.73454 9.32159 Z M 10.2467 5.26012 L 8.98569 3.47663 L 7.7609 4.3426 L 9.02189 6.12608 L 10.2467 5.26012 Z M 9.19075 8.80507 C 8.64695 8.28856 8.64626 8.28929 8.64556 8.29002 C 8.64533 8.29028 8.64463 8.29102 8.64415 8.29152 C 8.6432 8.29254 8.64223 8.29357 8.64125 8.29463 C 8.63928 8.29675 8.63724 8.29896 8.63515 8.30127 C 8.63095 8.30588 8.6265 8.31087 8.62182 8.31625 C 8.61247 8.32701 8.60219 8.33931 8.5912 8.3532 C 8.56922 8.38098 8.54435 8.41511 8.51826 8.45588 C 8.46595 8.53764 8.40921 8.64531 8.36117 8.78033 C 8.26346 9.0549 8.21022 9.4185 8.27675 9.87257 C 8.40746 10.7647 8.99202 11.9644 10.5194 13.5724 L 11.607 12.5394 C 10.1793 11.0363 9.82765 10.1106 9.7609 9.65511 C 9.72871 9.43536 9.76142 9.31957 9.77436 9.28321 C 9.78163 9.26277 9.78639 9.25709 9.78174 9.26437 C 9.77948 9.26789 9.77498 9.27451 9.76742 9.28407 C 9.76363 9.28885 9.75908 9.29437 9.75364 9.30063 C 9.75092 9.30375 9.74798 9.30706 9.7448 9.31056 C 9.74321 9.31231 9.74156 9.3141 9.73985 9.31594 C 9.739 9.31686 9.73813 9.31779 9.73724 9.31873 C 9.7368 9.3192 9.73612 9.31992 9.7359 9.32015 C 9.73522 9.32087 9.73454 9.32159 9.19075 8.80507 Z M 10.5194 13.5724 C 12.0422 15.1757 13.1924 15.806 14.0699 15.9485 C 14.5201 16.0216 14.8846 15.9632 15.1606 15.8544 C 15.2955 15.8012 15.4023 15.7387 15.4824 15.6819 C 15.5223 15.6535 15.5556 15.6266 15.5825 15.6031 C 15.5959 15.5913 15.6078 15.5803 15.6181 15.5703 C 15.6233 15.5654 15.628 15.5606 15.6324 15.5562 C 15.6346 15.554 15.6368 15.5518 15.6388 15.5497 C 15.6398 15.5487 15.6408 15.5477 15.6417 15.5467 C 15.6422 15.5462 15.6429 15.5454 15.6432 15.5452 C 15.6439 15.5444 15.6446 15.5437 15.1008 15.0272 C 14.557 14.5107 14.5577 14.51 14.5583 14.5093 C 14.5586 14.509 14.5592 14.5083 14.5597 14.5078 C 14.5606 14.5069 14.5615 14.506 14.5623 14.5051 C 14.5641 14.5033 14.5658 14.5015 14.5675 14.4998 C 14.5708 14.4965 14.574 14.4933 14.577 14.4904 C 14.5831 14.4846 14.5885 14.4796 14.5933 14.4754 C 14.6029 14.467 14.61 14.4616 14.6146 14.4584 C 14.6239 14.4517 14.623 14.454 14.6102 14.459 C 14.5909 14.4666 14.5001 14.4987 14.3103 14.4679 C 13.9078 14.4025 13.0391 14.0472 11.607 12.5394 L 10.5194 13.5724 Z M 8.98569 3.47663 C 7.9721 2.04305 5.94388 1.80119 4.7177 3.09213 L 5.80529 4.12516 C 6.32812 3.57471 7.24855 3.61795 7.7609 4.3426 L 8.98569 3.47663 Z M 18.4574 19.7375 C 18.1783 20.0313 17.8864 20.1887 17.6026 20.2167 L 17.75 21.7095 C 18.497 21.6357 19.1016 21.2373 19.545 20.7705 L 18.4574 19.7375 Z M 10.0214 9.01963 C 10.9889 8.00095 11.0574 6.40678 10.2467 5.26012 L 9.02189 6.12608 C 9.44404 6.72315 9.3793 7.51753 8.93377 7.9866 L 10.0214 9.01963 Z M 19.5092 15.962 C 20.3301 16.4345 20.4907 17.5968 19.8779 18.2419 L 20.9655 19.2749 C 22.2705 17.901 21.8904 15.6019 20.2575 14.662 L 19.5092 15.962 Z M 16.1 15.0642 C 16.4854 14.6584 17.086 14.5672 17.5987 14.8623 L 18.347 13.5623 C 17.2485 12.93 15.8862 13.1113 15.0124 14.0312 L 16.1 15.0642 Z M 11.4622 18.5423 C 10.4785 17.9241 9.43149 17.0876 8.3592 15.9587 L 7.27161 16.9917 C 8.42564 18.2067 9.56897 19.1241 10.6641 19.8123 L 11.4622 18.5423 Z M 17.6026 20.2167 C 17.0561 20.2707 16.1912 20.2842 15.113 20.0584 L 14.8056 21.5266 C 16.0541 21.788 17.0742 21.7762 17.75 21.7095 L 17.6026 20.2167 Z");