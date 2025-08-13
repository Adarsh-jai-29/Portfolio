import React from 'react'
import { Linkedin, MessageCircle, Github, Twitter, Mail } from 'lucide-react'
import ContactIcon from '../assets/images/contact.png'

export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/adarsh-jai-402365286',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/8127575765',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Github',
      icon: <Github size={20} />,
      href: 'https://github.com/Adarsh-jai-29',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/AdarshJai29',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Mail',
      icon: <Mail size={20} />,
      href: 'mailto:adarshjai29@gmail.com',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4" id="connect">
      <hr />
      <div className="max-w-6xl mt-3 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-light text-white mb-8">
            How Can We Connect...
          </h1>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={ContactIcon} 
                alt="Contact Network" 
                className="w-96 h-96 object-contain"
              />
              
              {/* Play button overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-8">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Links */}
          <div className="flex justify-center md:justify-start">
            <div className="space-y-4 w-full max-w-xs">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-between w-full px-6 py-4 rounded-2xl text-white font-medium
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30
                  `}
                >
                  <span className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}