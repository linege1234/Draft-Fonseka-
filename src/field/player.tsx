import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Player() {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef}>
        Stiker
      </motion.div>
      <motion.div drag dragConstraints={constraintsRef}>
        Midfiler
      </motion.div>
      <motion.div drag dragConstraints={constraintsRef}>
        Defense
      </motion.div>
      <motion.div drag dragConstraints={constraintsRef}>
        Goalkeeper
      </motion.div>
      <motion.div drag dragConstraints={constraintsRef}>
        Substitude
      </motion.div>
    </>
  );
}
