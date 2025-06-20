import React from 'react'
import Square from './Square';
import * as motion from "motion/react-client"


const Skill = () => {
    return (
        <div id="Skills">
            <h2 className='text-xl underline'>Skills and Technologies</h2>
            <div className='flex justify-center'>
                <Square title="React" src="/react.svg"></Square>
                <Square title="JS" src="/js.png"></Square>
                <Square title="HTML" src="/html2.png"></Square>
                <Square title="CSS" src="/css.png"></Square>
                <Square title="C++" src="/c++.png"></Square>
                <Square title="Express" src="/express.png"></Square>
                <Square title="Node.js" src="/node.png"></Square>
                <Square title="Mongodb" src="/mongo.svg"></Square>
            </div>
        </div>
    )
}

export default Skill;