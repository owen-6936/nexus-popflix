import Card from "./Card";

export default function CardRack() {
  return (
    <div className="mt-3">
      <h2 className="font-san font-bold text-gray-700 ml-10 mb-3">Category</h2>
      <div
        id="card-rack"
        className="flex overflow-x-auto scroll-smooth snap-x snap-proximity scroll-p-4 scrollbar-hide pr-2"
      >
        {
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      </div>
    </div>
  );
}
