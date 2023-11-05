"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/favicon.png";
import {AiFillHome} from "react-icons/ai"
import {AiFillProject} from "react-icons/ai"
import {AiFillMessage} from "react-icons/ai"
import {FaSignal} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion"
export default function Navbar() {
  return (
    <motion.div
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: "0.9" }}
    className="Navbar relative flex flex-row items-center justify-evenly">
      <div className="nav-image">
        <Link href="https://github.com/Pranav1239" className="mx-6 cursor-default">
          <Image src={Logo} alt="ImageNotFound" width={35} height={18} />
        </Link>
      </div>
      <div className="nav-links flex flex-row">
        <Link
          className="px-4 font-bold text-white hover:underline"
          href={"/"}
        >
          <AiFillHome />
        </Link>
        <Link
          className="px-4 font-bold text-white hover:underline"
          href={"/Skills"}
        >
          <FaSignal />
        </Link>

        <Link
          className="px-4 font-bold text-white hover:underline"
          href={"/Projects"}
        >
            <AiFillProject />
        </Link>
        <Link
          className="px-4 font-bold text-white hover:underline"
          href={"/Contact"}
        >
          <AiFillMessage />
        </Link>
        <Link
          className="px-4 font-bold text-white hover:underline"
          href={"/About"}
        >
          <FaUser />
        </Link>
      </div>
    </motion.div>
  );
}
