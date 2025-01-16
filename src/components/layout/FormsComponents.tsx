"use client";

import React, { useState } from "react";

export default function FormsComponents() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert('Erreur : ' + result.message);
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire :', error);
            alert('Une erreur est survenue lors de la soumission du formulaire.');
        }
    };

    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Contactez-nous</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-800">Envoyer nous un message</h3>

                            <form onSubmit={handleSubmit} className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Votre nom </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="name" placeholder="Entrer votre nom" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Email </label>
                                        <div className="mt-2.5 relative">
                                            <input type="email" name="email" placeholder="Entrer votre email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Numéros </label>
                                        <div className="mt-2.5 relative">
                                            <input type="tel" name="phone" placeholder="Entrer votre numéros" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Statut </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="status" placeholder="Entrer votre statut (Etudiant, professionnels,..)" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="text-base font-medium text-gray-800"> Message </label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="message" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" onChange={handleChange}></textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#c3cc50] border border-transparent rounded-md focus:outline-none hover:bg-gray-800 focus:bg-gray-800">
                                            Envoyer
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
