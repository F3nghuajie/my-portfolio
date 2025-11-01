import React from 'react';
import { skillsData } from '../../data';

const Skills = () => (
    <section className="flex scroll-mt-20 flex-col py-10" id="skills">
        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 sm:text-3xl">My Tech Stack</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {skillsData.map((skill) => (
                 <div key={skill.name} className="flex flex-1 items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-transform hover:scale-105">
                     <span className="material-symbols-outlined text-primary text-2xl"> {skill.icon} </span>
                     <h3 className="text-white text-base font-bold leading-tight">{skill.name}</h3>
                 </div>
            ))}
        </div>
    </section>
);

export default Skills;
