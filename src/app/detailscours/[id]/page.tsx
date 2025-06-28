"use client";
import { useCart } from "@/components/layout/CartContextComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface Lesson {
  id: number;
  name: string;
  content: string;
}

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `https://api-spring-l3i0.onrender.com/courses/${id}`
        );
        setCourse(res.data);
      } catch (error) {
        setCourse(null);
      }
    };
    const fetchLessons = async () => {
      try {
        const res = await axios.get(
          `https://api-spring-l3i0.onrender.com/courses/${id}/lessons`
        );
        setLessons(res.data);
      } catch (error) {
        setLessons([]);
      }
    };
    Promise.all([fetchCourse(), fetchLessons()]).finally(() =>
      setLoading(false)
    );
  }, [id]);

  if (loading)
    return (
      <>
        <HeaderComponent />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center text-xl">Chargement...</div>
        </div>
      </>
    );

  if (!course)
    return (
      <>
        <HeaderComponent />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center text-red-500 text-xl">
            Ce cours n'existe pas.
            <br />
            <Link href="/" className="text-blue-400 underline">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </>
    );

  return (
    <>
      <HeaderComponent />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/cours"
            className="text-[#c3cc50] hover:underline text-sm"
          >
            &larr; Retour aux cours
          </Link>
        </div>
        <section className="flex flex-col md:flex-row gap-10">
          {/* Illustration fictive ou image */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
            <div className="rounded-xl w-56 h-56 flex items-center justify-center border-4 border-[#c3cc50] bg-white">
              <span className="text-8xl font-black text-[#c3cc50]">
                {course.name[0]}
              </span>
            </div>
          </div>
          {/* Détails du cours */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
                {course.name}
              </h1>
              <p className="mb-6 text-gray-700 text-lg">
                {course.description || "Aucune description pour ce cours."}
              </p>
              <div>
                <span className="text-xl font-bold text-gray-800">Prix :</span>
                <span className="text-2xl font-extrabold text-[#c3cc50] ml-2">
                  {course.price} €
                </span>
              </div>
              {/* Leçons associées */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Leçons associées
                </h2>
                {lessons.length === 0 ? (
                  <p className="text-gray-500">Aucune leçon pour ce cours.</p>
                ) : (
                  <ul className="space-y-3">
                    {lessons.map((lesson) => (
                      <li
                        key={lesson.id}
                        className="border-b border-gray-200 pb-2"
                      >
                        <span className="font-semibold text-[#c3cc50]">
                          {lesson.name}
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {lesson.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#c3cc50] text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-[#b1b93f] transition text-lg"
                onClick={() => {
                  addToCart({
                    id: course.id,
                    name: course.name,
                    price: course.price,
                    quantity: 1,
                  });
                  alert("Cours ajouté au panier !");
                }}
              >
                Ajouter au panier
              </button>
              <Link
                href="/cart"
                className="bg-gray-800 text-[#c3cc50] font-bold px-8 py-3 rounded-lg hover:bg-gray-900 transition text-lg text-center"
              >
                Voir le panier
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
