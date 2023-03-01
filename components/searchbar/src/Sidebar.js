import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styles from './sidebar.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "inset(0% 80% 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={styles.nav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <Navigation />
      {/* { !isOpen ? 
        <MenuToggle toggle={() => toggleOpen()}/> : 
        (<><CloseIcon sx={{ fontSize: 33, color: grey[300]}} /></>) 
      } */}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
