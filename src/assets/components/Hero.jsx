import profilepic from "../IMAGES/ariba.jpg";
import resume from "../IMAGES/my-resume.pdf";
import { motion } from "framer-motion";

// Corrected containerVariants (fixed the typo "vsible" to "visible")
const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5, // Staggering children animations for smooth effect
        },
    },
};

// Corrected childVariants for the text elements
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                {/* Left Side - Profile Image */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilepic}
                            alt="Ariba Naz"
                            className="border border-stone-900 rounded-3xl"
                            initial={{ x: 100, opacity: 0 }} // Initial animation
                            animate={{ x: 0, opacity: 1 }}  // Animate to final state
                            transition={{ duration: 1, delay: 1.5 }} // Animation delay for the image
                        />
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants} // Apply the containerVariants to the parent div
                        className="flex flex-col items-center lg:items-start mt-10 px-6 lg:px-12"
                    >
                        {/* Name */}
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Ariba Naz
                        </motion.h2>

                        {/* Job Title */}
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Front End Developer
                        </motion.span>

                        {/* Description */}
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                        >
                            "I am a front-end developer with a strong foundation
                            in HTML, CSS, JavaScript, and modern frameworks
                            like React. My focus is on creating responsive,
                            user-centric websites that deliver seamless experiences
                            across all devices. I am passionate about writing
                            clean, maintainable code and staying up to date
                            with the latest web technologies. With a keen eye for design
                            and usability, I aim to bridge the gap between
                            functionality and aesthetics, ensuring a visually
                            engaging user experience."
                        </motion.p>

                        {/* Resume Download Button */}
                        <motion.a
                            variants={childVariants}
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
