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

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <HeaderComponent />
      <div className="min-h-[20vh] py-8 flex flex-col items-center bg-white font-poppins">
        <h1 className="text-3xl font-bold text-[#c3cc50] hover:text-gray-700 mb-8 animate-fade-in-down">
          Nos cours
        </h1>
        {loading ? (
          <div className="text-gray-700 text-lg animate-pulse">
            Chargement...
          </div>
        ) : (
          <div className="flex flex-wrap gap-[1rem] justify-center w-full max-w-5xl animate-fade-in-up">
            {courses.map((course, idx) => (
              <div
                key={course.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
              >
                <CourseCard
                  id={course.id}
                  name={course.name}
                  price={course.price}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoursesPage;
