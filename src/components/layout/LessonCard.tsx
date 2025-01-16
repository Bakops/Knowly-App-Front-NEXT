import React from 'react';

interface LessonCardProps {
  id: number;
  content: string;
  courseId: number;
}

const LessonCardProps = ({ id, content, courseId }: LessonCardProps) => (
  <div className="flex justify-center align-middle">
    <div className="bg-gray-800 shadow-md rounded-lg p-4 m-2 w-64 hover:bg-[#c3cc50] hover:text-gray-800">
    <h3 className="text-lg font-bold mb-2">{content}</h3>
    <p className="text-[#FFF]">ID: {id}€</p>
    <p className="text-[#FFF] text-sm">COURS ID: {courseId}</p>
  </div>
  </div>
  
); 

export default LessonCardProps;
