"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const CoursesAdmin = () => {
  // États pour les cours
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

  // États pour les leçons
  const [lessonId, setLessonId] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [lessonContent, setLessonContent] = useState("");
  const [lessonCourseId, setLessonCourseId] = useState("");

  // Alert personnalisée
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Animation loading
  const [loading, setLoading] = useState(false);

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 2200);
  };

  const createCourse = async () => {
    setLoading(true);
    try {
      await axios.post(`https://api-spring-l3i0.onrender.com/courses`, {
        name: courseName,
        price: parseFloat(coursePrice),
      });
      showAlert("success", "Cours créé !");
    } catch (error) {
      showAlert("error", "Erreur lors de la création du cours.");
    }
    setLoading(false);
  };

  const updateCourse = async () => {
    setLoading(true);
    try {
      await axios.put(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}`,
        {
          name: courseName,
          price: parseFloat(coursePrice),
        }
      );
      showAlert("success", "Cours modifié !");
    } catch (error) {
      showAlert("error", "Erreur lors de la modification du cours.");
    }
    setLoading(false);
  };

  const deleteCourse = async () => {
    if (!courseId) {
      showAlert("error", "Veuillez fournir un ID de cours valide.");
      return;
    }
    setLoading(true);
    try {
      await axios.delete(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}`
      );
      showAlert("success", "Cours supprimé !");
    } catch (error) {
      showAlert("error", "Erreur lors de la suppression du cours.");
    }
    setLoading(false);
  };

  const createLesson = async () => {
    setLoading(true);
    try {
      const payload = {
        name: lessonName,
        content: lessonContent,
      };
      const courseId = lessonCourseId;
      await axios.post(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons`,
        payload
      );
      showAlert("success", "Leçon créée et associée au cours !");
    } catch (error) {
      showAlert("error", "Erreur lors de la création de la leçon.");
    }
    setLoading(false);
  };

  const updateLesson = async () => {
    setLoading(true);
    try {
      const payload = {
        name: lessonName,
        content: lessonContent,
      };
      const courseId = lessonCourseId;
      await axios.put(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons/${lessonId}`,
        payload
      );
      showAlert("success", "Leçon modifiée avec succès !");
    } catch (error) {
      showAlert("error", "Erreur lors de la modification de la leçon.");
    }
    setLoading(false);
  };

  const deleteLesson = async () => {
    setLoading(true);
    try {
      const courseId = lessonCourseId;
      await axios.delete(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons/${lessonId}`
      );
      showAlert("success", "Leçon supprimée avec succès !");
    } catch (error) {
      showAlert("error", "Erreur lors de la suppression de la leçon.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-10 px-4 font-poppins bg-gray-700 transition-colors duration-700">
      {/* Alert personnalisée */}
      {alert && (
        <div
          className={`fixed top-7 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 px-5 py-2 rounded-full shadow-lg text-sm font-semibold
            animate-slide-fade
            ${
              alert.type === "success"
                ? "bg-[#eaffd0] text-[#2e7d32] border border-[#b6e388]"
                : "bg-[#ffeaea] text-[#b91c1c] border border-[#ffbdbd]"
            }`}
          style={{
            minWidth: "220px",
            maxWidth: "90vw",
            letterSpacing: "0.01em",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          }}
        >
          {alert.type === "success" ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#c3cc50" />
              <path
                d="M7 13l3 3 7-7"
                stroke="#2e7d32"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#ea3535" />
              <path d="M9 9l6 6M15 9l-6 6" stroke="#fff" strokeWidth="2" />
            </svg>
          )}
          <span>{alert.message}</span>
        </div>
      )}

      <div className="flex justify-end mb-4">
        <Link href="/">
          <button className="bg-[#ea3535] hover:bg-red-700 text-white px-4 py-2 rounded shadow transition-all duration-200">
            Retour à l'accueil
          </button>
        </Link>
      </div>

      <h1 className="text-[#c3cc50] mb-8 font-extrabold text-3xl animate-fade-in-down">
        KnowlyAdmin - Cours & Leçons
      </h1>

      {/* Section Cours */}
      <div className="mb-10 bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
        <h2 className="text-[#c3cc50] text-xl font-bold mb-4">Cours</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder="ID du cours"
            className={inputClass}
          />
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Nom du cours"
            className={inputClass}
          />
          <input
            type="text"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
            placeholder="Prix du cours"
            className={inputClass}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={createCourse}
            className={buttonClassCreate}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Création...</span>
            ) : (
              "Créer le cours"
            )}
          </button>
          <button
            onClick={updateCourse}
            className={buttonClassUpdate}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Modification...</span>
            ) : (
              "Modifier le cours"
            )}
          </button>
          <button
            onClick={deleteCourse}
            className={buttonClassDelete}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Suppression...</span>
            ) : (
              "Supprimer le cours"
            )}
          </button>
        </div>
      </div>

      {/* Section Leçons */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
        <h2 className="text-[#c3cc50] text-xl font-bold mb-4">Leçons</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            value={lessonId}
            onChange={(e) => setLessonId(e.target.value)}
            placeholder="ID de la leçon"
            className={inputClass}
          />
          <input
            type="text"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
            placeholder="Nom de la leçon"
            className={inputClass}
          />
          <input
            type="text"
            value={lessonContent}
            onChange={(e) => setLessonContent(e.target.value)}
            placeholder="Contenu de la leçon"
            className={inputClass}
          />
          <input
            type="text"
            value={lessonCourseId}
            onChange={(e) => setLessonCourseId(e.target.value)}
            placeholder="ID du cours associé"
            className={inputClass}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={createLesson}
            className={buttonClassCreate}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Création...</span>
            ) : (
              "Créer la leçon"
            )}
          </button>
          <button
            onClick={updateLesson}
            className={buttonClassUpdate}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Modification...</span>
            ) : (
              "Modifier la leçon"
            )}
          </button>
          <button
            onClick={deleteLesson}
            className={buttonClassDelete}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Suppression...</span>
            ) : (
              "Supprimer la leçon"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const inputClass =
  "p-3 rounded-lg border border-[#c3cc50] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c3cc50] transition-all duration-200 shadow-sm";

const buttonClassCreate =
  "bg-[#13c863] hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg shadow transition-all duration-200 focus:ring-2 focus:ring-[#13c863] focus:ring-offset-2";
const buttonClassUpdate =
  "bg-[#eeae37] hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg shadow transition-all duration-200 focus:ring-2 focus:ring-[#eeae37] focus:ring-offset-2";
const buttonClassDelete =
  "bg-[#ea3535] hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg shadow transition-all duration-200 focus:ring-2 focus:ring-[#ea3535] focus:ring-offset-2";

export default CoursesAdmin;
