"use client"
import { motion } from "framer-motion"
export default function page() {
  return (
    <div className="contact-container h-[full]">
      <motion.div
        initial={{ x: 0, y: 180, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="map-contact mx-2 my-1 flex justify-center overflow-hidden">
        <iframe className="map-main-contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15200.159127640898!2d83.32623394331047!3d17.7427646184675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944aa0bb2bdfb%3A0x49534b64de1b6899!2sMVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1694101465841!5m2!1sen!2sin" loading="lazy" width={1200} height={380}></iframe>
      </motion.div>
      <div className="main-contact mt-6 flex overflow-hidden flex-col lg:flex-row justify-center items-center">
        <div className="form-contact mx-2 my-1 flex flex-col items-center justify-center w-[380px] h-[450px] overflow-hidden">
          <form action="">
            <div className="inputfor-lgscreen">
              <div className="input-contact overflow-hidden  lg:flex lg:flex-col">
                <motion.input
                  initial={{ x: -180, y: -10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  type="text"
                  placeholder='Enter ur name'
                  className='input-contact-text bg-transparent p-2 text-white '
                />
                <motion.input
                  initial={{ x: 180, y: -10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  type="text"
                  placeholder='Mail'
                  className='input-contact-mail bg-transparent p-2 text-white'
                />
              </div>
            </div>
            <div className="text-area-contact">
              <motion.textarea
                initial={{ x: 10, y: 180, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                placeholder='Subject and Reason'
                className='input-contact-textarea bg-transparent p-2 text-white px-2'
                cols={38}
                rows={8}
              />
            </div>
            <div className="btn-contact p-4">
              <motion.button
                initial={{ x: 10, y: 180, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</motion.button>
            </div>

          </form>
        </div>
        <div className="Point-contact m-2 mx-2  flex flex-col items-center justify-center w-[380px] h-[450px] overflow-hidden">
          <motion.div
            initial={{ x: 180, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="head-points p-2">
            <h1>The Future of Healthcare: AI-Powered Diagnostics and Transformations</h1>
          </motion.div>
          <motion.div
            initial={{ x: 0, y: 180, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="info-points p-2">
            <p>lorem</p>
            <li>Precision Diagnosis: AI is revolutionizing healthcare by providing precise and early disease detection.</li>
            <li>Treatment Enhancement: This technology enhances treatment accuracy, leading to better patient outcomes.</li>
            <li>Lifesaving Potential: The potential for saving lives through AI-driven healthcare is limitless</li>
            <li>Personalized Care: Patients receive more personalized and effective treatment</li>
            <li>Efficiency Boost: AI streamlines medical processes</li>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
