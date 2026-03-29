import React from 'react';
import { motion } from 'framer-motion';
import Web from "../../assets/Imgs/web.png";

export const ContainerTwo = ()=>{
    return(
        <div className="container-fluid py-5 position-relative">
            <div className="row border-primary align-items-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="col-12 text-center mb-5"
                >
                    <h1 className="text-white display-4 gradient-text-vio"><b>What I Do?</b></h1>
                </motion.div>
                
                <div className="col-md-6 border-success p-0 overflow-hidden d-flex justify-content-center">
                    <motion.img 
                        className="d-block w-100" 
                        src={Web} 
                        alt="Carousel Block"
                        style={{ maxWidth: '90%', objectFit: 'contain' }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    />
                </div>
                
                <div className="col-md-6 p-4 overflow-hidden">
                    <motion.div 
                        className="card d-cl text-white mb-3 glass-card hover-lift border-0 p-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                    >
                        <div className="card-header border-0 text-center"><h1 className="gradient-text-warning m-0">Web Development</h1></div>
                        
                        <div className="card-body p-0 mt-3">
                            <ul className="list-group list-group-flush text-start">
                                <motion.li whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }} className="list-group-item bg-transparent text-white border-bottom border-secondary py-3">
                                    <h5 className="m-0">⚡ Building responsive websites using HTML5, CSS3, BootStrap5, Javascript &amp; ReactJS</h5>
                                </motion.li>
                                <motion.li whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }} className="list-group-item bg-transparent text-white border-bottom border-secondary py-3">
                                    <h5 className="m-0">⚡ Creating application backend in PHP, Node</h5>
                                </motion.li>
                                <motion.li whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }} className="list-group-item bg-transparent text-white border-bottom border-secondary py-3">
                                    <h5 className="m-0">⚡ Designing highly attractive user interfaces for mobile and web applications</h5>
                                </motion.li>
                                <motion.li whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }} className="list-group-item bg-transparent text-white border-0 py-3">
                                    <h5 className="m-0">⚡ Creating the flow of application functionalities to optimize user experience</h5>
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
