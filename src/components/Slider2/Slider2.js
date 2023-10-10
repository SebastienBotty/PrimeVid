import React,{useEffect,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider2.css'
import { AddOutline,EllipsisVertical,Play } from 'react-ionicons';
import { Icon } from '@iconify/react';


export default function Slider2(props) {
    const{name,value,data} = props
    const [datas,setDatas]=useState([]);
    const [movieDetails, setMovieDetails]= useState([])
    
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTI4ZjdiNGI3MTkxY2IyMjdmOTE3MzAxNWNmZGM1MSIsInN1YiI6IjYzZmUwMmVjOTY1M2Y2MDA4NTNjODQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4Gf_DLdIWdZnCSnC6twMkHtgnKY89qNUraEcX-aoEo'
        }
    };

    const fetchData= ()=>{
        fetch('https://api.themoviedb.org/3/discover/'+data+'?api_key=4e28f7b4b7191cb227f9173015cfdc51&with_genres=' + value +"&page=1", options)
        .then(response => response.json())
        .then((response) => {
            setDatas(response.results)
            return datas;
        })
        .catch(err => console.error(err));
            };


    const getDetails= (id)=>{
      fetch('https://api.themoviedb.org/3/movie/'+id+ '?language=en-US', options)
      .then(response => response.json())
      .then(response => setMovieDetails(response))
      .catch(err => console.error(err));
    }

    const  minuteToString = (minutes) =>{
      if (isNaN(minutes) || minutes < 0) {
        return "Entrée invalide";
      }
    
      const heures = Math.floor(minutes / 60);
      const minutesRestantes = minutes % 60;
    
      if (heures === 0) {
        return `${minutesRestantes}min`;
      } else if (minutesRestantes === 0) {
        return `${heures}h`;
      } else {
        return `${heures}h${minutesRestantes}`;
      }
    }

    const getMovieDuration = (id)=>{
      
      getDetails(id)
      return minuteToString(movieDetails.runtime)

    }


    useEffect(()=>{
        const datas = fetchData()  
    },[])


    const getYear= (date)=>{
      if (props.data=="movie"){
        let year=""
        let x = 0
        while (x < 4){
          year+=date[x]
          x++
        }
        return year
      }
      return ''
    }

    
  return (
    <div className='Slider2'>
    <h3 className='title'> {name}</h3>
    
    <Carousel
    infiniteLoop={true}
    interval={5000}
    showStatus={false}
    showThumbs={false}
    dynamicHeight={false}
    selectedItem={3}
    transitionTime={500}
    centerMode={true}
    centerSlidePercentage={20}
    stopOnHover={true}
    showIndicators={false}

    >
        {datas.map(slide=>{
        return(<div key={datas.indexOf(slide)}>
          <div className='image'>
            <img  src={"https://image.tmdb.org/t/p/w500"+slide.poster_path} alt=""/>
          </div>
          <div className='overlay__movie'>
            <div className='icons'>
              <div className='left'>
                <Icon icon="carbon:play-filled" className='iconsLeft' width={55} height={55}/>
                <div className='Lecture'>
                  Lecture
                  </div>
              </div>
              
              <div className='right'>
              <Icon icon="ion:add-circle" width={50} height={50} className='iconsRight' />
              <Icon icon="ri:more-2-line" width={50} height={50} className='iconsRight'/>
              </div>
            </div>
            <br/>
            <h2 className='overlay__title'>{slide.original_title}</h2>
            <p className='overlay__text'>
              <b>
                {getYear(slide.release_date)} 

                </b>
                <br/>
                <br/>
              {slide.overview}
              </p>

          </div>
        </div>)
      })}
    </Carousel>
    </div>
  )
}

