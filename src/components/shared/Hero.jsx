import React, { useState, useEffect, useMemo } from 'react';
import img from '../lib/assets/hero.jpg';

const Hero = () => {
  const roles = useMemo(() => ['freelancer', 'web developer', 'designer'], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(type, speed);
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="flex h-screen w-full relative">
      {/* Main Section */}
      <section className="h-full w-full">
        {/* Background Image */}
        <img
          src={img} // Replace with your image URL
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex items-center justify-center w-full h-full text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            I am{' '}
            <span className="text-blue-400 border-r-2 border-blue-400 animate-blink">
              {text}
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Hero;
