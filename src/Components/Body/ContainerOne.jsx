import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import WebDevPerson from "../../assets/Imgs/dev-per.png";

export const ContainerOne = ()=>{

    // Motion variants for stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return(
        <div className="container-fluid position-relative overflow-hidden" id="pjs" style={{ minHeight: '85vh' }}>
            <HeroBackground />
            
            <div className="row border-danger align-items-center h-100 position-relative z-1">
                <div className="col-md-6 border-success p-0 text-start overflow-hidden">
                    <motion.div 
                        className="container-fluid p-4 text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={itemVariants} className="display-1 text-warning gradient-text-warning"><b>Namaste!</b></motion.h1>
                        <motion.h1 variants={itemVariants} className="display-1"><strong>I'm</strong></motion.h1>
                        <motion.h1 variants={itemVariants} className="display-4 p-1">
                            <span className="badge border border-success p-2 glass-pill">
                                Anirban <span className="badge bg-success">Mukherjee</span>
                            </span>
                        </motion.h1>
                        
                        <motion.div variants={itemVariants} className="card bg-transparent text-white border-0 mt-4">
                            <div className="card-text glass-card p-4">
                                <h3 className="mb-3">I am a full-stack web <span className="badge bg-t-success border border-success hover-lift d-inline-block">Developer <span className="badge bg-success">NOUN</span></span></h3>
                                <h3 className="mb-3">Able to handle both <span className="badge bg-t-pink border border-danger hover-lift d-inline-block">front and back-end <span className="badge bg-danger">VERB</span></span></h3>
                                <h3>components of <span className="badge bg-t-warning border border-warning hover-lift d-inline-block">Web Design <span className="badge bg-warning text-dark">SKILL</span></span></h3>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="col-md-6 border-dark p-0 overflow-hidden d-flex justify-content-center align-items-center">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="d-block w-100" 
                        src={WebDevPerson} 
                        alt="Carousel Block" 
                        style={{ maxHeight: '85vh', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(202, 140, 253, 0.3))' }}
                    />
                </div>
            </div>
        </div>
    )
}
