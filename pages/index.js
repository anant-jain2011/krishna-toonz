import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/components/Carousel'
import { useEffect } from 'react';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  // useEffect(() => {
  //   const carousel = document.querySelector(".c-img");
  //   const imgs = document.querySelectorAll(".c-img img");

  //   //Buttons
  //   const prevBtn = document.querySelector("#prevBtn");
  //   const nextBtn = document.querySelector("#nextBtn");

  //   //Counter
  //   let counter = 1;
  //   const size = imgs[0].clientWidth;

  //   carousel.style.transform = "translateX(" + (-size * counter) + "px)";

  //   //Button Listeners
  //   nextBtn.addEventListener("click", () => {
  //     if (counter >= imgs.length - 1) return;
  //     carousel.style.transition = "transform 0.4s ease-in-out";
  //     counter++;
  //     carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  //   });

  //   prevBtn.addEventListener("click", () => {
  //     if (counter <= 0) return;
  //     carousel.style.transition = "transform 0.4s ease-in-out";
  //     counter--;
  //     carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  //   });

  //   carousel.addEventListener("transitionend", () => {
  //     if (imgs[counter].id === "lastClone") {
  //       carousel.style.transition = "none";
  //       counter = imgs.length - 2;
  //       carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  //     }
  //     if (imgs[counter].id === "firstClone") {
  //       carousel.style.transition = "none";
  //       counter = imgs.length - counter;
  //       carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  //     }
  //   });
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-4">

      <div className="flex-col items-center justify-center hidden">
        <h1 className="text-5xl font-bold text-center text-gray-800">Krishna Toonz</h1>
        <p className="text-xl text-center text-gray-600">A place where you can find all the cartoons you love.</p>
      </div>

      <Carousel duration={900} />

      <div className="flex flex-col items-center justify-center">
        <button className="bg-purple-800 text-white px-8 py-2 rounded-full shadow-lg">Explore</button>
      </div>

    </main>
  )
}
