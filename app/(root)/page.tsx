"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in animation for container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Scale-up effect for welcome text
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Floating animation for buttons
    gsap.to(buttonRefs.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Rotating background animation
    gsap.to(bgRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 2,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-12 p-10 overflow-hidden">
      {/* Rotating Background Effect */}
      <div
        ref={bgRef}
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-purple-500 opacity-90 rounded-full blur-3xl"
      />

      <div ref={containerRef} className="relative z-10 text-center">
        {/* Welcome Message with Scale Effect */}
        <h1 ref={titleRef} className="text-5xl font-bold dark:text-white text-gray-900 leading-tight max-w-3xl mx-auto">
          Discover, Learn & Shop – All in One Place!
        </h1>
        <p className="text-lg dark:text-white text-gray-600 mt-4 max-w-xl mx-auto">
          Explore top products and insightful articles curated just for you.
        </p>

        {/* Login Button with Floating Animation */}
        <Link
          href="/signin"
          ref={(el) => el && buttonRefs.current.push(el)}
          className="bg-black w-40 h-12 rounded-full flex justify-center items-center text-white text-lg font-semibold transition hover:bg-gray-800 mt-6 shadow-lg"
        >
          Sign In
        </Link>

        {/* Products Button with Floating Animation */}
        <Link
          href="/products"
          ref={(el) => el && buttonRefs.current.push(el)}
          className="bg-blue-500 w-72 h-12 flex justify-center items-center text-white font-semibold rounded-full text-lg transition hover:bg-blue-700 mt-4 shadow-lg"
        >
          Browse Products
        </Link>
      </div>
     
    </div>
  );
}
