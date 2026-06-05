"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const links = {
  naverCafe: "https://cafe.naver.com/bandiaudio",
  instagram: "https://instagram.com/",
  phone: "01037775290",
  map: "https://naver.me/F5a4k8RU",
};

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-white flex flex-col items-center justify-center px-5 py-10 overflow-hidden">

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div className="absolute w-[500px] h-[500px] bg-neutral-700 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <p className="mb-6 text-neutral-500 text-xs tracking-[0.35em] uppercase z-10">
        Vintage Hi-Fi Audio Shop
      </p>

      <div className="relative mb-6 group z-10">

        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-125 animate-pulse"></div>
        )}

        <div className={`relative w-72 h-72 rounded-full bg-neutral-900 border-[14px] border-neutral-700 flex items-center justify-center shadow-2xl overflow-hidden transition duration-500 group-hover:scale-105 ${isPlaying ? "animate-[spin_14s_linear_infinite]" : ""}`}>

          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>

          <div className="absolute inset-6 rounded-full border border-neutral-800"></div>
          <div className="absolute inset-12 rounded-full border border-neutral-800"></div>
          <div className="absolute inset-20 rounded-full border border-neutral-800"></div>
          <div className="absolute inset-28 rounded-full border border-neutral-800"></div>

          <div className="absolute top-10 left-16 w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-[2px] h-[2px] bg-white/20 rounded-full"></div>
          <div className="absolute top-28 right-24 w-[1px] h-[1px] bg-white/30 rounded-full"></div>

          <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center border border-neutral-600 z-10 shadow-inner">

            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">

              <Image
                src="/logo.png"
                alt="반디오디오 로고"
                width={55}
                height={55}
                className="object-cover rounded-full"
              />

            </div>

          </div>

        </div>

        <div className="absolute top-10 -right-12 w-40 h-[6px] bg-neutral-400 rounded-full rotate-45 shadow-lg"></div>

        <div className="absolute top-5 right-8 w-6 h-6 bg-neutral-500 rounded-full shadow-md"></div>

      </div>

      <h1 className="text-5xl font-extrabold mb-3 tracking-tight z-10">
        반디오디오
      </h1>

      <p className="text-neutral-300 mb-2 text-center text-lg z-10">
        오래된 음악의 감성을 다시 깨우다
      </p>

      <p className="text-neutral-500 text-sm mb-5 text-center tracking-[0.2em] uppercase z-10">
        Vintage Audio · Turntable · Hi-Fi
      </p>

      {isPlaying && (
        <p className="text-green-400 text-sm mb-6 animate-pulse z-10">
          ● NOW PLAYING
        </p>
      )}

      <div className="flex gap-3 mb-8 z-10">

        <button
          onClick={playMusic}
          className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition active:scale-95"
        >
          ▶ PLAY
        </button>

        <button
          onClick={pauseMusic}
          className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition active:scale-95"
        >
          ❚❚ PAUSE
        </button>

      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10">

        <a
          href={links.naverCafe}
          target="_blank"
          className="backdrop-blur-md bg-white/90 text-black py-4 rounded-2xl text-center font-semibold transition duration-200 active:scale-95 hover:bg-white shadow-xl"
        >
          🎵 네이버 카페
        </a>

        <a
  href="https://instagram.com/ban_di_odo"
  target="_blank"
  className="bg-neutral-800 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-700 transition"
>
  <Image
    src="/instagram.png"
    alt="instagram"
    width={28}
    height={28}
  />

  인스타그램
</a>

        <a
          href={`tel:${links.phone}`}
          className="backdrop-blur-md bg-white/10 border border-white/10 py-4 rounded-2xl text-center transition duration-200 active:scale-95 hover:bg-white/20 shadow-xl"
        >
          ☎ 전화 문의
        </a>

        <a
  href={`sms:${links.phone}?body=안녕하세요 반디오디오 청음 예약 문의드립니다.`}
  className="backdrop-blur-md bg-white/10 border border-white/10 py-4 rounded-2xl text-center transition duration-200 active:scale-95 hover:bg-white/20 shadow-xl"
>
  ☕ 방문 청음 예약
</a>

        <a
          href={links.map}
          target="_blank"
          className="backdrop-blur-md bg-white/10 border border-white/10 py-4 rounded-2xl text-center transition duration-200 active:scale-95 hover:bg-white/20 shadow-xl"
        >
          📍 오시는 길
        </a>

      </div>

      <div className="text-neutral-600 text-xs mt-8 text-center space-y-1">
  <p>BANDI AUDIO © 2026</p>

  <p>
    BGM: J.S. Bach - Goldberg Variations
  </p>

  <p>
    Performed by 임윤찬
  </p>

  <p>
    Purchased via Melon
  </p>
</div>

    </main>
  );
}