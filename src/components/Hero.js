import React from 'react';

//importar data
import {heroData} from '../data';
//Importar componentes
import Header from './Header';
//importar motion
import {motion} from 'framer-motion';
//Importart variantes
import {fadeIn, staggerContainer} from '../variants'


const Hero = () => {
  //destructuracion hero data
  const {pretitle, title, subtitle ,btnText} = heroData
  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-right'>
      {/* header */}
      <Header />
      <div className='container mx-auto min-h-[390px] flex justify-center items-center'></div>
      {/* text */}
      <motion.div 
      variants={staggerContainer(0.3, 1)} 
      initial='hidden' 
      whileInView={'show'} 
      className='text-center flex flex-col items-center'>

        {/* pretitulo */}
          <motion.div 
          variants={fadeIn('down', 'tween', 0.2, 1.1)} 
          className='text-white text-[24px] lg:text-[28px] font-primary itañoc lg:font-medium mb-1'>{pretitle}
          </motion.div>

        {/* titulo */}
         <motion.h1 variants={fadeIn('down', 'tween', 0.3, 1.1)}
          className='h1 mb-5'>{title}
          </motion.h1>

        {/* subtitulo */}
          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.1)}
           className='text-white max-w-[540px] mb-8'>{subtitle}
           </motion.p>

        {/* boton*/}
        <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
         <button className='btn'>{btnText}</button>
        </motion.div>
      </motion.div>
    </section>
  );

  
};

export default Hero;
