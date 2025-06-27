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

  const createCourse = async () => {
    try {
      const response = await axios.post(
        `https://api-spring-l3i0.onrender.com/courses`,
        {
          name: courseName,
          price: parseFloat(coursePrice),
        }
      );
      console.log("Cours créé :", response.data);
      alert("Cours créé !");
    } catch (error) {
      console.error("Erreur lors de la création du cours :", error);
    }
  };

  const updateCourse = async () => {
    try {
      const response = await axios.put(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}`,
        {
          name: courseName,
          price: parseFloat(coursePrice),
        }
      );
      console.log("Cours modifié :", response.data);
      alert("Cours modifié !");
    } catch (error) {
      console.error("Erreur lors de la modification du cours :", error);
    }
  };

  const deleteCourse = async () => {
    if (!courseId) {
      alert("Veuillez fournir un ID de cours valide.");
      return;
    }
    try {
      const response = await axios.delete(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}`
      );
      console.log("Cours supprimé :", response.data);
      alert("Cours supprimé !");
    } catch (error) {
      console.error("Erreur lors de la suppression du cours :", error);
    }
  };

  const createLesson = async () => {
    try {
      const payload = {
        name: lessonName,
        content: lessonContent,
      };
      console.log("Données envoyées à l'API :", payload);

      const courseId = lessonCourseId;
      const response = await axios.post(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons`,
        payload
      );

      console.log("Leçon créée :", response.data);
      alert("Leçon créée et associée au cours !");
    } catch (error) {
      console.error("Erreur lors de la création de la leçon :", error);
      if (axios.isAxiosError(error)) {
        alert(`Erreur API : ${error.response?.data || "Erreur inconnue"}`);
      } else {
        alert("Une erreur inconnue est survenue.");
      }
    }
  };

  const updateLesson = async () => {
    try {
      const payload = {
        name: lessonName,
        content: lessonContent,
      };

      const courseId = lessonCourseId;
      const response = await axios.put(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons/${lessonId}`,
        payload
      );

      console.log("Leçon modifiée :", response.data);
      alert("Leçon modifiée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la modification de la leçon :", error);
      if (axios.isAxiosError(error)) {
        alert(`Erreur API : ${error.response?.data || "Erreur inconnue"}`);
      } else {
        alert("Une erreur inconnue est survenue.");
      }
    }
  };

  const deleteLesson = async () => {
    try {
      const courseId = lessonCourseId;
      const response = await axios.delete(
        `https://api-spring-l3i0.onrender.com/courses/${courseId}/lessons/${lessonId}`
      );
      console.log("Leçon supprimée :", response.data);
      alert("Leçon supprimée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la suppression de la leçon :", error);
      if (axios.isAxiosError(error)) {
        alert(`Erreur API : ${error.response?.data || "Erreur inconnue"}`);
      } else {
        alert("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <div className="flex justify-end">
        <Link href="/">
          <button style={buttonStyleDELETE}>Retour à l'accueil</button>
        </Link>
      </div>

      <h1
        style={{
          color: "#c3cc50",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        KnowlyAdmin - Cours & Leçons
      </h1>

      {/* Section Cours */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#c3cc50" }}>Cours</h2>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="ID du cours"
          style={inputStyle}
        />
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Nom du cours"
          style={inputStyle}
        />
        <input
          type="text"
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          placeholder="Prix du cours"
          style={inputStyle}
        />
        <button onClick={createCourse} style={buttonStyleCREATE}>
          Créer le cours
        </button>
        <button onClick={updateCourse} style={buttonStyleUPDATE}>
          Modifier le cours
        </button>
        <button onClick={deleteCourse} style={buttonStyleDELETE}>
          Supprimer le cours
        </button>
      </div>

      {/* Section Leçons */}
      <div>
        <h2 style={{ color: "#c3cc50" }}>Leçons</h2>
        <input
          type="text"
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          placeholder="ID de la leçon"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          placeholder="Nom de la leçon"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonContent}
          onChange={(e) => setLessonContent(e.target.value)}
          placeholder="Contenu de la leçon"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonCourseId}
          onChange={(e) => setLessonCourseId(e.target.value)}
          placeholder="ID du cours associé"
          style={inputStyle}
        />
        <button onClick={createLesson} style={buttonStyleCREATE}>
          Créer la leçon
        </button>
        <button onClick={updateLesson} style={buttonStyleUPDATE}>
          Modifier la leçon
        </button>
        <button onClick={deleteLesson} style={buttonStyleDELETE}>
          Supprimer la leçon
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #c3cc50",
  marginRight: "10px",
  color: "#1f2937",
  backgroundColor: "#FFF",
  marginBottom: "10px",
};

const buttonStyleCREATE = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#13c863",
  color: "#FFF",
  cursor: "pointer",
  marginRight: "10px",
  marginBottom: "10px",
};

const buttonStyleUPDATE = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#eeae37",
  color: "#FFF",
  cursor: "pointer",
  marginRight: "10px",
  marginBottom: "10px",
};

const buttonStyleDELETE = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#ea3535",
  color: "#FFF",
  cursor: "pointer",
  marginRight: "10px",
  marginBottom: "10px",
};

export default CoursesAdmin;
