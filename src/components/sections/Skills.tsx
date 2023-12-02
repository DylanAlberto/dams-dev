import React from 'react';
import Card from '../Card';
import PhotoCarousel from '../Carousel';
import awsLogo from '../../assets/AWS.jpg';
import reactLogo from '../../assets/react.png';
import github from '../../assets/github.png';
<PhotoCarousel photos={[awsLogo, reactLogo, github]} />
import { IconType } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaLightbulb } from 'react-icons/fa6';
import { FaUserPlus } from 'react-icons/fa6';

const skills: { icon: IconType; text: string }[] = [
  { icon: FaCheckCircle, text: 'Expertise in Code Review and Best Practices.' },
  { icon: FaUserTie, text: 'Leadership in Agile Management and Scrum.' },
  {
    icon: SiMaterialdesignicons,
    text: 'Proficiency in Architectural Design and System Optimization.',
  },
  { icon: FaLightbulb, text: 'Advanced Problem-Solving and Debugging Skills.' },
  { icon: FaUserPlus, text: 'Mentoring and Training Junior Developers.' },
];

function Skills() {
  return (
    <Card>
      <span className="text-3xl font-bold text-center">Skills</span>
      <div className="flex flex-col items-start gap-4">
        {skills.map((skill, index) => (
          <div key={index} className=" text-sm md:text-2xl font-bold mt-2 text-left flex gap-4">
            {<skill.icon className='w-8 h-8'/>}{skill.text}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Skills;
