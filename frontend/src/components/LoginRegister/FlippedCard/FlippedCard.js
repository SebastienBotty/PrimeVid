import React,{useState} from 'react'

import Login from '../Login/Login'
import Register from '../Register/Register'

import './FlippedCard.css'

function FlippedCard(props) {
 
    const [isFlipped,setFlipped] = useState(false)
    
    const handleFlip= ()=>{
        setFlipped(!isFlipped);
    };

    const frontCard= <Login handleFlip={handleFlip} toggleModal={props.toggleModal}/>
    const BackCard = <Register handleFlip={handleFlip} toggleModal={props.toggleModal}/>
  return (
    <div
    className={`flip-card ${
        isFlipped ? "flipped" : ""
    }`}
>
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <div className="card-content">
                {frontCard}
            </div>
        </div>
        <div className="flip-card-back">
            <div className="card-content">  
                {BackCard}
            </div>
          
        </div>
    </div>
</div>
  )
}

export default FlippedCard