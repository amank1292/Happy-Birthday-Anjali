'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Heart, Disc3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function MusicPlayer({ isPlaying, onTogglePlay, audioRef }: MusicPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const onEnded = () => {
      // Loop playback gently
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioRef]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      setIsMuted(newVol === 0);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl px-2">
      <motion.div
        layout
        className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#140611]/85 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.65),0_0_30px_rgba(244,63,94,0.18)] text-rose-50"
      >
        {/* Subtle Ambient Player Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-rose-500/10 blur-xl pointer-events-none" />

        {/* Collapsed view for small mobile screen option */}
        <div className="relative px-3.5 py-2.5 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Album artwork / Animated Vinyl */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br from-rose-900 to-amber-900 border border-white/15 flex items-center justify-center">
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full flex items-center justify-center"
              >
                <Disc3 className="w-8 h-8 text-rose-300/80" />
              </motion.div>
              {/* Center dot */}
              <div className="absolute w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-950" />
            </div>

            {/* Song info */}
            <div className="min-w-0 flex flex-col">
              <div className="flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-rose-400 animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide text-white truncate">
                  Yeh Raaten Yeh Mausam
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-rose-300/70 truncate font-light flex items-center gap-1">
                A little song for you <Heart className="w-2.5 h-2.5 inline text-rose-400 fill-rose-400" />
              </span>
            </div>
          </div>

          {/* Center Play/Pause button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onTogglePlay}
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
              className="relative group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.55)] transition-all transform active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Right Volume & Time controls (hidden on very small mobile, visible on sm+) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            {/* Time display */}
            <span className="text-[11px] font-mono text-rose-200/70 tracking-wider">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Volume */}
            <div className="flex items-center gap-1.5 pl-1 border-l border-white/10">
              <button
                onClick={toggleMute}
                className="text-rose-300/80 hover:text-white transition-colors p-1"
                aria-label="Toggle mute"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-400 hover:accent-rose-300 transition-all"
                aria-label="Volume slider"
              />
            </div>
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="relative w-full px-4 pb-2 pt-0.5">
          <div className="relative w-full flex items-center group">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-rose-400 group-hover:h-1.5 transition-all"
              aria-label="Song progress"
            />
          </div>
          {/* Mobile time display beneath scrubber */}
          <div className="flex sm:hidden justify-between items-center text-[10px] font-mono text-rose-200/60 pt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
