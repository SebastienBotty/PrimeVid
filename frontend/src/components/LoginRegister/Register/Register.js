import React,{useState} from 'react'
import { ArrowBackOutline,CheckmarkCircleOutline } from 'react-ionicons'

import FlippedCard from '../FlippedCard/FlippedCard'



import './Register.css'

function Register(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck,setPasswordCheck] = useState('')
  const [samePassword, setSamePassword] = useState(true)
  const [email, setEmail] = useState('');
  const [passwordSecurity,setPasswordSecurity] = useState({
    lowercase:false,
    uppercase:false,
    number:false,
    symbol:false,
    length:false
  })


   

  const loginData = {
    username:username,
    email:email,
    password:password
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPassword(e.target.value)
  };
  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
    checkSamePassword(password,e.target.value)
  };


  const checkSamePassword= (password1,password2) =>{
    if (password1==password2){
      setSamePassword(true)
      return true
    }
    else {
      setSamePassword(false)
    }
  }

  const checkPassword = (password) =>{
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
        const hasLowercase = [...password].some(char => lowercaseLetters.includes(char));
        const hasUppercase = [...password].some(char => uppercaseLetters.includes(char));
        const hasNumber = [...password].some(char => numbers.includes(char));
        const hasSymbol = [...password].some(char => symbols.includes(char));
        const haslenght = password.length>=8? true:false
    
        setPasswordSecurity({
            lowercase:hasLowercase,
            uppercase:hasUppercase,
            number:hasNumber,
            symbol: hasSymbol,
            length:haslenght,
        })
    }

    const flipCard = (e)=>{
      e.preventDefault()
        props.handleFlip()
    }
  
    const isFormValid = () => {
      const areAllTrue = Object.values(passwordSecurity).every(value => value === true);

      if (username && password && email && samePassword && areAllTrue){
        console.log("Form validé")
        return true
      }
      else{
        console.log("form non valide")
        return false

      }
    }



  
  const inscription= (e)=>{
    e.preventDefault()
    if (isFormValid){
       console.log("data envoyé: " + username,email,password)
      fetch('http://localhost:3001/user/register',{
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
  }


  return (
    <div className="Register">
      <h1>Register</h1>
      <div className='inputWrap'>
        <form onSubmit={()=>console.log("yo")}>
        <input className='input' type='text' placeholder="Nom d'utilisateur" value={username}  onChange={handleUsernameChange} required></input>
        <input className='input' type='email' placeholder='Adresse mail' value={email}  onChange={handleEmailChange} required ></input>
          
        <input className= 'input' id="password" type='password' placeholder='Mot de passe' value={password} onChange={handlePasswordChange} required ></input>
        {!samePassword && <div id ="samePassword">Les mots de passe doivent être identiques</div>}
        <input className= 'input' id="passwordCheck" type='password' placeholder='Retaper Mot de passe' value={passwordCheck} onChange={handlePasswordCheckChange} required></input>
       
        <div id="check-password-security">
            { !(passwordSecurity.lowercase && passwordSecurity.uppercase && passwordSecurity.number && passwordSecurity.symbol && passwordSecurity.length) && 
            <span >Le mot de passe doit contenir au moins 8 caractères, une majuscule,une minuscule, un chiffre et un symbole.</span>}
            {password} - {passwordCheck}
        </div>
          

        <div className='btn-wrapper'>
            <button id="btn-login" className='btn' onClick={(e)=>flipCard(e)}>   
            <div id='fleche'>
                    <ArrowBackOutline
                        color={'#00000'} 
                        height="1.5rem"
                        width="1.5rem"
                    />
            </div>
            <span id="btn-loging-txt" >Se connecter</span>
               
            </button>
             <button type='submit'id="btn-register" className='btn'onClick={(e)=>inscription(e)}>S'inscrire</button>
        </div>
        </form>
      </div>
    
    </div>
  )
}

export default Register