import HeaderComponent from "@/components/layout/HeaderComponent";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen flex flex-col justify-between p-10 font-sans  text-gray-800 leading-relaxed">
        <section className="flex-grow max-w-2xl mx-auto">
          <p className="mb-5 text-lg">
            Knowly APP est votre plateforme de référence pour les cours
            d'allons, conçue pour donner aux apprenants et aux éducateurs les
            moyens d'agir. Notre mission est de rendre l'éducation de qualité
            accessible à tous, partout.
          </p>
          <p className="mb-5 text-lg">
            Que vous cherchiez à développer de nouvelles compétences, à faire
            progresser votre carrière ou simplement à explorer de nouveaux
            centres d'intérêt, Knowly propose un large éventail de cours adaptés
            à vos besoins. Notre plateforme vous met en relation avec des
            formateurs experts et une communauté d'apprenants du monde entier.
          </p>
          <p className="mb-5 text-lg">
            Rejoignez-nous dans ce voyage de la connaissance et de la
            découverte. Avec Knowly, l'apprentissage n'a pas de limites.
          </p>
        </section>
        <footer className="mt-10 border-t border-gray-300 pt-2 text-center">
          <p className="text-sm text-gray-600">
            © 2023 Knowly. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
