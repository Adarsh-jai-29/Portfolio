import React from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

export const Project = ({ 
  title, 
  description, 
  techStack, 
  image, 
  liveUrl, 
  githubUrl,
  gradient = "from-purple-500 to-pink-500"
}) => {
  return (
    <div className="max-w-[380px] group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden border border-purple-500/20 hover:border-purple-500/40 flex flex-col p-1 sm:p-4 mt-2 m-auto ">
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-60 overflow-hidden rounded-2xl ">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col !m-2">
        {/* Title with colored dot */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors line-clamp-1">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3 flex-1 !my-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="my-4">
          <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">Tech Stack:</p>
          <p className="text-xs sm:text-sm text-gray-200 font-medium line-clamp-2">{techStack}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex !py-2 items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="hidden sm:inline">View Project</span>
              <span className="sm:hidden">View</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-purple-400 text-purple-400 px-3 py-2 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-medium text-xs sm:text-sm"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};