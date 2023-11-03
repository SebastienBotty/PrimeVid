import React,{useState} from 'react'
import { ArrowBackOutline,CheckmarkCircleOutline } from 'react-ionicons'

import FlippedCard from '../FlippedCard/FlippedCard'



import './Register.css'

function Register(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck,setPasswordCheck] = useState('')
  const [email, setEmail] = useState('');
  const [samePassword,setSamePassword] = useState(true);
  const [passwordSecurity,setPasswordSecurity] = useState({
    lowercase:false,
    uppercase:false,
    number:false,
    symbol:false,
  })


   

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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const checkSamePassword= (password1,password2) =>{
   return password1 ==password2
  }

  function checkPassword(password) {
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
        const hasLowercase = [...password].some(char => lowercaseLetters.includes(char));
        const hasUppercase = [...password].some(char => uppercaseLetters.includes(char));
        const hasNumber = [...password].some(char => numbers.includes(char));
        const hasSymbol = [...password].some(char => symbols.includes(char));
    
        setPasswordSecurity({
            lowercase:hasLowercase,
            uppercase:hasUppercase,
            number:hasNumber,
            symbol: hasSymbol,
        })
    }

    const flipCard = ()=>{
        props.handleFlip()
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
    <div className="Register">
      <h1>Register</h1>
      <div className='inputWrap'>
        
        <input className='input' type='text' placeholder="Nom d'utilisateur" value={username}  onChange={handleUsernameChange}></input>
        <input className='input' type='email' placeholder='Adresse mail' value={email}  onChange={handleEmailChange}></input>
          
        <input className= 'input' id="password" type='password' placeholder='Mot de passe' value={password} onChange={handlePasswordChange}></input>
        <input className= 'input' id="passwordCheck" type='password' placeholder='Retaper Mot de passe' value={passwordCheck} onChange={handlePasswordChange}></input>
        <div id="check-password-security">
            { !(passwordSecurity.lowercase && passwordSecurity.uppercase && passwordSecurity.number && passwordSecurity.symbol) && 
            <span>Le mot de passe doit contenir au moins une majuscule,une minuscule, un chiffre et un symbole.</span>}
        </div>
          

        <div className='btn-wrapper'>
            <button id="btn-login" className='btn' onClick={connection}>   
            <div id='fleche'>
                    <ArrowBackOutline
                        color={'#00000'} 
                        height="1.5rem"
                        width="1.5rem"
                    />
            </div>
            <span id="btn-loging-txt" onClick={()=>flipCard()}>Se connecter</span>
               
            </button>
             <button id="btn-register" className='btn'>S'inscrire</button>
        </div>
      </div>
    
    </div>
  )
}

export default Register