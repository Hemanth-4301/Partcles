import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import "../App.css";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import birthdaySong from "../assets/BirthdaySong.mp3";

const BirthdayPage = () => {
  const [partyMessage, setPartyMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const audioInstance = useRef(null);

  useEffect(() => {
    audioInstance.current = new Audio(birthdaySong);
    audioInstance.current.loop = true;
    audioInstance.current.volume = 1;
  }, []);

  const handleSend = () => {
    const message = `https://wa.me/+918792692139?text=${encodeURIComponent(
      `Party yavaga kodsthiya? \n Ans: ${partyMessage}`
    )}`;
    window.open(message, "_blank");
  };

  const handleStart = () => {
    setFlag(true);
    if (audioInstance.current) {
      audioInstance.current.volume = 1;
      audioInstance.current
        .play()
        .then(() => console.log("Audio is playing"))
        .catch((error) => console.error("Audio playback error:", error));
    }
  };

  useEffect(() => {
    if (flag && typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: [
          "Harshitha Shankar",
          "Shashi uncle's cute daughter",
          "Siddlingehswar Layout Monstar",
          "Frontend Developer",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, [flag]);

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="overflow-hidden">
      {!flag && (
        <div className="flex justify-center items-center md:items-start h-screen relative md:mt-20 ">
          <motion.button
            initial={{ scale: 0.2, x: -1000, rotateY: 180, paddingX: "1px" }}
            animate={{ x: 0, scale: 1, rotateY: 0 }}
            whileInView={{ x: 0, scale: 1, rotateY: 0, paddingX: "15px" }}
            transition={{ duration: 1, type: "tween", stiffness: 100 }}
            onClick={handleStart}
            style={{ letterSpacing: "2px" }}
            className="button "
          >
            <div className="flex items-center gap-4 justify-center ">
              go ahead <ArrowRightIcon className="h-6 w-6" />
            </div>
          </motion.button>
        </div>
      )}
      {flag && (
        <div className="h-screen overflow-hidden overflow-y-auto py-10 bg-black">
          <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-8 md:space-y-12 text-white">
            <motion.button
              initial={{ scale: 0.2, y: -1000 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1, type: "tween", stiffness: 100 }}
              style={{ letterSpacing: "4px" }}
              onClick={() => alert("Lazy lady")}
              className="button1 mb-2"
            >
              lazy lady
            </motion.button>
            <div className="w-full overflow-hidden">
              <marquee behavior="scroll" direction="left" scrollamount="8">
                {images.map((image, index) => (
                  <motion.div
                    initial={{
                      scale: 0.8,
                      y: 10,
                    }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    key={index}
                    className="w-56 h-56 md:w-64 md:h-64 border-2 border-green-100 bg-cover bg-center rounded-xl transform transition-transform duration-1000 ease-in-out inline-block  mr-6 hover:animate-pulse"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></motion.div>
                ))}
              </marquee>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
              <h1
                className="text-2xl md:text-3xl font-semibold"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ letterSpacing: "5px" }} className="text-white">
                  <br /> HBD
                </span>
                <br />
                <span
                  ref={typedEl}
                  style={{
                    fontWeight: "800",
                    marginTop: "10px",
                  }}
                  className="font-serif text-green-300"
                ></span>
              </h1>
            </div>

            <p className="text-2xl sm:text-3xl md:text-5xl font-bold opacity-80 mx-4 leading-[2.3rem] md:leading-[3rem]">
              May your day be filled with joy and wonderful moments. You deserve
              nothing less than an amazing day, just like you are! 🎉🎉
            </p>

            <div className="w-full max-w-md space-y-6 mt-10">
              <label className="block text-white text-xl sm:text-2xl font-medium">
                Party yavag Kodsthiya ??
              </label>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                <input
                  type="text"
                  value={partyMessage}
                  onChange={(e) => setPartyMessage(e.target.value)}
                  placeholder="Bega Helu...😂"
                  required
                  className="flex-1 px-6 py-3 border border-gray-500 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div>
                  <button
                    onClick={handleSend}
                    className="w-full sm:w-auto px-10 md:px-6 py-3 bg-green-600 border-2 border-green-600 text-white font-semibold rounded-lg hover:bg-transparent transition-all transform hover:scale-102"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;
