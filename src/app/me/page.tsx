import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

const MePage = async () => {
  const data = await getSession();
  console.log(data);

  // Exemple de données de progression pour les cours et leçons
  const progressionCours = [
    { nom: "Bases de JavaScript", leçonsComplétées: 8, totalLeçons: 10 },
    { nom: "Fondamentaux de React", leçonsComplétées: 5, totalLeçons: 12 },
    { nom: "Fondamentaux de Python", leçonsComplétées: 7, totalLeçons: 12 },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Barre latérale */}
      <aside className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-2xl font-bold font-poppins mb-6">Tableau de bord</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#profil" className="hover:text-gray-300 font-poppins">Profil</a>
            </li>
            <li className="mb-4">
              <a href="#cours" className="hover:text-gray-300">Cours</a>
            </li>
            <li className="mb-4">
              <a href="#leçons" className="hover:text-gray-300">Leçons</a>
            </li>
            <li className="mb-4">
              <a href="#paramètres" className="hover:text-gray-300">Paramètres</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 mx-auto w-full md:w-3/4 lg:w-2/3">
        <div className="flex justify-end ">
            <a
              href="/api/auth/logout"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Déconnexion
            </a>
          </div>
          <div className="flex justify-center mb-4">
            <Image
              className="rounded-full border-8 border-[#c3cc50]"
              src={data?.user?.picture}
              alt="Photo de profil"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-md text-center text-gray-700 mb-4">
            <span className="font-semibold">Nom :</span> {data?.user?.nickname}
          </h1>
          <h2 className="text-md text-center text-gray-700 mb-4">
            <span className="font-semibold">Email :</span> {data?.user?.name}
          </h2>

          <div className="mt-4">
            <h3 className="text-md text-gray-800 font-bold font-po mb-2">Progression des cours</h3>
            {progressionCours.map((cours, index) => (
              <div key={index} className="mb-3">
                <label className="block text-gray-700">{cours.nom}</label>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#c3cc50] h-3 rounded-full"
                    style={{ width: `${(cours.leçonsComplétées / cours.totalLeçons) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {cours.leçonsComplétées} sur {cours.totalLeçons} leçons complétées
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MePage;
