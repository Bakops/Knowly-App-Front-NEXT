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

  return (
    <>
    <HeaderComponent />
    <div style={{ minHeight: '100vh', padding: '20px', color: '#c3cc50' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.map(course => (
          <CourseCard key={course.id} name={course.name} price={course.price} />
        ))}
      </div>
    </div>
    </>
    


    
  );
};

export default CoursesPage;
