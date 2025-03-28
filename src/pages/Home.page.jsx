import React, {useState} from 'react';

//Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

//Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
    const [recommendedMovies, setrecommendedMovies ] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

    return <>
    <HeroCarousel />

    <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1></h1>
    </div>
    </>;
    
};

export default DefaultLayoutHoc(HomePage);