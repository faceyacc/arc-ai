import * as React from "react";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import styles from './sidebar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';


const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);


export const MenuToggle = ({ toggle }) => {
  const [isOpen, setOpen] = useState(true);

  const close = () => {
    setOpen(false)
    toggle()
  }

  const open = () => {
    setOpen(true)
    toggle()
  }

  return (
    <>
      { isOpen ? (
        <button onClick={close} className={styles.button} >
          <div className={styles.searchIcon}>
            <SearchIcon sx={{ fontSize: 33, color: grey[300]}} />
          </div>
        </button>
      ) : (  
      <button onClick={open} className={styles.button}>
        <div >
          <CloseIcon sx={{ fontSize: 33, color: grey[300]}} />
        </div>
      </button>) }
    </>
  )
};
