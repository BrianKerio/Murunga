import React from 'react'
import Title from '../layouts/Title'
import { projectOne} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Environmental & Social Due Diligence of Kenafric Confectionary Industry in Nairobi Kenya for Amethis Finance."
          des=" Associated with Freelance Consultant(Nov 2016 - Jan 2017)."
          src={projectOne}
        />
       
                
        
      </div>
    </section>
  );
}

export default Projects