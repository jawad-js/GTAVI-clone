import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <Navbar />
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <main className="main w-full rotate-[-10deg] scale-[1.7]">
          {/* ===== Landing Section with GTA Text & Character ===== */}
          <section className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* Optional Rockstar Style Navbar/Logo in Scene */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </section>

          {/* ===== Character + Text Section ===== */}
          <section className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              {/* Image Side */}
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>

              {/* Text Side */}
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>

                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  In Leonida City, you're either chasing your next break or
                  running from your last mistake. There’s no pause button, no
                  rewinds — just grit, grind, and a loaded mag.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  From back-alley deals to rooftop escapes, every corner of this
                  city breathes danger and reward. Loyalty’s a gamble, and
                  silence can be louder than bullets.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Whether you ride solo or roll deep, this is your story to
                  write — with firepower, ambition, and no apologies. Welcome to
                  the other side of freedom.
                </p>
                <a
                  href="https://www.rockstargames.com/VI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white/10 text-2xl hover:bg-white/15 font-stretch-normal py-3 px-6 rounded-lg border border-white hover:scale-105 transition-all">
                    🎬 Watch Trailer
                  </button>
                </a>
              </div>
            </div>
          </section>

          <section className="relative w-full bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Main Landscape Image */}
              <div className="relative w-full md:w-2/3 shadow-xl">
                <img
                  src="public/jason_and_lucia.webp"
                  alt="GTA Main Visual"
                  className="rounded-lg w-full object-cover"
                />

                {/* Square 'Vice City' Postcard */}
                <img
                  src="public/Vice_City_Postcard.webp"
                  alt="Vice City"
                  className="absolute bottom-4 right-4 w-40 md:w-48 border-4 border-white shadow-lg rotate-3 rounded"
                />
              </div>

              {/* Portrait Image (Right side for larger screens) */}
              <div className="w-full md:w-1/3">
                <img
                  src="public/Boobie.webp"
                  alt="GTA Character"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="w-full bg-black text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-normal mb-4">
                Explore the World of GTA VI
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Discover a vast open world with stunning visuals and deep
                storytelling.
              </p>
              <a
                href="https://www.gamesradar.com/gta-6-guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-normal py-2 px-6 rounded-lg transition">
                  Learn More
                </button>
              </a>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </>
  );
}

export default App;
