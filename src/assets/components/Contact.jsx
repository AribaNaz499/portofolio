import { CONTACT } from "../components/contactd";  // Correct import for 'CONTACT'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      {/* Centering the content */}
      <div className="flex justify-center items-center flex-col tracking-tighter">
        {/* Animating contact details */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-center"
        >
          {CONTACT[0].address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-center"
        >
          {CONTACT[0].phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT[0].email}`}
          className="border-b text-center"
        >
          {CONTACT[0].email}
        </a>
      </div>
    </div>
  );
};

export default Contact;