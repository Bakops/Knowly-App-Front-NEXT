import Link from "next/link";

interface CourseCardProps {
  id: number;
  name: string;
  price: number;
}

const CourseCard = ({ id, name, price }: CourseCardProps) => (
  <Link href={`/detailscours/${id}`}>
    <div className="flex justify-center align-middle">
      <div className="bg-gray-800 shadow-md rounded-lg p-4 m-2 w-64 hover:bg-[#c3cc50] hover:text-gray-800 cursor-pointer transition">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-[#FFF] font-bold">Prix: {price}€</p>
        <p className="text-[#FFF] font-bold text-sm">ID: {id}</p>
      </div>
    </div>
  </Link>
);

export default CourseCard;
