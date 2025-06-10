"use client"

import React from "react"
import ExperienceTimeline from "../components/Experience"
import contactusLogo from "../assets/contactus_logo.png"
import mindshakerLogo from "../assets/mindshaker_logo.jpg"

const experiences = [
  {
    company: "ContactUS",
    role: "Frontend Developer",
    type: "Full-Time",
    logo: contactusLogo,
    date: "Jan 2024 – Present",
    current: true,
  },
  {
    company: "MindShaker",
    role: "Fullstack Internship",
    type: "Full-Time",
    logo: mindshakerLogo,
    date: "Mar 2023 – Jul 2023",
    current: false,
  },
]

export default function Work() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Experience</h1>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  )
}