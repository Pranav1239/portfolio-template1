"use client"

import Image from "next/image";
import Link from "next/link";
//assets
import Photo from "../../assets/own-photo-main.jpeg"
import Project from "../../assets/Projects.png"
import Contact from "../../assets/Contact.png"
import Skills from "../../assets/Skills-box.png"
import Coder from "../../assets/coder.gif"
import { FaArrowCircleRight } from "react-icons/fa"
import Typewriterr from "../useclientFIles/Typewriterr";
import { motion } from "framer-motion";
export default function HeroContainers() {
    return (
        <section className="mt-16">
            <div className="items-1">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: "0.9" }}
                    className="box-1-hero flex flex-col gap-10"
                >
                    <motion.div
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="image-box-1 flex justify-center mt-12"
                    >
                        <Image
                            src={Coder}
                            className="image-box-1-main"
                            alt="ImageNotFound"
                            width={200}
                            height={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}

                        className="info-box-1"
                    >
                        <h1 className="font-semibold opacity-50 text-center mt-2">LOVE CODING</h1>
                        <h1 className="font-semibold opacity-50 text-center mt-1">EAT SLEEP CODE REPEAT = MY LIFE</h1>                <h1 className="font-semibold opacity-50 text-center mt-1">HAVE A GREAT DAY</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: "0.9" }}
                    className="box-2-hero flex flex-row justify-center items-center">
                    <div className="image-box-2">
                        <Image
                            src={Project}
                            alt="ImageNotFound"
                            width={100}
                            height={100}
                        />
                    </div>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="info-box-2 mx-2">
                        <h1 className="font-semibold opacity-50 text-center mt-2">CHECK MY</h1>
                        <h1 className="font-semibold opacity-50 text-center mt-1">LIVE PROJECTS NOW</h1>
                        <Link href={"/About"} className="flex justify-evenly items-center mt-2">
                            <p className="p-2 font-normal text-xl">Projects</p>
                            <p className="text-2xl"><FaArrowCircleRight /></p>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: "0.9" }}
                    className="box-3-hero flex flex-row justify-center items-center">
                    <div className="image-box-3">
                        <Image
                            src={Skills}
                            alt="ImageNotFound"
                            width={100}
                            height={100}
                        />
                    </div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="info-box3">
                        <h1 className="font-semibold opacity-50 text-center mt-2">
                            WANNA SEE MY SKILLS?
                        </h1>
                        <h1 className="font-semibold opacity-50 text-center mt-1">
                            CHECK WHAT I KNOW
                        </h1>
                        <Link href={"/Skills"} className="flex justify-evenly items-center mt-2">
                            <p className="p-2 font-normal text-xl">Skills</p>
                            <p className="text-2xl"><FaArrowCircleRight /></p>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <div className="items-2">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: "0.9" }}
                    className="box-11-hero">
                    <div className="image-box-1 flex justify-center mt-12">
                        <Image
                            src={Photo}
                            className="image-box-1-main"
                            alt="ImageNotFound"
                            width={200}
                            height={100}
                        />
                    </div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="info-box-1">
                        <h1 className="font-semibold opacity-50 text-center mt-2">WANNA KNOW</h1>
                        <h1 className="font-semibold opacity-50 text-center mt-1">MORE ABOUT ME</h1>
                        <Link href={"/About"} className="flex justify-evenly items-center mt-2">
                            <p className="p-2 font-normal text-xl">Credentials</p>
                            <p className="text-2xl"><FaArrowCircleRight /></p>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className="item-2-extend">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="box-1-extend flex items-center justify-center">
                        <h1 className="text-center text-2xl font-bold lg:text-2xl opacity-50">
                            <Typewriterr />
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: "0.9" }}
                        className="box-2-extend">
                        <div className="image-box-1 flex justify-center mt-6">
                            <Image
                                src={Contact}
                                className="image-box-1-main"
                                alt="ImageNotFound"
                                width={200}
                                height={100}
                            />
                        </div>
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: "0.9" }}
                            className="info-box-1">
                            <h1 className="font-semibold opacity-50 text-center mt-2">
                                FEEL FREE TO
                            </h1>
                            <h1 className="font-semibold opacity-50 text-center mt-1">CONTACT ME</h1>
                            <Link href={"/Contact"} className="flex justify-evenly items-center mt-2">
                                <p className="p-2 font-normal text-xl">Contact</p>
                                <p className="text-2xl"><FaArrowCircleRight /></p>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>)
}
