import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Meta } from '../components/Meta/Meta';
import { Navbar } from '../components/Navbar/Navbar';
import {Timer} from '../components/Timer/Timer';
import { FaqSection } from '../sections/FaqSection/FaqSection';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { ShowcaseSection } from '../sections/ShowcaseSection/ShowcaseSection';
import styles from '../styles/Home.module.scss'
import p from '../utils/prefixImages';


const Home: NextPage = () => {
  return (
    <>
    <Meta
    title="MetaMarine NFT"/>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <FaqSection />

    </>
  )
}

export default Home
