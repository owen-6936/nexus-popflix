export default function Card() {
  const title = "blah blah";
  const imageUrl =
    "https://placehold.co/150x200?text=" + encodeURIComponent(title);
  const year = 2025;
  return (
    <div className="relative rounded-lg shadow-lg bg-gray-800 text-white cursor-pointer group  min-w-[150px] h-[200px] flex flex-col mx-3 overflow-hidden aspect-[2/3] snap-start">
      <div className="bg-gray-700 h-[74%]">
        <img
          src={imageUrl}
          alt={`${title} poster`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-2 h-full">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
    </div>
  );
}
