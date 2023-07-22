import { Link } from "react-router-dom";

type BlogPostProps = {
  img: string;
  title: string;
  description: string;
  postId: number;
};

const BlogPost: React.FC<BlogPostProps> = ({ img, title, description, postId }) => {
  return (
    <Link to={`/blog/${postId}`}>
      <div className="flex flex-col bg-white shadow-lg rounded p-4 m-2">
        <img className="w-full h-64 object-cover rounded" src={img} alt={title} />
        <h2 className="text-2xl mt-4 font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <p className="mt-2 text-blue-500 underline">Read More</p>
      </div>
    </Link>
  );
};

export default BlogPost;
