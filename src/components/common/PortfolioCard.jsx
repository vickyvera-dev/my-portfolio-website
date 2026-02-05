export default function PortfolioCard({
  title,
  image,
  description,
  tags,
  live,
  code,
}) {
  return (
    <div className="bg-[#E0F2E9] shadow-lg rounded pb-8 h-full">
      <a href={live} className="overflow-hidden flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-125"
        />
      </a>

      <div className="ml-4 mr-4">
        <h2 className="text-[#192F01] font-bold text-lg mt-3">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-yellow-600 text-white rounded-full py-1 px-4 text-xs shadow"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <a
            href={live}
            className="font-bold text-[#192F01] hover:underline"
          >
            Live Demo
          </a>
          <a
            href={code}
            className="font-bold text-[#192F01] hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
