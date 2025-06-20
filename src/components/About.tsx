import { motion } from 'framer-motion';



const About = () => {
    return (
        <>
            <div id = "About"></div>
            <div className='flex justify-items-center items-center p-[10%] h-screen'>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1 className="text-5xl p-5">Hi, I'm Logan. Welcome to my Portfolio.</h1>
            </motion.div>
                <p className = "text-xl p-5">I’m Logan Sundaram, an Electrical and Computer Engineering undergraduate at the University of Michigan with a 4.0 GPA. I have experience building and deploying full-stack applications using the MERN stack, and hosting them on Heroku, AWS, and Azure. My interests lie in artificial intelligence and quantum computing, especially at the intersection of emerging technologies and complex systems. This is my portfolio.</p>
            </div>
        </>
    )
}

export default About;