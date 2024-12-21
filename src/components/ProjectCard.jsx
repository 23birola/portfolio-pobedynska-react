import { Link } from 'react-router-dom';

export default function WorkCard({ data }) {
  return (
    <div className="h-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-48 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#E9E9E9] via-transparent to-transparent"></div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h5 className="text-xl font-bold text-primary mb-2">{data.name}</h5>
          <p className="text-gray-600 mb-4">{data.skills.join(', ')}</p>
        </div>
        <div className="flex justify-between items-end">
          <Link
            to={data.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-t from-[#E9E9E9] to-gray-300 text-black px-4 py-2 rounded-full hover:from-gray-300 hover:to-[#E9E9E9]"
          >
            Project Page
          </Link>
          <Link
            to={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-t from-[#E9E9E9] to-gray-300 text-black px-4 py-2 rounded-full hover:from-gray-300 hover:to-[#E9E9E9]"
          >
            GitHub Link
          </Link>
        </div>
      </div>
    </div>
  );
}
