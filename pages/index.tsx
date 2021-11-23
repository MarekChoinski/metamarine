import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import {Timer} from '../components/Timer/Timer';
import styles from '../styles/Home.module.scss'
import p from '../utils/prefixImages';


const Home: NextPage = () => {
  return (
    <>
     <Navbar />
     <Timer date={Date.now() + 5000}/>
    </>
  )
}

export default Home
