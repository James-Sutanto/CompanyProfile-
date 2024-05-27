import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
function Home() {
    const [heroCount, setHeroCount] = useState(0);

    const heroData = [
      { text1: "Engineering", text2: "Excellence" },
      { text1: "Designing A ", text2: "Better Tomorrow" },
      { text1: "We Are Here", text2: "To Serve You" },
    ];
  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar/>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  )
}

export default Home
