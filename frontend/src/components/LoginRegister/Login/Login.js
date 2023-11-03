import React,{useState} from 'react'
import { ArrowForwardOutline,CloseOutline } from 'react-ionicons'


import './Login.css'

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginData = {
    username:username,
    password:password
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const flipCard=()=>{
    props.handleFlip()
  }

  const closeModal = ()=>{
    props.toggleModal()
  }

  
  const connection= ()=>{
    console.log("data envoyé: " + username,password)
    fetch('http://localhost:3001/user/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Utilisez 'Content-Type' ici
      },
    body:JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(data=>console.log(data))
    .catch(err=>console.error("Erreur : " , err))
  }


  return (
    <div className="Login">
    <div className='Close'>
    <CloseOutline
      color='white'
      height="2.5rem"
      width="2.5rem"
      onClick={()=>closeModal()}
    />
    </div>

      <h1>Login</h1>
      <div className='inputWrap'>
        <input className='input' type='email' placeholder='Adresse mail' value={username}  onChange={handleUsernameChange}></input>
          
        <input className= 'input' id="password" type='password' placeholder='Mot de passe' value={password} onChange={handlePasswordChange}></input>
           
        <div className='btn-wrapper'>
        <button id="btn-login" className='btn' onClick={connection}>Se connecter</button>
        <button id="btn-register" className='btn' onClick={()=>flipCard()}><span id="btn-register-txt">S'inscrire </span>
          <div id='fleche'>
              <ArrowForwardOutline
                  color={'#00000'} 
                  height="1.5rem"
                  width="1.5rem"
              />
            </div>
        </button>
      </div>
      <a href="https://google.com">Mot de passé oublié?</a>
      </div>
    
    </div>
  )
}

export default Login