import React,{useEffect,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

export default function Slider(props) {
  const test = props.data
  const [datas,setDatas]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTI4ZjdiNGI3MTkxY2IyMjdmOTE3MzAxNWNmZGM1MSIsInN1YiI6IjYzZmUwMmVjOTY1M2Y2MDA4NTNjODQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4Gf_DLdIWdZnCSnC6twMkHtgnKY89qNUraEcX-aoEo'
    }
  };

  const fetchData= (props)=>{

    
    fetch('https://api.themoviedb.org/3/'+test+'/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then((response) => {
          setDatas(response.results)
          return datas;
      })
    .catch(err => console.error(err));
    };



  useEffect(()=>{
    const datas = fetchData()     ;
  },[])





  /*const genres=[{name:"Action", value:28},
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
  }*/



  return (
    <div className='Slider1'>
    <h3> Top tendances</h3>
    
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    interval={5000}
    showStatus={false}
    showThumbs={false}
    dynamicHeight={false}
    selectedItem={1}
    transitionTime={500}
    centerMode={true}
    centerSlidePercentage={33.33}
    stopOnHover={true}
    >

        {datas.map(slide=>{
          console.log(datas)
        return(<div key={datas.indexOf(slide)}>
          <img src={"https://image.tmdb.org/t/p/w500"+slide.poster_path} alt=""/>
          <div className='overlay'>

            <h2 className='overlay__title'>{slide.original_title}</h2>
            <p className='overlay__text'>{slide.overview}</p>
          </div>
        </div>)
      })}
    </Carousel>
    </div>
  )
}

