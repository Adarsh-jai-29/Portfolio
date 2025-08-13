import { Download } from 'lucide-react';
import React from 'react';
import AdarshJaiswalResume from "./../assets/images/AdarshJaiswalResume.pdf";


export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
       
        
        {/* Main Card */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm bg-opacity-90">
          <div className="text-center text-white space-y-6">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Hello!, This side Adarsh Jaiswal, a small-town Web-developer. I am a final year 
              alumni of Uttaranchal University. My skills includes a solid foundation of 
              HTML, CSS, JavaScript and some Libraries like React, Tailwind, etc. I can comfortably code anything you think, 
              whether it's a mobile application or a web application. From Development 
              perspective, I have done many project using JavaScript for both mobile and 
              web. As of now, I am Sharping my skill in Node.js(backend).
            </p>
            
            <h4 className="text-xl md:text-2xl font-medium text-purple-200 mt-8">
              Have a good day 🙂
            </h4>
            
            <div className="flex justify-center items-center flex-col mt-8 space-y-4">
              <p className="text-lg text-purple-200">
                You can see my Resume from below:   
              </p>
              
              <a
                href={AdarshJaiswalResume}
                download="AdarshJaiswalResume.pdf"
                className="flex justify-center w-[30%] items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
            Resume&nbsp; <Download />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>
      <hr />
    </div>
  );
}