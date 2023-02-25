'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      This is going to be the hero section
  </section>
);

export default Hero;
