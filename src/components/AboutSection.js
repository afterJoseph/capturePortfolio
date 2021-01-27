import Wave from "./Wave";
import home1 from "../img/home1.png";
// Styled
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          // Definir o initial e o animate para não fazer stagger com os outros elementos
          initial="hidden"
          animate="show"
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
