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
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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
      <div className="min-h-[20vh] py-8 flex flex-col items-center bg-white font-poppins">
        <h1 className="text-3xl font-bold text-[#c3cc50] mb-8 animate-fade-in-down">
          Cours & Leçons
        </h1>
        {loading ? (
          <div className="text-gray-700 text-lg animate-pulse">
            Chargement...
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center w-full max-w-5xl animate-fade-in-up">
            {courses.map((course, idx) => (
              <div
                key={course.id}
                className="w-full flex flex-col md:flex-row items-start bg-gray-100 rounded-xl shadow-lg mb-8 p-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
              >
                <CourseCard
                  id={course.id}
                  name={course.name}
                  price={course.price}
                />
                <div className="ml-0 md:ml-8 mt-6 md:mt-0 flex-1">
                  <h4 className="text-[#c3cc50] text-lg font-semibold mb-2">
                    Leçons :
                  </h4>
                  {lessonsByCourse[course.id] &&
                  lessonsByCourse[course.id].length > 0 ? (
                    lessonsByCourse[course.id].map((lesson, lidx) => (
                      <div
                        key={lesson.id}
                        className="mb-4 p-4 rounded-lg bg-[#f9fbe7] shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                        style={{ animationDelay: `${lidx * 0.06 + 0.2}s` }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-700 text-base">
                            {lesson.name}
                          </span>
                          <span className="text-xs text-gray-400 ml-2">
                            ID: {lesson.id}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {lesson.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 italic">
                      Aucune leçon disponible pour ce cours.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoursesPage;
