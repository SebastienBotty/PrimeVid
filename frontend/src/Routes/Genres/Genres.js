import React, {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import Slider2 from '../../components/Slider2/Slider2'
import Footer from '../../components/Footer/Footer'

import './Genres.css'

function Genres() {

    const [isAtTop,setIsAtTop]= useState(true)
    const {genre} = useParams()

    const  genres=[{name:"Action", value:28},
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
    
    const getValue= (filmName)=>{
        for (let movie of genres){
            if (movie.name==filmName){
                return movie.value
            }
        }
    }

    const handleScroll = () => {
        if (window.scrollY === 0){
          setIsAtTop(true);
        }
        else{
          setIsAtTop(false)
        }
      };
    
      useEffect(() => {
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
        <div className= {isAtTop?"notPadded":'padded'}>
            <Navbar/>
        </div>

        <h1 className='bigTitle'>{genre}</h1>
        <h3 className='title'>Films</h3>
        <Slider2 name={genre} value={getValue(genre)} data='movie' />
        <h3 className='title'>Séries</h3>

        <Slider2 name={genre} value={getValue(genre)} data='tv' />
        <Footer/>
    </>
  )
}

export default Genres