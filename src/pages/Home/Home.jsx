import React from 'react';
import Banner from '../Banner/Banner';
// import TopFoods from '../TopFoods/TopFoods';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes';
import Footer from '../Footer/Footer';
import TopSelling from '../AllFoods/TopSelling/TopSelling';

const Home = () => {
    return (
        <div>
           <Banner />
           {/* <TopFoods></TopFoods> */}
           <TopSelling></TopSelling>
           <Testimonials></Testimonials>
           <FeaturedRecipes></FeaturedRecipes>
           <Footer></Footer>
        </div>
    );
};

export default Home;