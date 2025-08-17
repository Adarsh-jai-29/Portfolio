import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'

const experienceData = [
  {
    type: "Internship",
    title: "Software developer Intern at Prodesk It ",
    duration: "June 2025 - July 2025 ( 2 mons )",
    achievements: [
      "Created dynamic and responsive user interfaces with React.js and Tailwind CSS.",
      "Developed and enhanced web applications using React.",
      "Collaborated with cross-functional teams to understand project requirements and deliver robust features.",
      "Utilized Git for version control and participated in code reviews to maintain high code quality.",
      "Assisted in debugging and troubleshooting issues to ensure smooth application performance.",
      "Engaged in continuous learning to stay updated with the latest industry trends and technologies",
    ],
    image: "/api/placeholder/400/300" // Placeholder image
  },
  // Add more experiences here 
]

export default function TechnicalExperience() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experienceData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experienceData.length) % experienceData.length)
  }

  const currentExperience = experienceData[currentIndex]

  return (
    <div className="min-h-screen py-16 px-4">
       <h1 className="flex justify-center text-white text-2xl md:text-2xl tracking-wide font-light mb-8 text-left">
          My&nbsp;<div className='text-[blueviolet] '>Technical&nbsp;</div>Experience
        </h1>
      <div className="max-w-7xl mx-auto">
        
        {/* Experience Card */}
        <div className="bg-[blueviolet] text-[white] rounded-3xl shadow-xl overflow-hidden">
          <div className="grid gap-0">
            
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              {/* Type Badge */}
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {currentExperience.type}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-bold  mb-4 leading-tight">
                {currentExperience.title}
              </h2>
              
              {/* Duration */}
              <p className=" font-medium mb-8 text-lg">
                {currentExperience.duration}
              </p>
              
              {/* Achievements */}
              <div className="space-y-4">
                {currentExperience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className=" leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {experienceData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 ' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Send Mail Button */}
        <div className="fixed bottom-8 right-8 z-1">
          <a
            href="mailto:adarshjai29@gmail.com"
            className="flex items-center gap-2 backdrop-blur-2xl hover:bg-[blueviolet] border text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Send Mail
          </a>
        </div>
        
      </div>
      <hr />
    </div>
    
  )
}