"use client"
import { Typewriter } from 'react-simple-typewriter'

export default function Typewriterr() {
  return (
    <div>
                    <Typewriter
                       words={
                        [
                          "Web Developer",
                          "App Developer",
                          "Propmt Engineer",
                          "Learning Web3"
                        ]
                       } 
                       typeSpeed={70}  
                       loop={true}  
                  />
    </div>
  )
}
