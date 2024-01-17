import React, { useEffect } from 'react'

const Carousel = (duration) => {

    useEffect(() => {
        // imgs[0].clientWidth;
        const imgs = document.querySelectorAll(".c-img");

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
            imgs[0].transition = "all " + duration + "ms ease-in-out";
            counter++;
            if (counter == 4) counter = 0;

            imgs[0].style.marginLeft = (-size * counter) + "px";
            console.log(size, counter);

            size = imgs[counter].clientWidth;
        });

        prevBtn.addEventListener("click", () => {
            imgs[0].transition = "all " + duration + "ms ease-in-out";
            counter--;
            if (counter < 0) counter = 3;

            imgs[0].style.marginLeft = (-size * counter) + "px";
            console.log(size, counter);
            
            size = imgs[counter].clientWidth;
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
        <div className="carousel w-full flex justify-center h-48 border border-black">
            <span id="prevBtn" className="relative left-0 top-0 bottom-0 w-1/6 bg-gray-500 bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 focus:outline-none">Prev</span>

            <div className="flex overflow-hidden w-96">
                <img src="/ss3.png" alt="photo1" className="c-img" />

                <img src="/ss2.png" alt="photo2" className="c-img" />

                <img src="/Screenshot (40).png" alt="photo3" className="c-img" />

                <img src="https://via.placeholder.com/400x200/" alt="photo4" className="c-img" />
            </div>

            <span id="nextBtn" className="relative right-0 top-0 bottom-0 w-1/6 bg-gray-500 bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 focus:outline-none">Next</span>
        </div>
    )
}

export default Carousel;
