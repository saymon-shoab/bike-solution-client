import React from 'react';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <Contact></Contact>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;