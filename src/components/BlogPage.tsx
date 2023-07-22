import BlogPost from "./BlogPost";

const blogPosts = [
  {
    img: "/fashion.png",
    title: "Sustainability in Fashion: A New Trend",
    description: "Discover how the fashion industry is embracing sustainable practices...",
    postId: 0,
  },
  {
    img: "/fashion.png",
    title: "The Rise of Vegan Leather",
    description: "Learn about the emergence of vegan leather and its impact on the environment...",
    postId: 1,
  },
  // Add more blog posts...
];

function BlogPage() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
