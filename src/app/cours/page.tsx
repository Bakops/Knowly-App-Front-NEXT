"use client";

import CourseCard from "@/components/layout/CourseCard";
import HeaderComponent from "@/components/layout/HeaderComponent";
import axios from "axios";
import { useEffect, useState } from "react";
// Définir une interface pour un cours
interface Course {
  id: number;
  name: string;
  price: number;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://knowly-back.onrender.com/courses"
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
      }
    };

    fetchCourses();
  }, []);

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
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
