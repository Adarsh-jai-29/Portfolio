// SkillCard component
export const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className="group cursor-pointer" title={skillName}>
      <div className="bg-white rounded-3xl w-[150px] m-auto p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-purple-300 hover:border-purple-500 min-h-[200px] flex flex-col items-center justify-center ">
        {/* Icon container */}
        <div className="flex justify-center mb-4">
          <img 
            src={skillIcon} 
            alt={skillName} 
            className="w-20 h-20 object-contain"
          />
        </div>
        
        {/* Skill name */}
        <h3 className="text-center text-gray-800 font-bold text-xl">
          {skillName}
        </h3>
      </div>
    </div>
  )
}
