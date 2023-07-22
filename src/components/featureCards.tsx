import { motion } from "framer-motion";

type CardProps = {
    img: string;
    tags: string[];
    title: string;
    description: string;
    index: number;
  };
  


import { Link } from "react-router-dom";

const Card: React.FC<CardProps> = ({ img, tags, title, description }) => {
  return (
    <Link to={`/features/${title}`}>
      <motion.div
        className="flex flex-col bg-white shadow-lg rounded p-4 m-2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-full h-64 object-cover rounded" src={img} alt={title} />
      <div className="mt-4 space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl mt-4 font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      </motion.div>
    </Link>
  );
};

export default Card;