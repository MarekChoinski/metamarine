import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { Meta } from '../components/Meta/Meta';
import { Navbar } from '../components/Navbar/Navbar';
import Plus from '../components/Plus/Plus';
import {Timer} from '../components/Timer/Timer';
import { FaqSection } from '../sections/FaqSection/FaqSection';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { ShowcaseSection } from '../sections/ShowcaseSection/ShowcaseSection';
import styles from '../styles/Home.module.scss'
import p from '../utils/prefixImages';


const Home: NextPage = () => {
  const [q1, setQ1] = useState(false);
  console.log(q1);
  
  
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
