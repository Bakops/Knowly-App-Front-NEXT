import Link from "next/link";

interface CourseCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl?: string; // Optionnel si tu veux passer une image différente par cours
}

const CourseCard = ({ id, name, price, imageUrl }: CourseCardProps) => (
  <Link href={`/detailscours/${id}`}>
    <div className="flex justify-center items-center">
      <div className="bg-gray-800 shadow-lg rounded-xl p-0 m-4 w-72 hover:bg-[#c3cc50] hover:text-gray-800 cursor-pointer transition duration-300 overflow-hidden">
        <div className="h-40 w-full bg-gray-700 flex items-center justify-center">
          <img
            src={
              imageUrl ||
              "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
            }
            alt={name}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-[#FFF] font-bold">Prix : {price}€</p>
          <p className="text-[#FFF] font-bold text-sm">ID : {id}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default CourseCard;
