import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import {Timer} from '../components/Timer/Timer';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import styles from '../styles/Home.module.scss'
import p from '../utils/prefixImages';


const Home: NextPage = () => {
  return (
    <>
     <Navbar />
     <HeroSection />
     <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos soluta ratione consequuntur earum, dolor saepe veritatis accusamus minus ducimus incidunt possimus reprehenderit cum quas, molestiae fugit officiis odit exercitationem dignissimos, architecto rerum voluptas molestias optio eum? Maiores corporis odio reiciendis doloribus voluptatum ipsa error atque dolorem, nemo, sequi debitis.
     </p>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ad vero reprehenderit ipsam quam pariatur sint voluptatum ipsum consequuntur. Soluta excepturi fugit sit debitis, dolorem atque laboriosam. Blanditiis, libero.</p>
    </>
  )
}

export default Home
