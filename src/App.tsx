import "./index.css";
import { motion } from "framer-motion";

type CardProps = {
  img: string;
  tags: string[];
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ img, tags, title, description }) => {
  return (
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
  );
};

function App() {
  const features = [
    // Replace these with your actual features
    {
      img: "/fashion.png",
      tags: ["eco", "sustainable"],
      title: "Feature 1",
      description: "This is a great feature.",
    },
    {
      img: "/fashion.png",
      tags: ["eco", "vegan"],
      title: "Feature 2",
      description: "This is another great feature.",
    },
    {
      img: "/fashion.png",
      tags: ["eco", "vegan"],
      title: "Feature 2",
      description: "This is another great feature.",
    },
    {
      img: "/fashion.png",
      tags: ["eco", "vegan"],
      title: "Feature 2",
      description: "This is another great feature.",
    },

    // Add more features...
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-green-500 text-white">
        <h1 className="text-2xl font-bold">EcoFashion</h1>
        <div className="space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>

      <header className="flex items-center justify-center flex-1 bg-green-300 p-10 text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to EcoFashion</h1>
          <p className="text-2xl">
            Discover the best eco-friendly fashion brands
          </p>
          <button className="mt-4 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-1 p-10">
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>
      </main>

      <footer className="py-6 px-10 bg-green-500 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} EcoFashion. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
