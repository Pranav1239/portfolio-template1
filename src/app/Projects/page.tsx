"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import TestImage from "../assets/TestImage.jpg"
export default function page() {
    return (
        <div className="projects-container h-[full]">
            <div className="head-text mt-3 mb-5 flex justify-center">
                <motion.h1
                    initial={{ x: 0, y: -180, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    className="text-4xl cursor-default font-bold">Projects</motion.h1>
            </div>
            <div className="project-1 justify-center items-center flex flex-col lg:flex-row">
                <motion.div
                    initial={{ x: -180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-image mx-2 my-3 ">
                    <Image
                        src={TestImage}
                        alt="ImageNotFound"
                        className="project-image-main opacity-40"
                        width={300}
                        height={200}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-info text-center mx-2 my-3">
                    <h1 className="text-4xl font-bold opacity-30">Lorem, ipsum.</h1>
                    <p className="w-[420px] font-bold opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ab consequatur repellat corrupti, ea eos magnam fugiat tempora exercitationem</p>
                </motion.div>
            </div>
            <div className="line mt-4 mb-4 flex justify-center items-center  ">
                <hr className="w-[600px] opacity-30" />
            </div>
            <div className="project-2 justify-center items-center flex flex-col lg:flex-row">
                <motion.div
                    initial={{ x: -180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-info text-center mx-2 my-3">
                    <h1 className="text-4xl font-bold opacity-30">Lorem, ipsum.</h1>
                    <p className="w-[420px] font-bold opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ab consequatur repellat corrupti, ea eos magnam fugiat tempora exercitationem</p>
                </motion.div>
                <motion.div
                    initial={{ x: 180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-image mx-2 my-3 ">
                    <Image
                        src={TestImage}
                        alt="ImageNotFound"
                        className="project-image-main opacity-40"
                        width={300}
                        height={200}
                    />
                </motion.div>

            </div>
            <div className="line mt-4 mb-4 flex justify-center items-center  ">
                <hr className="w-[600px] opacity-30" />
            </div>
            <div className="project-3 justify-center items-center flex flex-col lg:flex-row">
                <motion.div
                    initial={{ x: -180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-image mx-2 my-3 ">
                    <Image
                        src={TestImage}
                        alt="ImageNotFound"
                        className="project-image-main opacity-40"
                        width={300}
                        height={200}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-info text-center mx-2 my-3">
                    <h1 className="text-4xl font-bold opacity-30">Lorem, ipsum.</h1>
                    <p className="w-[420px] font-bold opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ab consequatur repellat corrupti, ea eos magnam fugiat tempora exercitationem</p>
                </motion.div>
            </div>
            <div className="line mt-4 mb-4 flex justify-center items-center  ">
                <hr className="w-[600px] opacity-30" />
            </div>
            <div className="project-4 justify-center items-center flex flex-col lg:flex-row">
                <motion.div
                    initial={{ x: -180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-info text-center mx-2 my-3">
                    <h1 className="text-4xl font-bold opacity-30">Lorem, ipsum.</h1>
                    <p className="w-[420px] font-bold opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ab consequatur repellat corrupti, ea eos magnam fugiat tempora exercitationem</p>
                </motion.div>
                <motion.div
                    initial={{ x: 180, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.1 }}
                    className="project-image mx-2 my-3 ">
                    <Image
                        src={TestImage}
                        alt="ImageNotFound"
                        className="project-image-main opacity-40"
                        width={300}
                        height={200}
                    />
                </motion.div>
            </div>
        </div>
    )
}
