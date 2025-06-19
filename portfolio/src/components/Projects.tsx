import React from 'react'
import Project from './Project'

const Lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, asperiores natus? Quam, velit modi ad aspernatur tempora enim voluptates ex veniam, eum, autem deleniti optio repellat quos rem atque accusantium."

const Projects = () => {
    return (
        <div>
            <h1 id="Projects" className='text-3xl underline p-5'>Projects</h1>
            <div>
                <Project title="Project title+Props" description={Lorem} src="https://placehold.co/150x150"></Project>
                <Project title="Project title+Props" description={Lorem} src="https://placehold.co/150x150"></Project>
                <Project title="Project title+Props" description={Lorem} src="https://placehold.co/150x150"></Project>
            </div>
        </div>
    )
}

export default Projects