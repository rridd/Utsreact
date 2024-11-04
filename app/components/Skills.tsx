import React from 'react';

const skillsData = [
    { name: 'Editing', percentage: 75 },
    { name: 'Coding', percentage: 65 },
    { name: 'Gaming', percentage: 80 },
    { name: 'Sport', percentage: 85 },

];

const Skills = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="bg-black p-6 rounded-lg shadow-md">
                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <span className="font-semibold">{skill.name}</span>
                        <div className="relative pt-1">
                            <div className="flex items-center justify-between">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`bg-blue-600 h-2 rounded-full`}
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                                <span className="ml-2">{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
