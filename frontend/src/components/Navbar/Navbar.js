import React,{useState} from 'react'
import "./Navbar.css"
import { SearchOutline, PersonCircleOutline, ChevronDownOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import FlippedCard from '../LoginRegister/FlippedCard/FlippedCard'

export default function Navbar() {

  const [modal,setModal] = useState(false)

  const toggleModal = ()=>{
    setModal(!modal)
    console.log(modal)
  }

  const genres=[{name:"Action", value:28},
                {name: "Aventure",value:12},
                {name:"Comédie",value:35},
                {name:"Comédie musicale", value:10402},
                {name:"Crime",value:80},
                {name:"Documentaire",value:99},
                {name:"Drame",value:18},
                {name:"Famille",value:10751},
                {name:"Fantastique",value:14},
                {name:"Guerre",value:10752},
                {name:"Historique",value:36},
                {name:"Horreur",value:27},
                {name:"Intrigue",value:9648},
                {name:"Romantique",value:10749},
                {name:"Sci-Fi",value:878},
                {name:"Thriller",value:53},
                {name:"Western",value:37}];
  const columns = 3;
  const rows = Math.ceil(genres.length / columns);

  const columnsData = Array.from({ length: columns }, (_, columnIndex) => {
    const start = columnIndex * rows;
    const end = start + rows;
    return genres.slice(start, end);
  });

    
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
        <div className='DropDownMenu'>
          <ul className='DropDownList'>
            <Link to="/Films" className='link'><li>Tout</li></Link>
            <Link to="/Series"className='link'><li>Acheter ou louer</li></Link>
            <Link to="/Films" className='link'><li>Chaine</li></Link>

          </ul>
        </div>
      </div>
      <div className ="case">Catégories
        <ChevronDownOutline className="fleche"
          color={'#00000'} 
          height="20px"
          width="20px"
        />

      <div className='DropDownMenu'>
          <ul className='DropDownList' id="Genres">
            {genres.map(genre=>{
              return(<Link to={"/Genres/"+genre.name} className='link'><li key={genre}>{genre.name}</li></Link>)
            })}
          </ul>
      </div>
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
        <div className ="case" onClick={()=>toggleModal()}> Sébastien Botty
            <PersonCircleOutline
              color={'blue'} 
              height="40px"
              width="40px"
            />
        </div>

    </div>
    {console.log(modal)}
    {modal &&    
        <div className='modal'>
        <div className='overlay-modal' onClick={()=>toggleModal()}></div>
        <div className='modal-content'><FlippedCard toggleModal={toggleModal}/></div>
    </div>}

    </body>
  )
}
