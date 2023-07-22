import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-green-500 text-white">
      <Link to="/" className="text-2xl font-bold">EcoFashion</Link>
      <div className="space-x-4">
        <Link to="/eco" className="hover:underline">
          Eco Matters
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
