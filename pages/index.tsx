import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import {Timer} from '../components/Timer/Timer';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { ShowcaseSection } from '../sections/ShowcaseSection/ShowcaseSection';
import styles from '../styles/Home.module.scss'
import p from '../utils/prefixImages';


const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
    </>
  )
}

export default Home
