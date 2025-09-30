import { PROJECTS } from '../components/projectd.js';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Centering the content */}
      <div className="flex justify-center items-center px-4 lg:px-16">
        <div className="w-full max-w-screen-lg"> {/* Limit width on larger screens */}
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-col lg:flex-row gap-8 justify-center items-center">
              
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center"
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={project.image} 
                      width={250} 
                      height={250} 
                      alt={project.name} 
                      className="mb-6 rounded hover:opacity-80 transition"
                    />
                  </a>
                ) : (
                  <img 
                    src={project.image} 
                    width={250} 
                    height={250} 
                    alt={project.name} 
                    className="mb-6 rounded"
                  />
                )}
              </motion.div>

              {/* Text Section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 text-center lg:text-left"
              >
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 font-semibold text-2xl text-white-400 hover:underline block"
                  >
                    {project.name}
                  </a>
                ) : (
                  <h3 className="mb-2 font-semibold text-2xl">{project.name}</h3>
                )}
                
                <p className="mb-4 text-stone-400">{project.description}</p>

                <div className="flex justify-center lg:justify-start flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" 
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
