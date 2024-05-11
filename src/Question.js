import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function Question({title,info}) {

    const [showInfo, setShowInfo] = useState(false);




    return (
        <div>
            <div className="question">
                <header>
                    <h4>{title}</h4>
                    <button onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                    </button>
                </header>
                {
                    showInfo && <p>{info}</p>
                }
            </div>
        </div>
    )
}

export default Question
