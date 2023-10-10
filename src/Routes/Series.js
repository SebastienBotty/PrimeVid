import React, {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Slider from '../components/Slider/Slider';
import Slider2 from '../components/Slider2/Slider2'
import Navbar from '../components/Navbar/Navbar';


import './Series.css';

function Series() {
  const [isAtTop,setIsAtTop]= useState(true)

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

const genRrandom = (min, max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
   
    <div className="App">

      <div className= {isAtTop?"":'padded'}>
      <Navbar/>
      
      </div>
      <div className='Slider'>
      <Slider data='tv'/>
      </div>

      {genres.map(sliders=>{
        return (      
        <div className='Slider2'>
        <Slider2 name={sliders.name} value={sliders.value} data='tv' />
        </div>)
      })}

    </div>
  );
}

export default Series;
