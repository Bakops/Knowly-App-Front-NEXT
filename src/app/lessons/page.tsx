"use client";

import CourseCard from "@/components/layout/CourseCard";
import HeaderComponent from "@/components/layout/HeaderComponent";
import axios from "axios";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  price: number;
}

interface Lesson {
  id: number;
  name: string;
  content: string;
  courseId: number;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessonsByCourse, setLessonsByCourse] = useState<
    Record<number, Lesson[]>
  >({});

  // Récupérer tous les cours
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://api-spring-l3i0.onrender.com/courses"
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchLessonsForCourses = async () => {
      try {
        const lessonsMap: Record<number, Lesson[]> = {};
        for (const course of courses) {
          try {
            const response = await axios.get(
              `https://api-spring-l3i0.onrender.com/courses/${course.id}/lessons`
            );
            lessonsMap[course.id] = response.data || [];
          } catch (error) {
            console.error(
              `Erreur lors du chargement des leçons pour le cours ${course.id}:`,
              error
            );
            lessonsMap[course.id] = [];
          }
        }
        setLessonsByCourse(lessonsMap);
      } catch (error) {
        console.error("Erreur générale lors du chargement des leçons:", error);
      }
    };

    if (courses.length > 0) {
      fetchLessonsForCourses();
    }
  }, [courses]);

  return (
    <>
      <HeaderComponent />
      <div
        style={{
          minHeight: "20vh",
          padding: "20px",
          color: "#c3cc50",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", width: "59%" }}>
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                marginBottom: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Affichage des informations du cours */}
              <CourseCard
                id={course.id}
                name={course.name}
                price={course.price}
              />

              {/* Affichage des leçons associées */}
              <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                <h4 style={{ color: "#c3cc50" }}>Leçons :</h4>
                {lessonsByCourse[course.id] &&
                lessonsByCourse[course.id].length > 0 ? (
                  lessonsByCourse[course.id].map((lesson) => (
                    <div key={lesson.id} style={{ marginBottom: "10px" }}>
                      <strong>{lesson.name}</strong>
                      <strong>ID: {lesson.id}</strong>
                      <p>{lesson.content}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#aaa" }}>
                    Aucune leçon disponible pour ce cours.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
