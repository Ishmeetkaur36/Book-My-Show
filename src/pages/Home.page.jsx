import React, {useState} from 'react';

//Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

//Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
    const [recommendedMovies, setrecommendedMovies ] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

    return (
    <>
    <HeroCarousel />

    <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
            <EntertainmentCardSlider />
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider title ="Recommended Movies"
         subject="list of recommended movies" 
         posters={recommendedMovies}
         isDark={false}
         />
    </div>

    <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
            <div className='hidden md:flex'>
                    <img src=""
                    alt="Rupay" className="w-full h-full" />
            </div>
            <PosterSlider
            title="Premiers" 
            subject= "Brand new releases every Friday" 
            posters={premierMovies}
            isDark={true}
            />
        </div>
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8">
         <PosterSlider
            title="Premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
    </div>
    </>
    );   
};

export default DefaultLayoutHoc(HomePage);