'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BirthdayCards from '@/components/BirthdayCards';
import SpecialMoments from '@/components/SpecialMoments';
import PhotoGallery from '@/components/PhotoGallery';
import BirthdayMessage from '@/components/BirthdayMessage';
import SecretMessage from '@/components/SecretMessage';
import FinalSection from '@/components/FinalSection';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';
import Balloons from '@/components/Balloons';
import AmbientLights from '@/components/AmbientLights';
import EntranceScreen from '@/components/EntranceScreen';
import { getAssetPath } from '@/lib/utils';

export default function Home() {
  const [isEntranceOpen, setIsEntranceOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnterExperience = () => {
    setIsEntranceOpen(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Audio autoplay prevented or waiting user interaction:', err);
      });
    }
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Playback error:', err);
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080306] overflow-x-hidden text-rose-50 selection:bg-rose-500/30 selection:text-rose-200">
      
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={getAssetPath('/audio/yeh-raaten-yeh-mausam.mp3')}
        preload="auto"
      />

      {/* Cinematic Entrance Screen */}
      <EntranceScreen
        isOpen={isEntranceOpen}
        onEnter={handleEnterExperience}
      />

      {/* Ambient Lighting & Particles */}
      <AmbientLights />
      <FloatingHearts />
      <Balloons />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <BirthdayCards />
        <SpecialMoments />
        <PhotoGallery />
        <BirthdayMessage />
        <SecretMessage />
        <FinalSection />
      </main>

      {/* Floating Music Player */}
      <MusicPlayer
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        audioRef={audioRef}
      />
    </div>
  );
}
