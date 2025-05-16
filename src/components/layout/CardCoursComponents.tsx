"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-next`}
      style={{
        ...style,
        display: "block",
        background: "#c3cc50",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-prev`}
      style={{
        ...style,
        display: "block",
        background: "#c3cc50",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

export default function CardCoursComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const courses = [
    {
      title: "Introduction à Python",
      category: "PYTHON",
      description:
        "Découvrez les bases de Python, un langage polyvalent et puissant pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "2h28",
    },
    {
      title: "Introduction à Angular",
      category: "ANGULAR",
      description:
        "Découvrez les bases d’Angular, un framework JavaScript puissant pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "3h15",
    },
    {
      title: "Introduction à Symfony",
      category: "SYMPHONY",
      description:
        "Découvrez les bases de Symfony, un framework PHP puissant pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "4h00",
    },
    {
      title: "Introduction à PHP",
      category: "PHP",
      description:
        "Découvrez les bases de PHP, un langage serveur puissant pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "2h28",
    },
    {
      title: "Introduction à React",
      category: "REACT",
      description:
        "Découvrez les bases de React, une bibliothèque JavaScript flexible pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "3h15",
    },
    {
      title: "Introduction à Vue",
      category: "VUE",
      description:
        "Découvrez les bases de Vue, un framework JavaScript léger pour le développement web.",
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      duration: "4h00",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Ces cours pourraient vous intéresser :
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Découvrez une sélection de cours en ligne conçus pour booster vos
              compétences et vous accompagner dans votre apprentissage.
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="px-2">
              <div className="group overflow-hidden bg-gray-800 rounded-lg shadow transform transition-all duration-400 ease-in-out mt-10 relative">
                <div className="h-32 w-32 bg-[#c3cc50] absolute -top-[75px] -right-[75px] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center group-hover:scale-[30]"></div>
                <div className="p-5 relative">
                  <div className="relative">
                    <div title="" className="block aspect-w-4 aspect-h-3">
                      <img
                        className="object-cover w-full h-full rounded-lg"
                        src={course.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-[#c3cc50] rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <div className="m-[5px]">
                    <span className="ml-1 flex flex-row align-middle gap-3 mt-6 text-base font-semibold tracking-widest text-gray-500 uppercase">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      {course.duration}
                    </span>
                    <p className="mt-3 text-2xl font-semibold">
                      <a title="" className="text-white">
                        {course.title}
                      </a>
                    </p>
                    <p className="mt-1 text-base text-[15px] text-white">
                      {course.description}
                    </p>
                    <a
                      title=""
                      className="inline-flex items-center justify-center py-1.5 px-4 mt-5 text-sm font-semibold text-[#c3cc50] bg-white rounded-full transition-all duration-200 border-b-2 border-transparent hover:bg-gray-800 hover:text-white"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
