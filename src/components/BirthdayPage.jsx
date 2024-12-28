import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import "../App.css";
import { motion } from "framer-motion";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const BirthdayPage = () => {
  const [partyMessage, setPartyMessage] = useState("");
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  const handleSend = () => {
    const message = `https://wa.me/+918792692139?text=${encodeURIComponent(
      `Party yavaga kodsthiya? \n Ans: ${partyMessage}`
    )}`;
    window.open(message, "_blank");
  };

  useEffect(() => {
    typedInstance.current = new Typed(typedEl.current, {
      strings: ["Harshitha Shankar", "Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className=" h-screen overflow-hidden overflow-y-auto py-10 bg-black">
      <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-8 md:space-y-12 text-white">
        <div className="w-full overflow-hidden">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            {images.map((image, index) => (
              <motion.div
                initial={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "50%",
                  y: 10,
                }}
                whileInView={{ scale: 1, rotate: 0, y: 0, borderRadius: "10%" }}
                whileHover={{
                  borderRadius: "20%",
                  border: "2px solid #34d399",
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                key={index}
                className="w-48 h-48 md:w-64 md:h-64 border-2 border-green-100 bg-cover bg-center rounded-xl transform transition-transform duration-1000 ease-in-out inline-block mr-6"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></motion.div>
            ))}
          </marquee>
        </div>

        <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
          <h1 className="text-3xl font-semibold" style={{ lineHeight: "1.5" }}>
            <span style={{ letterSpacing: "5px" }} className="text-white">
              <br></br> HBD
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

        <p className="text-2xl sm:text-3xl md:text-5xl  font-bold opacity-80 mx-4 leading-[2.3rem] md:leading-[3rem]">
          May your day be filled with joy and wonderful moments. You deserve
          nothing less than an amazing day, just like you are! 🎉🎉
        </p>

        <div className="w-full max-w-md space-y-6 mt-10">
          <label className="block text-white text-xl sm:text-2xl font-medium">
            Party yavag Kodsthiya?
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
  );
};

export default BirthdayPage;
