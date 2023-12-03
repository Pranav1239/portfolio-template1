"use client"
import { AiOutlineArrowDown } from "react-icons/ai"
import Image from "next/image"
import Photo from "../assets/own-photo-main.jpeg"
import { motion } from "framer-motion"
export default function page() {
  return (
    <div className="head-text overflow-hidden flex justify-center">
      <div className="box wrapper">
        <motion.div
          className="head-text mt-4">
          <motion.h1
            initial={{ y: -10, x: -250, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl p-2 cursor-default font-bold text-white">Your Name.</motion.h1>
          <motion.p
            initial={{ x: -10, y: -180, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="cursor-default p-2 text-white shadow-slate-200 text-xl mt-2 font-mono text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos corporis culpa vel quisquam quam harum obcaecati sint explicabo repudiandae.</motion.p>
        </motion.div>
        <hr className="opacity-30 mt-2" />
        <div className="arrow-mainAbout flex h-24 justify-center mt-2">
          <p className="arrowmoving text-4xl"><AiOutlineArrowDown /></p>
        </div>
        <div className="mainAbout-about">
          <div className="About">

            <div className="box-about flex justify-center items-center lg:flex-row  ">
              <motion.div
                initial={{ x: -180, y: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="about-box-info text-left mx-5 my-5 lg:w-[420px]">
                <h1 className="text-4xl  cursor-default font-bold text-white mb-1">About <span className="head-text">:</span></h1>
                <p className="font-mono cursor-default text-base lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut consequuntur in perspiciatis aliquid facere mollitia nisi ratione incidunt. Facere unde beatae nulla quaerat earum ex in, animi quam non saepe? Molestiae voluptatem voluptates nemo adipisci.</p>
              </motion.div>
              <motion.div
                initial={{ x: 180, y: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="about-box-image flex justify-center mx-5 my-5 w-[420px]">
                <Image
                  src={Photo}
                  className="about-image rounded-2xl"
                  alt="blabla"
                  width={300}
                  height={80}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
