import React, { useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import REview from '../Review/REview';
import Secondsection from '../Secondsection/Secondsection';

// import Services from '../Services/Services';

const Home = () => {
    
    return (
        <div >
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <Secondsection></Secondsection>
            <REview></REview>

        </div>
    );
};

export default Home;