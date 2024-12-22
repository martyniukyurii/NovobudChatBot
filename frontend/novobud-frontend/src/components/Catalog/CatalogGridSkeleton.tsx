import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CatalogGridSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md p-4"
        >
          {/* Скелетон для зображення */}
          <div className="w-1/3">
            <Skeleton height={200} />
          </div>

          {/* Скелетони для тексту */}
          <div className="flex-1">
            <Skeleton height={20} width="50%" />
            <Skeleton height={15} width="80%" />
            <Skeleton height={15} width="60%" className="mt-2" />
            <div className="mt-4">
              <Skeleton height={15} width="30%" />
              <Skeleton height={15} width="50%" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogGridSkeleton;
