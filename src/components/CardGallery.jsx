import React from "react";
import img1 from "../assets/tourPlaces/Sreemongol.png";
import { motion, AnimatePresence } from "framer-motion";
const CardGallery = () => {
  return (
    <AnimatePresence>
      <motion.img
        key={img1}
        src={img1}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.img
        key={img1}
        src={img1}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.img
        key={img1}
        src={img1}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  );
};

export default CardGallery;
