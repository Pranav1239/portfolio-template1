"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default  function page() {

    const techskills = [
        {
            id: "1",
            name: "Html",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        },

        {
            id: "2",
            name: "Css",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        },

        {
            id: "3",
            name: "Tailwind",
            image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        },

        {
            id: "4",
            name: "Sass",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
        },

        {
            id: "5",
            name: "Boostrap",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        },

        {
            id: "6",
            name: "FireBase",
            image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
        },

        {
            id: "7",
            name: "Git",
            image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        },

        // {
        //     id : "8",
        //     name : "Socketio",
        //     image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/900px-Socket-io.svg.png?20200308235956"
        // },

        // {
        //     id : "9",
        //     name : "Strapi",
        //     image : "/public/Skills/Strapi.png"
        // },

        {
            id: "10",
            name: "javaScript",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },

        {
            id: "11",
            name: "TypeScript",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },

        {
            id: "12",
            name: "NodeJs",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        },

        {
            id: "13",
            name: "Expressjs",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        },

        {
            id: "14",
            name: "Mongo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        },

        {
            id: "15",
            name: "React",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        },

        {
            id: "16",
            name: "Nextjs",
            image: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
        },
    ]
    return (
        <div className="skills-container h-[full]">
            <div className="">
            </div>
            <div className="main-skills flex justify-center">
                <div className="skills-box">
                    <motion.div
                        initial={{ x: 0, y: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className=" head-text text-center text-skills">
                        <h1 className="text-6xl cursor-default font-extrabold">Skills</h1>
                    </motion.div>
                    <div className="AllSkills-box w-full grid grid-cols-3 lg:grid-cols-6 gap-4 text-center py-8 ">
                        {
                            techskills.map((skill) => {
                                return (
                                    <motion.div
                                        initial={{ x: 0, y: 150, opacity: 0 }}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        key={skill.id} className="bg-transparent shadow-lg rounded-lg mx-4 p-4">
                                        <div className="image-skill flex justify-center items-center">
                                            <Image
                                                src={skill.image}
                                                alt="ImageNotFound"
                                                width={50}
                                                className=""
                                                height={50}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h2 className="text-xs lg:text-xl font-semibold mb-2">{skill.name}</h2>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
