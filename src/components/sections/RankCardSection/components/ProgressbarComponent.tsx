import { motion } from "framer-motion";
import React from "react";
import styles from "./style.module.css";
const ProgressbarComponent = ({ progress }: { progress: number }) => {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-2 rounded-full ${styles.progress}`}
      >
        <motion.div
          className={`w-2/3 h-full text-center text-xs text-white rounded-full ${styles.progress_foreground}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }} // Change this value to control the progress
        ></motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default ProgressbarComponent;
