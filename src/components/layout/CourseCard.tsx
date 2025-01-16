import React from 'react';

interface CourseCardProps {
  name: string;
  price: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, price }) => {
  return (
    <div className="max-w-sm mx-auto border border-[#c3cc50] rounded-lg shadow-lg bg-darkGray text-[#c3cc50] p-6 space-y-4 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-semibold text-center">{name}</h3>
    <p className="text-lg text-center font-medium">Prix: <span className="font-bold">{price} €</span></p>
    <button className="w-full bg-[#c3cc50] text-[#1f2937] py-2 px-4 rounded-md font-semibold hover:bg-limeGreen/80 transition-colors">
    Commencer
    </button>
</div>
  );
};

export default CourseCard;
