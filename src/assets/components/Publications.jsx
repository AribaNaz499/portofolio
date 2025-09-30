import React from "react";
import { motion } from "framer-motion";
import { PUBLICATIONS } from './publicationsData.js'; // relative path to the data file

const Publications = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Publications
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-8 items-center p-6 border border-gray-700 rounded-lg hover:border-blue-500 transition">
            
            {/* Image with animation */}
            {pub.image && (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center"
              >
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="rounded"
                  style={{ maxWidth: '200px', height: '150px' }}
                />
              </motion.div>
            )}

            {/* Text content with animation */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 text-center lg:text-left"
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-white-400 hover:underline"
              >
                {pub.title}
              </a>
              <p className="mt-2 text-gray-300">{pub.description}</p>
              
              {pub.topics && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {pub.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-sm text-white px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
