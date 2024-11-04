import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import gaming from '../assets/gaming.jpg';
import sport from '../assets/sport.jpg';
import music from '../assets/music.jpg';
import edit from '../assets/edit.jpg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Gaming", image: gaming },
    { name: "Sport", image: sport },
    { name: "Music", image: music },
    { name: "Editing", image: edit },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;