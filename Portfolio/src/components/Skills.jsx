import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="align-element py-10 sm:py-20" id="skills">
      <SectionTitle text='tect stack'/>
      <div className="py-16 grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill)=>{
            return <SkillsCard key={skill.id} {...skill}/>
        })}
      </div>
    </section>
  );
};

export default Skills;
