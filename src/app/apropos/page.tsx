import React from 'react';
import HeaderComponent from '@/components/layout/HeaderComponent';

const AboutPage: React.FC = () => {
  return (
    <>
    <HeaderComponent />
    <div className="min-h-screen flex flex-col justify-between p-10 font-sans  text-gray-800 leading-relaxed">
      
      <section className="flex-grow max-w-2xl mx-auto">
        <p className="mb-5 text-lg">
          Knowly is your go-to platform for online courses, designed to empower learners and educators alike. Our mission is to make quality education accessible to everyone, everywhere.
        </p>
        <p className="mb-5 text-lg">
          Whether you're looking to develop new skills, advance your career, or simply explore new interests, Knowly offers a wide range of courses tailored to your needs. Our platform connects you with expert instructors and a community of learners from around the globe.
        </p>
        <p className="mb-5 text-lg">
          Join us on this journey of knowledge and discovery. With Knowly, learning has no limits.
        </p>
      </section>
      <footer className="mt-10 border-t border-gray-300 pt-2 text-center">
        <p className="text-sm text-gray-600">© 2023 Knowly. All rights reserved.</p>
      </footer>
    </div>
    </>
    
  );
};

export default AboutPage;
