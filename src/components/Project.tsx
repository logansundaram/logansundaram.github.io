import React, { type JSX } from "react";

interface ProjectCardProps {
    title : string;
    description : string;
    src : string;
}

const Project = ({title, description, src,} : ProjectCardProps) : JSX.Element => {
    return (
    <div className="p-5 flex justify-center" id="Project">
        <img src={src} alt="Project preview" className="rounded-lg shadow-md w-full max-w-md"/>
        <div>
            <h2 className="p-5 text-xl">{title}</h2>
            <p>{description}</p>
            <p>Skills:</p>
            <a href="https://example.com" className="text-sky-900 hover:underline font-medium transition duration-300" target="_blank" rel="noopener noreferrer">This is the link to the live demo of the project</a>
        </div>
    </div>
    )
}

export default Project;