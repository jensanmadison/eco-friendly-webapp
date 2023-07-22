import Card from "./featureCards";
import { Link } from "react-router-dom";


function LandingPage() {
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
          title: "Feature 3",
          description: "This is another great feature.",
        },
        {
          img: "/fashion.png",
          tags: ["eco", "vegan"],
          title: "Feature 4",
          description: "This is another great feature.",
        },
        {
            img: "/fashion.png",
            tags: ["eco", "vegan"],
            title: "Feature 5",
            description: "This is another great feature.",
          },
    
        // Add more features...
      ];

  return (
    <>
 <header className="flex items-center justify-center flex-1 bg-green-300 p-10 text-center">
                <div>
                    <h1 className="text-5xl font-bold mb-4">Welcome to EcoFashion</h1>
                    <p className="text-2xl">Discover the best eco-friendly fashion brands</p>
                    <Link to="/eco" className="mt-4 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600 inline-block">
                        Get Started
                    </Link>
                </div>
            </header>

      <main className="flex-1 p-10">
  <div className="flex flex-wrap justify-center">
    {features.map((feature, index) => (
      <Card key={index} index={index} {...feature} />
    ))}
  </div>
</main>

    </>
  );
}

export default LandingPage;
