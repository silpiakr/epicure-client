import React from 'react';
import Banner from '../Banner/Banner';
import TopFoods from '../TopFoods/TopFoods';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes';

const Home = () => {
    return (
        <div>
           <Banner />
           <TopFoods></TopFoods>
           <Testimonials></Testimonials>
           <FeaturedRecipes></FeaturedRecipes>
        </div>
    );
};

export default Home;