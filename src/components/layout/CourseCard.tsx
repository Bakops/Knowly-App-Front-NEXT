// KNOWLY%20NEXTJS\knowlyapp\src\components\layout\CourseCard.tsx
interface CourseCardProps {
  id: number;
  name: string;
  price: number;
}

const CourseCard = ({ id, name, price }: CourseCardProps) => (
  <div className="flex justify-center align-middle">
    <div className="bg-gray-800 shadow-md rounded-lg p-4 m-2 w-64 hover:bg-[#c3cc50] hover:text-gray-800">
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <p className="text-[#FFF]">Prix: {price}€</p>
    <p className="text-[#FFF] text-sm">ID: {id}</p>
  </div>
  </div>
  
); 

export default CourseCard;
