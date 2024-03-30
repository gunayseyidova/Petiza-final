import React from 'react'
import {Helmet} from 'react-helmet';
import CatSection2 from './CatSection2';
import CatSection from './CatSection';
import DogSection from './DogSection';
import Collection from './Collection';


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home - Petiza</title>
    </Helmet>
    <CatSection/>
    <CatSection2/>
    <DogSection/>
    <Collection/>
    </>
  )
}

export default Home