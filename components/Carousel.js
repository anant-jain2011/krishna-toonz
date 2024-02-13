import React, { useEffect } from 'react'

const Carousel = (duration) => {

    useEffect(() => {
        // imgs[0].clientWidth;
        const imgs = document.querySelectorAll("#c-img");
        
        //Buttons
        const prevBtn = document.querySelector("#prevBtn");
        const nextBtn = document.querySelector("#nextBtn");

        //Counter
        let counter = 0;
        let size = imgs[0].clientWidth;

        console.log(size, counter);
        imgs[0].style.marginLeft = (-size * counter) + "px";

        //Button Listeners
        nextBtn.addEventListener("click", () => {
            counter++;
            if (counter == 4) counter = 0;

            imgs[0].style.marginLeft = (-size * counter) + "px";
            console.log(size, counter);

            size = imgs[counter].clientWidth;

            imgs[0].style.transition = "all " + duration + " 1.5s ease";
        });

        prevBtn.addEventListener("click", () => {
            counter--;
            if (counter < 0) counter = 3;

            imgs[0].style.marginLeft = (-size * counter) + "px";
            console.log(size, counter);

            size = imgs[counter].clientWidth;

            imgs[0].style.transition = "all " + duration + " 1.5s ease";
        });

        // carousel.addEventListener("transitionend", () => {
        //     if (imgs[counter].id === "lastClone") {
        //         imgs[0].transition = "none";
        //         counter = imgs.length - 2;
        //         imgs[0].transform = "translateX(" + (-size * counter) + "px)";
        //     }
        //     if (imgs[counter].id === "firstClone") {
        //         imgs[0].transition = "none";
        //         counter = imgs.length - counter;
        //         imgs[0].transform = "translateX(" + (-size * counter) + "px)";
        //     }
        // });
    }, []);

    return (
        <div className="carousel w-full flex justify-center h-96 border border-black">
            <div className="flex overflow-hidden w-[48rem] relative">
                <span id="prevBtn" className="absolute left-0 top-0 bottom-0 w-1/6 bg-gray-500 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:outline-none text-black text-4xl flex justify-center items-center">&lt;</span>

                <img src="/Zoro.jpg" className="w-full h-auto object-cover object-center" id="c-img" />

                <img src="/ss2.png" alt="photo2" className="w-full h-auto object-cover object-center" id="c-img" />

                <img src="/Screenshot (40).png" alt="photo3" className="w-full h-auto object-cover object-center" id="c-img" />

                <img src="https://via.placeholder.com/400x200/" alt="photo4" className="w-full h-auto object-cover object-center" id="c-img" />

                <span id="nextBtn" className="absolute right-0 top-0 bottom-0 w-1/6 bg-gray-500 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:outline-none text-black text-4xl flex justify-center items-center">&gt;</span>
            </div>
        </div>
    )
}

export default Carousel;
