import { useParams } from "react-router-dom";

const features = [
    {
      img: "/fashion.png",
      tags: ["Eco", "Sustainable", "Organic"],
      title: "Green Threads Summer Collection",
      description: "Experience the ultimate comfort with our 100% organic cotton summer collection. Each piece is responsibly sourced and crafted with care, ensuring minimal impact on our planet.",
    },
    {
      img: "/fashion.png",
      tags: ["Eco", "Recycled", "Vegan"],
      title: "EcoChic Recycled Denim Line",
      description: "Our recycled denim line gives a second life to premium fabrics. By choosing EcoChic, you're not just getting a fashionable piece of clothing, you're making a statement for a greener future.",
    },
    {
      img: "/fashion.png",
      tags: ["Eco", "Fair Trade", "Vegan"],
      title: "Fair Fashion Winter Coats",
      description: "Stay warm without compromising your values. Our winter coats are made with ethically sourced materials and produced in fair-trade certified factories.",
    },
    {
      img: "/fashion.png",
      tags: ["Eco", "Biodegradable", "Organic"],
      title: "NatureWear Biodegradable Tees",
      description: "Our biodegradable tees are as kind to your skin as they are to the environment. Once their life cycle is complete, they return to the earth, leaving no trace behind.",
    },
    {
      img: "/fashion.png",
      tags: ["Eco", "Sustainable", "Vegan"],
      title: "VeganLeather Luxury Handbags",
      description: "Experience luxury with a conscience with our VeganLeather handbags. Crafted from high-quality, plant-based materials, these handbags prove that style and sustainability can go hand in hand.",
    },
  ];
  




  function FeaturePage() {
    const { featureId } = useParams<{ featureId: string }>();
    // const feature = features[Number(featureId)];
    const feature = features[0]
  
    if (!feature) {
      return <div>Feature not found</div>;
    }
  
    return (
      <div className="flex p-10">
        <div className="w-1/2 pr-4 flex flex-col justify-center items-center">
          <img className="w-3/4 h-[500px] object-cover rounded" src={feature.img} alt={feature.title} />
          {/* Add more images for the collage */}
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">{feature.title}</h1>
          <div className="mt-4 space-x-2">
            {feature.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-gray-300 text-gray-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-2 text-gray-500">{feature.description}</p>
          <div className="mt-2 text-gray-500">
            <h3 className="text-2xl font-bold">More Details</h3>
            <ul className="list-disc ml-5">
              <li>Material: 100% Organic Cotton</li>
              <li>Produced in fair-trade certified factories</li>
              <li>Zero-waste packaging</li>
              <li>Dye: Natural, low-impact dyes</li>
              <li>Carbon-neutral shipping</li>
            </ul>
  
            <h3 className="text-2xl font-bold mt-4">Where to Buy</h3>
            <ul className="ml-5">
              <li><a href="#" className="text-blue-500 underline">Official Website</a></li>
              <li><a href="#" className="text-blue-500 underline">Amazon</a></li>
              <li><a href="#" className="text-blue-500 underline">Etsy</a></li>
              <li><a href="#" className="text-blue-500 underline">Ebay</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

  export default FeaturePage;