import React, { useEffect, useState } from "react";
import HighlightText from "../assets/components/HighlightText";

import img1 from "../assets/images/gallery/img1.jpg";
import img2 from "../assets/images/gallery/img2.jpg";
import img3 from "../assets/images/gallery/img3.jpg";
import img4 from "../assets/images/gallery/img4.jpg";
import img5 from "../assets/images/gallery/img5.jpg";
import img6 from "../assets/images/gallery/img6.jpg";
import img7 from "../assets/images/gallery/img7.jpg";
import img8 from "../assets/images/gallery/img8.jpg";
import img9 from "../assets/images/gallery/img9.jpg";
import img10 from "../assets/images/gallery/img10.jpg";
import img11 from "../assets/images/gallery/img11.jpg";
import img12 from "../assets/images/gallery/img12.jpg";
import img13 from "../assets/images/gallery/img13.jpg";
import img14 from "../assets/images/gallery/img14.jpg";
import img15 from "../assets/images/gallery/img15.jpg";
import img16 from "../assets/images/gallery/img16.jpg";
import img17 from "../assets/images/gallery/img17.jpg";
import img18 from "../assets/images/gallery/img18.jpg";
import img19 from "../assets/images/gallery/img19.jpg";
import img20 from "../assets/images/gallery/img20.jpg";
import img21 from "../assets/images/gallery/img21.jpg";
import img22 from "../assets/images/gallery/img22.jpg";
import img23 from "../assets/images/gallery/img23.jpg";
import img24 from "../assets/images/gallery/img24.jpg";
import img25 from "../assets/images/gallery/img25.jpg";
import img26 from "../assets/images/gallery/img26.jpg";
import img27 from "../assets/images/gallery/img27.jpg";
import img28 from "../assets/images/gallery/img28.jpg";
import img29 from "../assets/images/gallery/img29.jpg";

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 min-h-screen ">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Randomized <HighlightText>Memories</HighlightText>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
