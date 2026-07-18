import profilepic from "../IMAGES/ariba.jpg";
import resume from "../IMAGES/Ariba_Naz_Resumes.pdf";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};


const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilepic}
                            alt="Ariba Naz"
                            className="border border-stone-900 rounded-3xl"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>


                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10 px-6 lg:px-12"
                    >

                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Ariba Naz
                        </motion.h2>

                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Frontend Engineer | React.js Developer
                        </motion.span>

                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                        >
                            "I am a Frontend Engineer with hands-on experience building scalable,
                            production-ready web applications using React.js, modern JavaScript, and full-stack
                            technologies. My expertise spans across responsive UI design, payment gateways,
                            authentication architectures, AI-powered tools, and real-time features using Supabase
                            and PostgreSQL. Driven by a passion for clean, maintainable code and performance optimization,
                            I focus on bridging the gap between functional complex architectures and beautiful,
                            user-centric aesthetics."
                        </motion.p>

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
