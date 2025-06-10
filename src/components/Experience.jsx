// src/components/Experience.jsx
"use client"

import { cn } from "../lib/utils"
import { CircleHelp } from "lucide-react"

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="w-full max-w-md mx-auto py-8">
      <div className="relative">
        <div className="absolute left-8 top-6 bottom-0 w-1 bg-gray-600 rounded-full" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start rounded-lg p-4"
            >
              <div
                className={cn(
                  "absolute left-0 flex h-14 w-14 items-center justify-center rounded-full z-10 bg-white border-2 border-gray-200 shadow-lg",
                )}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="ml-20">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                    {exp.company}
                    <CircleHelp className="h-4 w-4 text-gray-400" />
                  </h3>
                  <span className="text-green-400 text-sm font-medium flex items-center gap-2">
                    {exp.current ? (
                      <>
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
                        Present
                      </>
                    ) : (
                      exp.date
                    )}
                  </span>
                </div>
                <p className="text-white text-base font-medium mt-1">{exp.role}</p>
                <p className="text-gray-300 text-sm mt-1">{exp.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}