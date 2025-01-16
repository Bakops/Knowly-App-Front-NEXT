import React from "react";

export default function ValeursComponents(){
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">L'appli qui fait bosser plus malin !</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Avec notre appli, apprendre devient un jeu d'enfant (ou presque). Fini les galères, place aux progrès à portée de clic ! Vous allez adorer réviser, promis.</p>
                </div>
                
                <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                    <div className="transform transition duration-500 hover:scale-105">
                        <div className="relative flex items-center justify-center mx-auto">
                            <svg className="text-gray-800" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                            </svg>
                            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c3cc50" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black hover:text-[#c3cc50]">Savoir accessible</h3>
                        <p className="mt-4 text-base text-gray-600">Accédez à des cours clairs et complets, conçus pour simplifier même les sujets les plus complexes.</p>
                    </div>

                    <div className="transform transition duration-500 hover:scale-105">
                        <div className="relative flex items-center justify-center mx-auto">
                            <svg className="text-gray-800" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                            </svg>
                            <svg className="absolute text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black hover:text-orange-600">Apprentissage éclairé</h3>
                        <p className="mt-4 text-base text-gray-600">Progressez rapidement grâce à des outils interactifs et une approche dynamique qui booste votre motivation.</p>
                    </div>

                    <div className="transform transition duration-500 hover:scale-105">
                        <div className="relative flex items-center justify-center mx-auto">
                            <svg className="text-gray-800" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                            </svg>
                            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#069c10" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black hover:text-green-600">Certifié pour réussir</h3>
                        <p className="mt-4 text-base text-gray-600"> Validez vos acquis avec des certifications reconnues et mettez en avant vos compétences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
