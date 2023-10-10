import React from 'react'
import "./Navbar.css"
import { SearchOutline, PersonCircleOutline, ChevronDownOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
  return (
    <body className='navBar'>
    <a href="/" className='siteTitle'>Prime Video </a>
    <div className='list'>
      <div className='case'>Accueil 
          <ChevronDownOutline className="fleche"
          color={'#00000'} 
          height="20px"
          width="20px"
        />
        <div className='DropDownMenu'>
          <ul className='DropDownList'>
            <Link to="/Films" className='link'><li>Films</li></Link>
            <Link to="/Series"className='link'><li>Series</li></Link>
          </ul>
        </div>
      </div>
      <div className='case'>Boutique
        <ChevronDownOutline className="fleche"
          color={'#00000'} 
          height="20px"
          width="20px"
        />
      </div>
      <div className ="case">Catégories
        <ChevronDownOutline className="fleche"
          color={'#00000'} 
          height="20px"
          width="20px"
        />
      </div>
      <div className ="case"> Mon espace
        <ChevronDownOutline className="fleche"
          color={'#00000'} 
          height="20px"
          width="20px"
        />
      </div>
    </div>
      
    <div className='list'>
        <div className ="case">
          <SearchOutline
            color={'white'} 
            height="30px"
            width="30px"
        />
        </div>
        <div className ="case"> Sébastien Botty
            <PersonCircleOutline
              color={'blue'} 
              height="40px"
              width="40px"
            />
        </div>

    </div>


    </body>
  )
}
