import { NextPage } from "next";
import React from "react";
import { Meta } from "../components/Meta/Meta";
import { Navbar } from "../components/Navbar/Navbar";
import { AuthorsSection } from "../sections/AuthorsSection/AuthorsSection";
import { FaqSection } from "../sections/FaqSection/FaqSection";
import { FooterSection } from "../sections/FooterSection/FooterSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import { ShowcaseSection } from "../sections/ShowcaseSection/ShowcaseSection";

const Home: NextPage = () => {
  return (
    <>
      <Meta title="MetaMarine NFT" />
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <AuthorsSection />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default Home;
