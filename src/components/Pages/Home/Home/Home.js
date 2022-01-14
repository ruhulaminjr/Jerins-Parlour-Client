import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Showcase/>
            <Testimonials/>
        </div>
    );
};

export default Home;