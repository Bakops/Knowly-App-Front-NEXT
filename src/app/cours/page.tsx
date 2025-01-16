"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';
import CourseCard from '@/components/layout/CourseCard';
import HeaderComponent from '@/components/layout/HeaderComponent';
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
        const response = await axios.get('http://localhost:8081/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des cours:', error);
      }
    };

    fetchCourses();
  }, []);

// KNOWLY%20NEXTJS\knowlyapp\src\app\cours\page.tsx
return (
  <>
    <HeaderComponent />
    <div style={{ minHeight: '20vh', padding: '20px', color: '#c3cc50', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '59%' }}>
        {courses.map(course => (
          <CourseCard key={course.id} id={course.id} name={course.name} price={course.price} />
        ))}
      </div>
    </div>
  </>
);

};

export default CoursesPage;
