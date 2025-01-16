"use client";

import axios from 'axios';
import { useState } from 'react';
import Link from "next/link";

const CoursesAdmin = () => {
  // State for courses
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  // State for lessons
  const [lessonId, setLessonId] = useState('');
  const [lessonName, setLessonName] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [lessonCourseId, setLessonCourseId] = useState(''); // To associate lesson with course

  // Course handlers
  const createCourse = async () => {
    try {
      const response = await axios.post('http://localhost:8081/courses', {
        id: Math.floor(Math.random() * 1000),
        name: courseName,
        price: parseFloat(coursePrice),
      });
      console.log('Course created:', response.data);
      alert("Course created !")
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const updateCourse = async () => {
    try {
      const response = await axios.put(`http://localhost:8081/courses/${courseId}`, {
        name: courseName,
        price: parseFloat(coursePrice),
      });
      console.log('Course updated:', response.data);
      alert("Course updated !")
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const deleteCourse = async () => {
    try {
      const response = await axios.delete(`http://localhost:8081/courses/${courseId}`);
      console.log('Course deleted:', response.data);
      alert("Course deleted !")
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };


  const createLesson = async () => {
  try {
    const payload = {
      name: lessonName,
      content: lessonContent,
    };
    console.log('Payload sent to API:', payload);

    
    const courseId = lessonCourseId; 
    const response = await axios.post(`http://localhost:8081/courses/${courseId}/lessons`, payload);

    console.log('Lesson created:', response.data);
    alert("Lesson created and associated with course!");
  } catch (error) {
    console.error('Error creating lesson:', error);
    if (axios.isAxiosError(error)) {
      alert(`API Error: ${error.response?.data || 'Unknown error occurred'}`);
    } else {
      alert('An unknown error occurred.');
    }
  }
};


  const updateLesson = async () => {
  try {
    const payload = {
      name: lessonName,
      content: lessonContent,
    };

    const courseId = lessonCourseId; // Assurez-vous que cette variable contient l'ID du cours
    const response = await axios.put(`http://localhost:8081/courses/${courseId}/lessons/${lessonId}`, payload);

    console.log('Lesson updated:', response.data);
    alert("Lesson updated successfully!");
  } catch (error) {
    console.error('Error updating lesson:', error);
    if (axios.isAxiosError(error)) {
      alert(`API Error: ${error.response?.data || 'Unknown error occurred'}`);
    } else {
      alert('An unknown error occurred.');
    }
  }
};


const deleteLesson = async () => {
  try {
    const courseId = lessonCourseId; 
    const response = await axios.delete(`http://localhost:8081/courses/${courseId}/lessons/${lessonId}`);
    console.log('Lesson deleted:', response.data);
    alert("Lesson deleted successfully!");
  } catch (error) {
    console.error('Error deleting lesson:', error);
    if (axios.isAxiosError(error)) {
      alert(`API Error: ${error.response?.data || 'Unknown error occurred'}`);
    } else {
      alert('An unknown error occurred.');
    }
  }
};


  return (
    <div style={{ backgroundColor: '#1f2937', minHeight: '100vh', padding: '50px' }}>
      <div className='flex justify-end'>
        <Link href="/"><button style={buttonStyleDELETE}>Return Home</button></Link>
      </div>
      
      <h1 style={{ color: '#c3cc50', marginBottom: '20px', fontWeight: '700', fontSize: '25px' }}>KnowlyAdmin - Cours & Leçons</h1>

      {/* Courses Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#c3cc50' }}>Cours</h2>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Course ID"
          style={inputStyle}
        />
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Course Name"
          style={inputStyle}
        />
        <input
          type="text"
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          placeholder="Course Price"
          style={inputStyle}
        />
        <button onClick={createCourse} style={buttonStyleCREATE}>Create Course</button>
        <button onClick={updateCourse} style={buttonStyleUPDATE}>Update Course</button>
        <button onClick={deleteCourse} style={buttonStyleDELETE}>Delete Course</button>
      </div>

      {/* Lessons Section */}
      <div>
        <h2 style={{ color: '#c3cc50' }}>Leçons</h2>
        <input
          type="text"
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          placeholder="Lesson ID"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          placeholder="Lesson Name"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonContent}
          onChange={(e) => setLessonContent(e.target.value)}
          placeholder="Lesson Content"
          style={inputStyle}
        />
        <input
          type="text"
          value={lessonCourseId}
          onChange={(e) => setLessonCourseId(e.target.value)}
          placeholder="Associated Course ID"
          style={inputStyle}
        />
        <button onClick={createLesson} style={buttonStyleCREATE}>Create Lesson</button>
        <button onClick={updateLesson} style={buttonStyleUPDATE}>Update Lesson</button>
        <button onClick={deleteLesson} style={buttonStyleDELETE}>Delete Lesson</button>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #c3cc50',
  marginRight: '10px',
  color: '#1f2937',
  backgroundColor: '#FFF',
  marginBottom: '10px',
};

const buttonStyleCREATE = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#13c863',
  color: '#FFF',
  cursor: 'pointer',
  marginRight: '10px',
  marginBottom: '10px',
};

const buttonStyleUPDATE = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#eeae37',
  color: '#FFF',
  cursor: 'pointer',
  marginRight: '10px',
  marginBottom: '10px',
};

const buttonStyleDELETE = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#ea3535',
  color: '#FFF',
  cursor: 'pointer',
  marginRight: '10px',
  marginBottom: '10px',
};

export default CoursesAdmin;
